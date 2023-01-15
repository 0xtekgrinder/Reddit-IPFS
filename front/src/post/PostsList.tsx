import Post from "./Post";
import PreviewList from "../reddit/PreviewList";
import PostPreview from "./PostPreview";

export default function PostsList({ posts, onSelect }: { posts: Post[], onSelect: (post?: Post) => void }) {
    return PreviewList<Post>({
        elems: posts,
        elemFct: elem => <PostPreview post={elem} onSelect={onSelect}/>
    });
}
