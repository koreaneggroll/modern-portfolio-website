import React, { useRef } from 'react';


import { 
    Box, 
    Flex, 
    IconButton, 
    Circle, 
    Center, 
    Text, 
    Divider, 
    Show,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, 
    Button
} from '@chakra-ui/react';
import Aboutme from './AboutMe';

import { ArrowRightIcon, TriangleDownIcon } from '@chakra-ui/icons';
import Emoji from '../Custom/Emoji';


import "../Css/Main.css";


function Main(){

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return(
        <Box className="Main">

            <Box className="main-page">
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


                                    <DrawerBody>
                                        Text...
                                    </DrawerBody>


                                    <DrawerFooter>
                                        <Button variant='outline' onClick={onClose}>
                                            Cancel
                                        </Button>
                                    </DrawerFooter>

                                </DrawerContent>

                            </Drawer>
                        </Box>
                    </Flex>
                </Center>

            </Box>


        </Box>
    );
}


export default Main;