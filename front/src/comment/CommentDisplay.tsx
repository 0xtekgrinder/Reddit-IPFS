import Comment from "../comment/Comment";
import {Card, CardBody, CardHeader, Container, Divider} from "@chakra-ui/react";
import Loader from "../reddit/Loader";

export default function CommentDisplay({ comment }: { comment: Comment }) {
    return (
        <Card
            width={'container.md'}
            _hover={{ bg: 'gray.400' }}
        >
            <CardHeader>
                {comment.content}
            </CardHeader>
        </Card>
    );
}