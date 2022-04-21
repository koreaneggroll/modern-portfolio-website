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
    IconButton,
    Show,
    Hide,
    Grid,
    GridItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Avatar,
    AvatarBadge
} from '@chakra-ui/react';


import "../Css/AboutMe.css";

import TopBar from './TopBar';

import AboutmeSVG from '../Pictures/about-page.svg';

import { ArrowRightIcon, ChevronDownIcon, ChatIcon, UnlockIcon } from '@chakra-ui/icons';

import Emoji from '../Custom/Emoji';


import ArinLogo from "../Pictures/arin-logo.png";


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


                <Hide below="sm">
                    <Center>
                        <Box mt={20} className="quick-overview-of-attributes">
                            
                            <Grid className="attributes" display='flex' gap={{base: '20', md: '20', lg: '60'}}>

                                <GridItem className="attribute-grid-item">
                                    <Popover>
                                        <PopoverTrigger>
                                            <Box className="grid-button" as="button">
                                                <ChatIcon color="aqua" focusable={true} fontSize='50' className="grid-item-icon" />
                                            </Box>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />

                                            <PopoverHeader>
                                                Communicative <Emoji symbol="😌" />
                                            </PopoverHeader>

                                            <PopoverBody>
                                                I can communicate with other people and share ideas efficiently.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </GridItem>


                                <GridItem className="attribute-grid-item">
                                    <Popover>
                                        <PopoverTrigger>
                                            <Box className="grid-button" as="button">
                                                <UnlockIcon color="royalblue" focusable={true} fontSize='50' className="grid-item-icon" />
                                            </Box>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />

                                            <PopoverHeader>
                                                Using Open-Source <Emoji symbol="🤓" />
                                            </PopoverHeader>

                                            <PopoverBody>
                                                I have been able to use Git since really early in my programming journey, hence I am comfortable using it
                                                together with GitHub to efficiently share my software with the world.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </GridItem>


                                <GridItem className="attribute-grid-item">
                                    <Popover>
                                        <PopoverTrigger>
                                            <Box className="grid-button" as="button">
                                                <UnlockIcon color="royalblue" focusable={true} fontSize='50' className="grid-item-icon" />
                                            </Box>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />

                                            <PopoverHeader>
                                                Using Open-Source <Emoji symbol="🤓" />
                                            </PopoverHeader>

                                            <PopoverBody>
                                                I have been able to use Git since really early in my programming journey, hence I am comfortable using it
                                                together with GitHub to efficiently share my software with the world.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </GridItem>


                                <GridItem className="attribute-grid-item">
                                    <Popover>
                                        <PopoverTrigger>
                                            <Box className="grid-button" as="button">
                                                <UnlockIcon color="royalblue" focusable={true} fontSize='50' className="grid-item-icon" />
                                            </Box>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />

                                            <PopoverHeader>
                                                Using Open-Source <Emoji symbol="🤓" />
                                            </PopoverHeader>

                                            <PopoverBody>
                                                I have been able to use Git since really early in my programming journey, hence I am comfortable using it
                                                together with GitHub to efficiently share my software with the world.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </GridItem>
                                
                            </Grid>
                        </Box>
                    </Center>
                </Hide>


                <Show below="sm">
                    <Center>
                        <Box mt={20} className="quick-overview-of-attributes">
                            <Grid className="attributes" gap={{base: '60', md: '20'}} templateColumns='repeat(2, 2fr)'>

                                <GridItem className="attribute-grid-item">
                                    <Popover>
                                        <PopoverTrigger>
                                            <Box className="grid-button" as="button">
                                                <UnlockIcon color="royalblue" focusable={true} fontSize='50' className="grid-item-icon" />
                                            </Box>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />

                                            <PopoverHeader>
                                                Using Open-Source <Emoji symbol="🤓" />
                                            </PopoverHeader>

                                            <PopoverBody>
                                                I have been able to use Git since really early in my programming journey, hence I am comfortable using it
                                                together with GitHub to efficiently share my software with the world.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </GridItem>


                                <GridItem className="attribute-grid-item">
                                    <Popover>
                                        <PopoverTrigger>
                                            <Box className="grid-button" as="button">
                                                <UnlockIcon color="royalblue" focusable={true} fontSize='50' className="grid-item-icon" />
                                            </Box>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />

                                            <PopoverHeader>
                                                Using Open-Source <Emoji symbol="🤓" />
                                            </PopoverHeader>

                                            <PopoverBody>
                                                I have been able to use Git since really early in my programming journey, hence I am comfortable using it
                                                together with GitHub to efficiently share my software with the world.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </GridItem>


                                <GridItem className="attribute-grid-item">
                                    <Popover>
                                        <PopoverTrigger>
                                            <Box className="grid-button" as="button">
                                                <UnlockIcon color="royalblue" focusable={true} fontSize='50' className="grid-item-icon" />
                                            </Box>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />

                                            <PopoverHeader>
                                                Using Open-Source <Emoji symbol="🤓" />
                                            </PopoverHeader>

                                            <PopoverBody>
                                                I have been able to use Git since really early in my programming journey, hence I am comfortable using it
                                                together with GitHub to efficiently share my software with the world.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </GridItem>


                                <GridItem className="attribute-grid-item">
                                    <Popover>
                                        <PopoverTrigger>
                                            <Box className="grid-button" as="button">
                                                <UnlockIcon color="royalblue" focusable={true} fontSize='50' className="grid-item-icon" />
                                            </Box>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />

                                            <PopoverHeader>
                                                Using Open-Source <Emoji symbol="🤓" />
                                            </PopoverHeader>

                                            <PopoverBody>
                                                I have been able to use Git since really early in my programming journey, hence I am comfortable using it
                                                together with GitHub to efficiently share my software with the world.
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </GridItem>

                            </Grid>
                        </Box>
                    </Center>
                </Show>



                <Divider mt={20} />



                <Center>
                    <Box mr={{base: '0', md: '600', lg: '700'}} mt={{base: '10', md: '20', lg: '20'}} className="about-me-avatar-and-paragraph">
                        <Box className="about-me-avatar">
                            <Avatar
                             name="Arin Grigoras" 
                             src={ArinLogo}
                             size='3xl'
                             loading="eager"
                             showBorder={true}
                             borderWidth='5px'
                             borderColor='blue.900'
                             >
                                
                            </Avatar>
                        </Box>

                        <Box className="about-me-transition-avatar-paragraph">
                            <Center>
                                <ChevronDownIcon color="gray.500" fontSize={40} mt={15} />
                            </Center>
                        </Box>

                        <Box display="block" position="relative" align='center' className="about-me-paragraph" maxW={400}>
                            <Center>
                                <Text>
                                    I'm a Software-Developer working as a Freelancer in Romania.
                                    I have a whole bunch of passion for software and I wish to
                                    be able to spread the joy with others aswell.
                                </Text>
                            </Center>

                        </Box>
                    </Box>
                </Center>

                
            </Box>
                    



                
            </Box>
        </ChakraProvider>
    );
}



export default Aboutme;
