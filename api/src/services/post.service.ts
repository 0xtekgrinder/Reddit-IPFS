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

    public static async addComment(post: Post, commentToAdd: CID, key: string): Promise<void> {
        post.comments.push(commentToAdd);
        await this.storeRecordFile(key, post, false);
    }
}