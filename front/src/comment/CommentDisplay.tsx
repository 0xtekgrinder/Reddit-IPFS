import Comment from "../comment/Comment";
import {Card, CardHeader} from "@chakra-ui/react";

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