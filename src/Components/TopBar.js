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

import Discord from '../Pictures/discord.svg';
import Github from '../Pictures/github.svg';
import Instagram from '../Pictures/instagram.svg';
import Twitter from '../Pictures/twitter.svg';


import "../Css/TopBar.css";


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
                    <a className="icon" href>
                        <img height={30} width={30} src={Github} alt="discord"></img>
                    </a>


                    <a className="icon" href>
                        <img height={30} width={30} src={Instagram} alt="discord"></img>
                    </a>


                    <a className="icon" href>
                        <img height={30} width={30} src={Twitter} alt="discord"></img>
                    </a>


                    <a className="icon" href>
                        <img height={30} width={30} src={Discord} alt="discord"></img>
                    </a>


                    <ColorModeSwitcher />
                </Center>

            </Flex>

            <Divider orientation='horizontal'/>

        </>
    )
}


export default TopBar;
