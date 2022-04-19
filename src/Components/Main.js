import React, { useRef } from 'react';


import { Box, Flex, IconButton, Circle, Center, Text, Divider, Show } from '@chakra-ui/react';
import Aboutme from './AboutMe';

import { TriangleDownIcon } from '@chakra-ui/icons';


import "../Css/Main.css";


function Main(){


    const aboutMeRef = useRef(null);

    const gotoAboutMe = () => {
        window.scrollTo({
            top: aboutMeRef.current.offsetTop,
            behavior: "smooth",
        });
    };

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
                    <Flex mt={140} mb={10} className="Welcome-bottom-side">
                        <Box className="Welcome-ScrollWheel">
                            <IconButton isRound={true} onClick={gotoAboutMe} aria-label='Scroll WebPage' icon={<TriangleDownIcon />} />
                        </Box>
                    </Flex>
                </Center>

            </Box>


            <Flex ref={aboutMeRef} className="About-me">
                <Aboutme />
            </Flex>


        </Box>
    );
}


export default Main;