import ipfs from "../config/ipfs.config.js";
import { CID } from "../types/CID.js";

export default class IPFSService {
    protected static async retrieveFile<ContentType>(cid: CID): Promise<ContentType> {
        const res = await ipfs.cat(cid);
        let content = [];

        for await (const chunk of res) {
            content = [...content, ...chunk];
        }
        const raw = Buffer.from(content).toString('utf8')
        const file = JSON.parse(raw);
        return file.data as ContentType;
    }

    protected static async storeFile(content: any): Promise<CID> {
        const res = await ipfs.add(JSON.stringify({ data: content }));
        return res.cid.toString();
    }
}