import * as React from "react"
import {
    ChakraProvider,
    Box,
    theme,
    Heading,
    Flex, Input,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Home from "./reddit/Home";
import {useEffect, useRef, useState} from "react";

export const App = () => {
    const [gateway, setGateway] = useState(process.env.REACT_APP_IPFS_GATEWAY || "https://ipfs.io");



    return (
        <ChakraProvider theme={theme}>
            <Flex align={"center"} p={2}>
                <Box flex={1}/>
                <Heading marginLeft={'auto'}>Reddit Clone</Heading>
                <Box flex={1} justifyContent={'flex-end'}>
                    <ColorModeSwitcher float={'right'}/>
                </Box>
            </Flex>
            <Flex align={"flex-end"} p={2}>
                <Box flex={1}>
                    <Input type="string" onChange={(e) => setGateway(e.target.value)} value={gateway}/>
                </Box>
            </Flex>

            <Home gateway={gateway}/>
        </ChakraProvider>
    )
}