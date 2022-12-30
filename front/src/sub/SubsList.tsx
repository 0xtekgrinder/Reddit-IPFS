import Sub from "./Sub";
import {Box, Center, Container, Divider, StackDivider, VStack} from "@chakra-ui/react";
import SubDisplay from "./SubDisplay";

export default function SubsList({ subs }: { subs: Sub[] }) {
    return (
        <Container maxW='container.lg' centerContent borderWidth={1} borderRadius={15} borderColor={'gray.200'} padding={4}>
                <VStack width={'container.md'} divider={<StackDivider borderColor='gray.200' />}>
                    {subs.map((sub: Sub) => (
                        <SubDisplay sub={sub} />
                    ))}
                </VStack>
        </Container>
    );
}
