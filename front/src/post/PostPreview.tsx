import Post from "./Post";
import {Card, CardBody, CardHeader, Icon} from "@chakra-ui/react";

export default function PostPreview({ post, onSelect }: { post: Post, onSelect: (post?: Post) => void }) {
    return (
        <Card
            width={'container.md'}
            onClick={() => onSelect(post)}
            _hover={{ bg: 'gray.400' }}
        >
            <CardHeader>
                {post.title}
            </CardHeader>
            <CardBody>
                {post.content.slice(0, 20)}
                <Icon>{post.upvotes}</Icon>
            </CardBody>
        </Card>
    );
}