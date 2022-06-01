import React from 'react';


import {
    Box,
    Center,
    Flex,
    Show,
    Divider,
    Image,
    Spacer
} from '@chakra-ui/react';


import "../Css/Aboutme.css";



import aboutmephoto from '../Pictures/arin-logo-new.PNG';


function Aboutme(){
  return(
    <>

        <br/><br/><br/><br/>

      <Box ml={{base: '10', md: '100', lg: '200'}} mr={{base: '10', md: '300', lg: '600'}} className="about-me-wrapper">
          <Center>
            <Box ml={{base: '10', md: '20', lg: '30'}} className="about-me">

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

                <Flex>
                    <Box ml={{base: '5', md: "10", lg: "5"}} maxW={{lg: "500"}} className="about-me-paragraph">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus. Enim praesent elementum facilisis leo vel fringilla. Nulla pharetra diam sit amet nisl. In fermentum posuere urna nec tincidunt praesent semper feugiat. Justo eget magna fermentum iaculis eu non diam. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Eget aliquet nibh praesent tristique magna sit. Enim tortor at auctor urna nunc id. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
                        </p>
                        
                    </Box>

                    <Show above="sm">
                        <Box className="divider">
                            <Divider ml={40} mr={40} orientation="vertical"/>
                        </Box>
                        <Box mb={{md: '10', lg: '20'}} className="about-me-photo">
                            
                        </Box>
                    </Show>


                    <Show below="sm">
                        <Box clasName="about-me-photo-mobile" >
                            
                        </Box>
                    </Show>
                </Flex>
            </Box>
        </Center>
      </Box>
    </>
  );
}

export default Aboutme;