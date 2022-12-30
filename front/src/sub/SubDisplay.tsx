import Sub from "./Sub";
import {Card, CardBody, CardHeader} from "@chakra-ui/react";

export default function SubDisplay({ sub }: { sub: Sub }) {
    return (
        <Card
            width={'container.md'}
            _hover={{ bg: 'gray.400' }}
        >
            <CardHeader>
                {sub.name}
            </CardHeader>
            <CardBody>
                {sub.description.slice(0, 20)}
            </CardBody>
        </Card>
    );
}