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
    Show,
    Hide,
    Grid,
    GridItem
} from '@chakra-ui/react';


import "../Css/AboutMe.css";

import TopBar from './TopBar';

import AboutmeSVG from '../Pictures/about-page.svg';

import { ArrowRightIcon, ChevronDownIcon, ChatIcon, CalendarIcon } from '@chakra-ui/icons';


function Aboutme(){
    return(
        <ChakraProvider theme={theme}>
            <Box className="about-me">

                <div className="topbar">
                    <TopBar/>
                </div>


                    {/*
                        <Box className="about-me-wrapper">
                        <Box mt={{base: '20', md: '30', lg: '40'}} display={{base: 'block', md: 'flex', lg: 'flex'}} className="about-me-heading">
                            <Box  ml={{base: '20', md: '10', lg: '10'}}>
                                <Text display={{base: 'block', md: 'flex', lg: 'flex'}} fontSize={{base: '80', md: '80', lg: '100'}}>
                                    <b>
                                        <Text>
                                            ABOUT
                                        </Text>

                                        <Text ml={{base: '6', md: '8', lg: '10'}}>
                                            ME
                                        </Text>
                                    </b>
                                </Text>
                                
                            </Box>

                            <Show below='sm'>
                                <Center>
                                    <Box mt={5} className="about-me-arrow-right">
                                        <ArrowRightIcon fontSize={30} />
                                    </Box>
                                </Center>
                            </Show>


                            <Show above='sm'>
                                <Box mt={{ md: '36', lg: '36'}} className="about-me-arrow-right">
                                    <ArrowRightIcon fontSize={40} />
                                </Box>
                            </Show>



                           <Show below='sm'>
                                <Center>
                                    <Box mt={20} color='gray.500' className="small-intro-icon">
                                        <ChevronDownIcon />
                                    </Box>
                                </Center>
                            </Show>


                            <Show above='sm'>
                                <Box ml={{md: '300', lg: '500'}} color='gray.500' className="small-intro-icon">
                                    <ChevronDownIcon />
                                </Box>
                            </Show>
                            
                        </Box>

                        
                        
                    </Box>

    */}  


            <Box display="block" className="about-me-wrapper">
                <Center>
                    <Text mt={20} className="about-text-header">
                        {
                            //make it underlined
                        }
                        About
                    </Text>

                </Center>

                <Center>
                    <Box mt={20} className="quick-overview-of-attributes">
                        <Grid display={{base: 'block', md: 'flex', lg: 'flex'}} gap={10}>

                            <GridItem className="attribute-grid-item">
                                <ChatIcon />
                            </GridItem>


                            <GridItem className="attribute-grid-item">
                                <ChatIcon />
                            </GridItem>


                            <GridItem className="attribute-grid-item">
                                <ChatIcon />
                            </GridItem>


                            <GridItem className="attribute-grid-item">
                                <ChatIcon />
                            </GridItem>
                            
                        </Grid>
                    </Box>
                </Center>


                
            </Box>
                    



                
            </Box>
        </ChakraProvider>
    );
}



export default Aboutme;