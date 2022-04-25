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

    return(
        <Box className="Main">

            <Center>
              <Box className="main-page">
                  <Box ml={{base: '10', md: '0', lg: '0'}} mr={{base: '0', md: '150', lg: '250'}} className="wrapper-welcome-page">
                      <Box mb={{base: '0', md: '200', lg: '250'}} className="welcome-page">
                          <Text fontSize='20px' className="welcome-text">
                              Hi, my name is
                          </Text>

                          <p className="welcome-name">
                            <b>
                              Arin Grigoras.
                            </b>
                          </p>
                      </Box>
                  </Box>
              </Box>
            </Center>
        </Box>
    );
}


export default Main;
