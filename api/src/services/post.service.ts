import { CID } from "../types/CID.js";
import { Post } from "../types/Post.js";
import IPNSService from "./ipns.service.js";

export default class PostService extends IPNSService {
    public static async get(recordName: string): Promise<Post> {
        return this.retrieveFile<Post>(recordName);
    }

    public static async store(recordName: string, comment: Post): Promise<string> {
        comment.comments = [];
        return await this.storeRecordFile(recordName, comment);
    }

    public static async addComment(recordName: string, commentCID: CID): Promise<void> {
        let post = await this.get(recordName);
        post.comments.push(commentCID);
        await this.store(recordName, post);
    }
}