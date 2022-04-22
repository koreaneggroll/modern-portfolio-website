import React from 'react';

import {
    Box,
    VStack,
    Text,
    Flex
} from '@chakra-ui/react';


import "../../Css/Profficiency.css"


function Profficiency(props){
    return(
        <>
            <Box className="profficiency-wrapper">
                <Box className="profficiency">
                    <VStack 
                        align='stretch'
                        spacing={1}
                        className="profficiency-stack"
                        maxW={400}
                    >

                        <Box h='40px' bg="aqua" className="language-profficiency">
                            <Flex>
                                <Text className="language-name">
                                    C
                                </Text>
                            </Flex>

                        </Box>

                        <Box h='40px' bg="aqua" className="language-profficiency">
                            <Flex>
                                <Text className="language-name">
                                    C++
                                </Text>
                            </Flex>
                        </Box>

                        <Box h='40px' bg="aqua" className="language-profficiency">
                            <Flex>
                                <Text className="language-name">
                                    Python
                                </Text>
                            </Flex>
                        </Box>

                        <Box h='40px' bg="aqua" className="language-profficiency">
                            <Flex>
                                <Text className="language-name">
                                    JavaScript
                                </Text>
                            </Flex>
                        </Box>

                    </VStack>
                </Box>
            </Box>
        </>
    );
}



export default Profficiency;