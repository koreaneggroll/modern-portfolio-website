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

import { PhoneIcon, ArrowDownIcon } from '@chakra-ui/icons';
import Emoji from './Custom/Emoji';


import "../Css/Main.css";


function Main(){

    return(
        <Box className="Main">

            <Center>
              <Box className="main-page">
                  <Box ml={{base: '10', md: '0', lg: '0'}} mr={{base: '0', md: '150', lg: '250'}} className="wrapper-welcome-page">
                      <Box mb={{base: '0', md: '0', lg: '0'}} className="welcome-page">
                          <Text fontSize='20px' className="welcome-text">
                              Hi, my name is... <span className="line"></span>
                          </Text>

                          <p className="welcome-name">
                            <b>
                              Arin Grigoras.
                            </b>
                          </p>

                          <p className="welcome-proffesion">
                            SOFTWARE DEVELOPER <Emoji symbol="👨‍💻" />.
                          </p>

                          <Center className="welcome-arrow-transition">
                            <ArrowDownIcon />
                          </Center>

                          <p maxW={300} className="welcome-brief-intro">
                            I am a <a className="underlined-intro">Software Developer</a> specializing in C/C++ development
                            as well as occasionally
                            <br/>
                            making Web apps (such as this one) . For the time being I am <a className="underlined-intro">not employed</a>,
                            but working
                            <br/>
                            as a <a className="underline-intro">Freelancer</a>.

                          </p>


                          <Show above="sm">
                            <Center>
                              <Box className="welcome-arrow-to-about-me">
                                <div class="mouse_scroll">
                                  <div class="mouse">
                                    <div class="wheel"></div>
                                  </div>
                                  <div>
                                    <span class="m_scroll_arrows unu"></span>
                                    <span class="m_scroll_arrows doi"></span>
                                    <span class="m_scroll_arrows trei"></span>
                                  </div>
                                </div>
                              </Box>
                            </Center>
                          </Show>


                          <Show below="sm">
                            <Center>
                              <Box className="welcome-arrow-to-about-me">
                                <div class="mouse_scroll">
                                  <div>
                                    <span class="m_scroll_arrows unu"></span>
                                    <span class="m_scroll_arrows doi"></span>
                                    <span class="m_scroll_arrows trei"></span>
                                  </div>
                                </div>
                              </Box>
                            </Center>
                          </Show>
                      </Box>
                  </Box>
              </Box>
            </Center>
        </Box>
    );
}


export default Main;
