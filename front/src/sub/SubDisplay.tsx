import Sub from "./Sub";
import {Button, Card, CardBody, CardHeader, Container, Divider} from "@chakra-ui/react";
import Loader from "../reddit/Loader";
import Post from "../post/Post";
import PostsList from "../post/PostsList";

function loadPosts(sub: Sub) : Promise<Post[]>{
    //create a promise that resolves after 2 seconds for each post and gather them in an array
    return Promise.all(sub.posts.map((post) =>
        new Promise((resolve: (arg0: Post) => void) =>
            setTimeout(() => {
                let ret : Post = {
                    title: `Post ${post}`,
                        content: `This is the content of post ${post}`,
                    upvotes: Math.floor(Math.random() * 100),
                    comments: [
                    "1",
                    "2",
                    "3",
                    ]
                }
                resolve(ret)
            }, 2000 + Math.random() * 3000)
        )
    ));
}

export default function SubDisplay({ sub, onSelect, onReturn }: { sub: Sub, onSelect: (post?: Post) => void, onReturn: () => void }) {
    return (
        <Container maxW='container.lg' centerContent padding={4}>
            <Button my={4} onClick={() => onReturn()}>Back</Button>
            <Card
                width={'container.md'}
                _hover={{ bg: 'gray.400' }}
            >
                <CardHeader>
                    {sub.name}
                </CardHeader>
                <CardBody>
                    {sub.description}
                </CardBody>
            </Card>
            <Divider my={4} maxW={'container.lg'}/>
            <Loader actionFct={loadPosts} displayFct={(posts) => <PostsList posts={posts} onSelect={onSelect}/>} actionFctArgs={sub}/>
        </Container>
    );
}