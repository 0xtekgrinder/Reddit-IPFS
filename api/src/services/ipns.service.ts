import ipfs from "../config/ipfs.config.js";
import { CID } from "../types/CID.js";
import IPFSService from "./ipfs.service.js";

export default class IPNSService extends IPFSService{
    protected static async retrieveFile<ContentType>(recordName: string): Promise<ContentType> {
        const res = ipfs.name.resolve(recordName);
        let content = [];

        for await (const chunk of res) {
            content.push(chunk);
        }
        const path = Buffer.from(content).toString('utf8')
        return await IPFSService.retrieveFile<ContentType>(path);
    }

    protected static async storeRecordFile(recordName: string, content: any): Promise<void> {
        const cid = await IPFSService.storeFile(content);
        await ipfs.name.publish(cid, { key: recordName });
    }

    protected static async appendToList(cidListRecordName: string, cidToAdd: CID): Promise<void> {
        const list = await this.retrieveFile<CID[]>(cidListRecordName);
        list.push(cidToAdd);
        await this.storeRecordFile(cidListRecordName, list);
    }
}