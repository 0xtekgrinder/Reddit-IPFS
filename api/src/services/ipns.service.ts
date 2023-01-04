import ipfs from "../config/ipfs.config.js";
import { CID } from "../types/CID.js";
import IPFSService from "./ipfs.service.js";

export default class IPNSService extends IPFSService{
    protected static async retrieveFile<ContentType>(recordName: string): Promise<ContentType> {
        // Resolve the ipns to get the underlying ipfs cid
        const res = ipfs.name.resolve(recordName);
        let content = [];

        for await (const chunk of res) {
            content = [...content, ...chunk];
        }
        const path = Buffer.from(content.join("")).toString('utf8');

        // Get the content of the underlying ipfs cid
        return await IPFSService.retrieveFile<ContentType>(path);
    }

    protected static async storeRecordFile(recordName: string, content: any, create: boolean = true): Promise<string> {
        const cid = await IPFSService.storeFile(content);

        // Generate a new key to be able to use to publish the ipfs file with a specified id
        if (create) await ipfs.key.gen(recordName, {type: 'rsa', size: 2048});

        const published = await ipfs.name.publish('/ipfs/' + cid, { key: recordName });
        return published.name;
    }

    protected static async appendToList(cidListRecordName: string, cidListRecordKey: string, cidToAdd: CID, createKey: boolean = true): Promise<void> {
        let list = await this.retrieveFile<CID[]>(cidListRecordName);
        // if list is undefined means that the list is empty
        if (list === undefined)
            list = [];
        list.push(cidToAdd);
        await this.storeRecordFile(cidListRecordKey, list, createKey);
    }

    protected static async removeFromList(cidListRecordName: string, cidListRecordKey: string, cidToRemove: CID): Promise<void> {
        const list = await this.retrieveFile<CID[]>(cidListRecordName);
        for (let i = 0; i < list.length; i++){ 
            if (list[i] === cidToRemove) { 
                list.splice(i, 1); 
            }
        }
        await this.storeRecordFile(cidListRecordKey, list, false);
    }
}