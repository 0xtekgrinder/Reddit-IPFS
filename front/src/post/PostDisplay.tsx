import Comment from "../comment/Comment";
import {Button, Card, CardBody, CardHeader, Container, Divider} from "@chakra-ui/react";
import Loader from "../reddit/Loader";
import Post from "../post/Post";
import CommentsList from "../comment/CommentsList";

function loadComments(post: Post) : Promise<Comment[]>{
    //create a promise that resolves after 2 seconds for each post and gather them in an array
    return Promise.all(post.comments.map((comment) =>
        new Promise((resolve: (com: Comment) => void) =>
            setTimeout(() => {
                let ret : Comment = {
                    content: `This is the content of comment ${comment}`,
                }
                resolve(ret)
            }, 2000 + Math.random() * 3000)
        )
    ));
}

export default function PostDisplay({ post, onReturn }: { post: Post, onReturn: () => void }) {
    return (
        <Container maxW='container.lg' centerContent padding={4}>
            <Button marginY={4} onClick={() => onReturn()}>Back</Button>
            <Card
                width={'container.md'}
                _hover={{ bg: 'gray.400' }}
            >
                <CardHeader>
                    {post.title}
                </CardHeader>
                <CardBody>
                    {post.content}
                </CardBody>
            </Card>
            <Divider my={4} maxW={'container.lg'}/>
            <Loader actionFct={loadComments} displayFct={(comments) => <CommentsList comments={comments} />} actionFctArgs={post}/>
        </Container>
    );
}