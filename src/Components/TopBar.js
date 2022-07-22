import React from 'react';

import {
    Box,
    Flex,
    Spacer,
    Circle,
    Center,
    Divider,
  } from '@chakra-ui/react';


import { ChevronRightIcon } from '@chakra-ui/icons'

import { ColorModeSwitcher } from '../ColorModeSwitcher';


import "../Css/topbar.css";

function TopBar(){
    return(
        <>
            <Flex className="topbar" m={6} >
                <Center className="logo">
                    Logo
                </Center>

                <Center display={{base: 'none', md: 'flex', lg: 'flex'}} className="topbar-email">
                    <Box ml={{base: '0', md: '2', lg: '20'}}>
                        <ChevronRightIcon />
                    </Box>

                    <Box ml={{base: '0', md: '2', lg: '20'}}>
                        <i>
                            aringrigofficial@gmail.com
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

        </>
    )
}


export default TopBar;
