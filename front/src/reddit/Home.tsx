import axios from 'axios';
import {useState} from "react";
import Sub from "../sub/Sub";
import SubsList from "../sub/SubsList";
import Loader from "./Loader";
import SubDisplay from "../sub/SubDisplay";
import Post from "../post/Post";
import PostDisplay from "../post/PostDisplay";

function loadSubs(gateway: string): Promise<Sub[]> {
    return new Promise(async (resolve, reject) => {
        // fetch subs from the ipfs gateway
        const data = await axios.get(gateway + `/ipns/${process.env.REACT_APP_SUBSLIST_CID}`, );
        console.log(data);
        console.log(data.data);
        let promises : Promise<Sub>[] = [];
        for (let sub of data.data.data) {
            promises.push(new Promise(async (resolve, reject) => {
                const data = await axios.get(gateway + `/ipns/${sub}`);
                resolve(data.data.data);
            }));
        }
        resolve(Promise.all(promises));
        /*setTimeout(() => {
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
        }, 4000 + Math.random() * 3000);*/
    });
}

export default function Home({gateway }: { gateway: string }) {
    const [sub, setSub] = useState<Sub>();
    const [post, setPost] = useState<Post>();

    if (post)
        return <PostDisplay post={post} gateway={gateway} onReturn={() => setPost(undefined)}/>;
    else if (sub)
        return <SubDisplay sub={sub} gateway={gateway} onSelect={setPost} onReturn={() => setSub(undefined)}/>
    else
        return <Loader actionFct={loadSubs} displayFct={(subs) => <SubsList subs={subs} onSelect={setSub}/>} actionFctArgs={gateway}/>;
}