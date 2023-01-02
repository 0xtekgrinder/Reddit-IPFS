import Sub from "../sub/Sub";
import SubsList from "../sub/SubsList";
import Loader from "./Loader";
import {useState} from "react";
import SubDisplay from "../sub/SubDisplay";
import Post from "../post/Post";
import PostDisplay from "../post/PostDisplay";

function loadSubs(): Promise<Sub[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    name: "r/programming",
                    description: "A subreddit for all things programming",
                    posts: [
                        "1",
                        "2",
                        "3",
                    ]
                },
                {
                    name: "r/programminghorror",
                    description: "A subreddit for all things programming",
                    posts: [
                        "1",
                        "2",
                        "3",
                    ]
                },
                {
                    name: "r/programmingcirclejerk",
                    description: "A subreddit for all things programming",
                    posts: [
                        "1",
                        "2",
                        "3",
                    ]
                },
            ]);
        }, 4000 + Math.random() * 3000);
    });
}

export default function Home() {
    const [sub, setSub] = useState<Sub>();
    const [post, setPost] = useState<Post>();

    if (post)
        return <PostDisplay post={post} onReturn={() => setPost(undefined)}/>;
    else if (sub)
        return <SubDisplay sub={sub} onSelect={setPost} onReturn={() => setSub(undefined)}/>
    else
        return <Loader actionFct={loadSubs} displayFct={(subs) => <SubsList subs={subs} onSelect={setSub}/>}/>;
}