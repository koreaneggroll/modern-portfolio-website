import React from 'react';
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


        <Flex  className="Welcome" display={{base: 'inline-block', md: 'flex', lg: 'flex'}}>
            <Box m={{base: '10', md: '20', lg: '40'}}>

                <Text   fontSize={80} className="welcome-text-main">
                    <b>I'M ARIN</b>
                    <Text textDecoration='underline' ml={{base: '5', md: '10', lg: '20'}} fontSize={40}>
                        SOFTWARE
                    </Text>
                    <Text textDecoration='underline' fontSize={40}>
                        DEVELOPER
                    </Text>
                </Text>
            </Box>

            
        </Flex>

        <Center>
            <Flex mt={100} className="Welcome-bottom-side">
                <Box className="Welcome-ScrollWheel">
                    <IconButton aria-label='Scroll WebPage' icon={<TriangleDownIcon />} />
                </Box>
            </Flex>
        </Center>

        
        <Flex className="Pages-Buttons">
            <Box className="buttons">
                
            </Box>
        </Flex>


    </ChakraProvider>
  );
}

export default Page;