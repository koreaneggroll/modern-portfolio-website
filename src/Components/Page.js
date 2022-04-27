import React, { useRef } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
} from '@chakra-ui/react';



import TopBar from './TopBar';
import Main from './Main';
import Aboutme from './Aboutme';
import "../Css/Page.css";







function Page() {


  return (
    <ChakraProvider theme={theme}>

        {
        //<Loader />
        }
        <Box className="Page-wrapper">
            <TopBar />
            <Main />
            <Aboutme />

        </Box>



    </ChakraProvider>
  );
}

export default Page;
