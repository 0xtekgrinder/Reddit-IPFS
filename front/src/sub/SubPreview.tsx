import Sub from "./Sub";
import {Card, CardBody, CardHeader} from "@chakra-ui/react";

export default function SubPreview({ sub, onSelect }: { sub: Sub, onSelect: (sub: Sub) => void }) {
    return (
        <Card
            width={'container.md'}
            onClick={() => onSelect(sub)}
            _hover={{ bg: 'gray.400' }}
        >
            <CardHeader>
                {sub.title}
            </CardHeader>
            <CardBody>
                {sub.content.slice(0, 20)}
            </CardBody>
        </Card>
    );
}