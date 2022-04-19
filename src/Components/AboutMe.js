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
    IconButton,
    Heading
} from '@chakra-ui/react';


import "../Css/AboutMe.css";

import TopBar from './TopBar';

import AboutmeSVG from '../Pictures/about-page.svg';


function Aboutme(){
    return(
        <ChakraProvider theme={theme}>
            <Box className="about-me">
                <div className="topbar">
                    <TopBar/>
                </div>


                <div className="main-about-me">
                    <Box className="about-me-wrapper">
                        <Box mt={{base: '20', md: '30', lg: '40'}} display={{base: 'block', md: 'flex', lg: 'flex'}} className="about-me-heading">
                            <Heading fontSize={100}>
                                ABOUT ME
                            </Heading>
                        </Box>
                    </Box>
                </div>
            </Box>
        </ChakraProvider>
    );
}



export default Aboutme;