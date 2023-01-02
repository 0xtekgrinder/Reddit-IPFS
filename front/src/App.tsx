import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Heading,
  Flex,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Home from "./reddit/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex align={"center"} p={2}>
      <Box flex={1}/>
      <Heading marginLeft={'auto'}>Reddit Clone</Heading>
      <Box flex={1} justifyContent={'flex-end'}>
        <ColorModeSwitcher float={'right'}/>
      </Box>
    </Flex>
        <Home />
  </ChakraProvider>
)
