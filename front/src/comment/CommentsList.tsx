import PreviewList from "../reddit/PreviewList";
import Comment from "./Comment";
import CommentDisplay from "./CommentDisplay";

export default function CommentsList({ comments }: { comments: Comment[] }) {
    return PreviewList<Comment>({
        elems: comments,
        elemFct: elem => <CommentDisplay comment={elem}/>
    });
}
