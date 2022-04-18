import React, { useRef } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Spacer,
  Circle,
  Center,
  Divider,
  Text,
  IconButton
} from '@chakra-ui/react';

import { ChevronRightIcon, TriangleDownIcon } from '@chakra-ui/icons'

import { ColorModeSwitcher } from '../ColorModeSwitcher';

import Loader from './Loader';
import Aboutme from './AboutMe';
import Main from './Main';
import "../Css/Page.css";







function Page() {


  return (
    <ChakraProvider theme={theme}>

        {
        //<Loader />
        }   

        <Flex className="topbar" m={6} >
            <Center className="logo">
                Logo
            </Center>

            <Center display={{base: 'none', md: 'flex', lg: 'flex'}} color="gray.600">
                <Box ml={{base: '0', md: '2', lg: '20'}}>
                    <ChevronRightIcon />
                </Box>

                <Box ml={{base: '0', md: '2', lg: '20'}}>
                    <i>
                        aringrigoras@gmail.com
                    </i>
                </Box>
            </Center>

            <Spacer/>

            <Center className="icons">
                <Circle _hover={{color: 'gray'}} mr={{base: '4', md: '8', lg: '10'}} className="icon">
                    {
                        //use icon button
                    }
                    Icon
                </Circle>


                <Circle _hover={{color: 'gray'}} mr={{base: '4', md: '8', lg: '10'}} className="icon">
                    Icon
                </Circle>


                <Circle _hover={{color: 'gray'}} mr={{base: '4', md: '8', lg: '10'}} className="icon">
                    Icon
                </Circle>


                <Circle _hover={{color: 'gray'}} mr={{base: '4', md: '8', lg: '10'}} className="icon">
                    Icon
                </Circle>


                <ColorModeSwitcher />
            </Center>

        </Flex>

        <Divider orientation='horizontal'/>


        <Flex className="main">
            <Main />
        </Flex>

        
        


    </ChakraProvider>
  );
}

export default Page;