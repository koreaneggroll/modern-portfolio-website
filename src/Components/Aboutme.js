import React from 'react';


import {
    Box,
    Center,
    Text,
    Flex,
    Heading
} from '@chakra-ui/react';


import "../Css/Aboutme.css";


function Aboutme(){
  return(
    <>

      <Box ml={{base: '0', md: '0', lg: '0'}} mr={{base: '0', md: '300', lg: '600'}} className="about-me-wrapper">
          <Center>
            <Box display="block" className="about-me">

                <Box className="about-me-header">

                    <Flex className="about-header">
                        <p className="number">
                            01. 
                        </p>

                        <p className="header">
                            <b>
                                About me
                            </b>
                        </p>
                    </Flex>
                </Box>


                <Box className="about-me-paragraph">

                </Box>



                <Box className="about-me-photo">
                    
                </Box>

            </Box>
        </Center>
      </Box>
    </>
  );
}

export default Aboutme;