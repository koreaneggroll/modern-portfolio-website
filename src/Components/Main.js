import React, { useRef } from 'react';


import { Outlet, Link } from "react-router-dom";

import { 
    Box, 
    Flex, 
    IconButton,  
    Center, 
    Text, 
    Divider, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, 
    Button,
    VStack,
    Hide,
    Heading,
    Badge,
    UnorderedList,
    ListItem,
    Show,
} from '@chakra-ui/react';
import Aboutme from './AboutMe';

import { ArrowRightIcon, TriangleDownIcon } from '@chakra-ui/icons';
import Emoji from './Custom/Emoji';


import "../Css/Main.css";


function Main(){

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();


    


    return(
        <Box className="Main">

            <Box className="main-page">

                <Show above="sm">
                    <Flex  className="Welcome" display={{base: 'inline-block', md: 'flex', lg: 'flex'}}>
                        <Box m={{base: '10', md: '20', lg: '40'}}>

                            <Text   fontSize={80} className="welcome-text-main">
                                <b>I'm Arin</b>
                                <Text textDecoration='underline' ml={{base: '10', md: '20', lg: '40'}} fontSize={50}>
                                    Software
                                </Text>
                                <Text textDecoration='underline' fontSize={50}>
                                    Developer
                                </Text>
                            </Text>
                        </Box>

                    
                    </Flex>
                </Show>


                <Show below="sm">
                    <Center>
                        <Flex  className="Welcome" display={{base: 'inline-block', md: 'flex', lg: 'flex'}}>
                            <Box m={{base: '10', md: '20', lg: '40'}}>

                                <Text   fontSize={80} className="welcome-text-main">
                                    <b>I'm Arin</b>
                                    <Text textDecoration='underline' ml={{base: '10', md: '20', lg: '40'}} fontSize={50}>
                                        Software
                                    </Text>
                                    <Text textDecoration='underline' fontSize={50}>
                                        Developer
                                    </Text>
                                </Text>
                            </Box>
                        </Flex>
                    </Center>
                </Show>

                <Center>
                    <Flex mt={130} mb={10} className="Welcome-bottom-side">
                        <Box className="Welcome-DrawerButton">
                            <IconButton
                             isRound={true} 
                             onClick={onOpen}  
                             aria-label='OpenDrawer' 
                             icon={<ArrowRightIcon />} 
                             ref={btnRef}
                             />                               

                            <Drawer
                                isOpen={isOpen}
                                placement="left"
                                onClose={onClose}
                                finalFocusRef={btnRef}
                                closeOnEsc={true}
                                closeOnOverlayClick={true}
                            >
                                
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />

                                    <DrawerHeader>
                                        Explore &nbsp;
                                        <Emoji symbol="😎" />
                                    </DrawerHeader>

                                    <Divider orientation="horizontal"/>


                                    <DrawerBody>
                                        <VStack mt={10}>

                                            <UnorderedList spacing={4}>
                                                <ListItem>
                                                    <Link to="/about-me">
                                                        <Box
                                                            className="drawer-box"
                                                            maxW='sm'
                                                            borderWidth='1px'
                                                            borderRadius='lg'
                                                            overflow="hidden"
                                                            as='button'
                                                            h={{base: '90', md: '95', lg: '100'}}
                                                            w={{base: '90', md: '95', lg: '100'}}
                                                        >

                                                            <Text mt={1} mb={1} ml={{base: '10', md: '10', lg: '10'}} mr={{base: '5', md: '5', lg: '10'}} className="drawer-wrapper">
                                                                <Heading ml={-5} fontSize={20} className="drawer-heading">
                                                                    About me
                                                                    <Badge ml={2} colorScheme='purple'>Interesting</Badge>
                                                                </Heading>


                                                                <Text color='gray.500' className="drawer-paragraph">
                                                                    Learn more about me!
                                                                </Text>
                                                            </Text>
                                                        </Box>
                                                    </Link>
                                                </ListItem>

                                                <ListItem>
                                                    <Link to="/projects">
                                                        <Box 
                                                        className="drawer-box"
                                                            maxW='sm'
                                                            borderWidth='1px'
                                                            borderRadius='lg'
                                                            overflow="hidden"
                                                            as="button"
                                                            h={{base: '90', md: '95', lg: '100'}}
                                                            w={{base: '90', md: '95', lg: '100'}}
                                                            >

                                                            <Text mt={1} mb={1} ml={{base: '10', md: '10', lg: '10'}} mr={{base: '5', md: '5', lg: '10'}} className="drawer-wrapper">
                                                                <Heading ml={-5} fontSize={20} className="drawer-heading">
                                                                    Projects
                                                                    <Badge ml={2} colorScheme='yellow'>Interesting</Badge>
                                                                </Heading>


                                                                <Text color='gray.500' className="drawer-paragraph">
                                                                    Some of them are cool
                                                                </Text>
                                                            </Text>

                                                        </Box>
                                                    </Link>
                                                </ListItem>

                                            </UnorderedList>
                                        </VStack>
                                    </DrawerBody>


                                    <DrawerFooter>
                                        <Hide below='md'>
                                            <Button  variant='outline' onClick={onClose}>
                                                Cancel
                                            </Button>
                                        </Hide>
                                    </DrawerFooter>

                                </DrawerContent>

                            </Drawer>
                        </Box>
                    </Flex>
                </Center>

            </Box>

            <Outlet />
        </Box>
    );
}


export default Main;