import { CID } from "../types/CID";
import { Comment } from "../types/Comment.js";
import IPFSService from "./ipfs.service.js";

export default class CommentService extends IPFSService {
    public static async get(cid: string): Promise<Comment> {
        return this.retrieveFile<Comment>(cid);
    }

    public static async store(comment: Comment): Promise<CID> {
        return this.storeFile(comment);
    }
}