import {Container, StackDivider, VStack} from "@chakra-ui/react";
import {ReactElement} from "react";

export default function PreviewList<T>({ elems, elemFct }: { elems: T[], elemFct: (elem: T) => ReactElement }) {
    return (
        <Container maxW='container.lg' centerContent borderWidth={1} borderRadius={15} borderColor={'gray.200'} padding={4}>
            <VStack width={'container.md'} divider={<StackDivider borderColor='gray.200' />}>
                {elems.length ? elems.map(elemFct) : <p>No elements</p>}
            </VStack>
        </Container>
    );
}
