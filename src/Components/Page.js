import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';



import TopBar from './TopBar';
import Main from './Main';
import Aboutme from './Aboutme';
import Work from './Work';
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
            <Work />
        </Box>



    </ChakraProvider>
  );
}

export default Page;
