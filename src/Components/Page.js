import React, { useRef } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
} from '@chakra-ui/react';



import TopBar from './TopBar';
import Main from './Main';
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


        </Box>



    </ChakraProvider>
  );
}

export default Page;
