import React from 'react';

import {
    Box,
    VStack,
    Text,
    Flex,
    Progress,
    Center
} from '@chakra-ui/react';


import "../../Css/Profficiency.css"


function Profficiency(props){
    return(
        <>
            <Box className="profficiency-wrapper">
                <Box className="profficiency">
                    <VStack 
                        align='stretch'
                        spacing={10}
                        className="profficiency-stack"
                        maxW={400}
                    >

                        <Center h='40px' bg="twitter.500" className="language-profficiency">
                            <Flex>
                                
                                <Text className="language-name">
                                    C
                                </Text>


                                
                            </Flex>

                        </Center>

                        <Center h='40px' w='100px' bg="twitter.500" className="language-profficiency">
                            <Flex>
                                <Text className="language-name">
                                    C++
                                </Text>
                            </Flex>
                        </Center>

                        <Center h='40px' bg="twitter.500" className="language-profficiency">
                            <Flex>
                                <Text className="language-name">
                                    Python
                                </Text>
                            </Flex>
                        </Center>

                        <Center h='40px' bg="twitter.500" className="language-profficiency">
                            <Flex>
                                <Text className="language-name">
                                    JavaScript
                                </Text>
                            </Flex>
                        </Center>

                    </VStack>
                </Box>
            </Box>
        </>
    );
}



export default Profficiency;