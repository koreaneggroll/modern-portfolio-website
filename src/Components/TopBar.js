import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Spacer,
  Circle,
  Center
} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../ColorModeSwitcher';

function TopBar() {
  return (
    <ChakraProvider theme={theme}>
        <Flex m={6} >
            <Center className="logo">
                Logo
            </Center>

            <Spacer/>

            <Center className="icons">
                <Circle _hover={{color: 'gray'}} mr={6} className="icon">
                    Icon
                </Circle>


                <Circle _hover={{color: 'gray'}} mr={6} className="icon">
                    Icon
                </Circle>


                <Circle _hover={{color: 'gray'}} mr={6} className="icon">
                    Icon
                </Circle>


                <Circle _hover={{color: 'gray'}} mr={6} className="icon">
                    Icon
                </Circle>


                <ColorModeSwitcher />
            </Center>
        </Flex>
    </ChakraProvider>
  );
}

export default TopBar;