import React from 'react';


import {
    Box,
    Center,
    Flex,
} from '@chakra-ui/react';


import "../Css/Aboutme.css";


function Aboutme(){
  return(
    <>

      <Box ml={{base: '0', md: '0', lg: '0'}} mr={{base: '0', md: '300', lg: '600'}} className="about-me-wrapper">
          <Center>
            <Box className="about-me">

                <Box className="about-me-header">

                    <Flex className="about-header">

                        <p className="header">
                            <b>
                                About me
                                <span className="line">

                                </span>
                            </b>
                        </p>
                    </Flex>
                </Box>


                <Box maxW={{lg: "400"}} className="about-me-paragraph">
                    <p>
                        
                    </p>
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