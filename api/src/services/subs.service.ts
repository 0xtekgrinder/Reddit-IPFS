import { CID } from "../types/CID.js";
import { Sub } from "../types/Sub.js";
import IPNSService from "./ipns.service.js";

export default class SubsService extends IPNSService {
    public static async get(recordName: string): Promise<Sub> {
        return this.retrieveFile<Sub>(recordName);
    }

    public static async store(recordName: string, comment: Sub): Promise<void> {
        await this.storeRecordFile(recordName, comment);
    }

    public static async addPost(recordName: string, postCID: CID): Promise<void> {
        let post = await this.get(recordName);
        post.posts.push(postCID);
        await this.store(recordName, post);
    }

    public static async addSub(recordName: string, subCID: CID): Promise<void> {
        await this.appendToList(recordName, subCID);
    }

    public static async getSubs(): Promise<CID[]> {
        return this.retrieveFile("k51qzi5uqu5dlgda8y39keszex17mzusqssbfsfb92h7losrcb40ud3fyfduu2"); // TODO add environment variable
    }
}