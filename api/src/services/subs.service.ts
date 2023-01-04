import { CID } from "../types/CID.js";
import { Sub } from "../types/Sub.js";
import IPNSService from "./ipns.service.js";

export default class SubsService extends IPNSService {
    public static async get(recordName: string): Promise<Sub> {
        return this.retrieveFile<Sub>(recordName);
    }

    public static async store(recordName: string, comment: Sub): Promise<void> {
        // Set posts to empty when creating a new sub
        comment.posts = [];
        const key = await this.storeRecordFile(recordName, comment);

        // Append to the global list of subs the new sub
        await this.appendToList(process.env.SUBREDDIT_CID, process.env.SUBREDDIT_KEY, key, false);
    }

    public static async delete(cidToRemove: CID): Promise<void> {
        // Delete from the global list of subs the sub
        await this.removeFromList(process.env.SUBREDDIT_CID, process.env.SUBREDDIT_KEY, cidToRemove);
    }

    public static async update(recordName: string, comment: Sub): Promise<void> {
        await this.storeRecordFile(recordName, comment, false);
    }

    public static async addPost(sub: Sub, postCID: CID): Promise<void> {
        sub.posts.push(postCID);
        await this.storeRecordFile(sub.title, sub, false);
    }

    public static async getSubs(): Promise<CID[]> {
        return this.retrieveFile(process.env.SUBREDDIT_CID);
    }
}