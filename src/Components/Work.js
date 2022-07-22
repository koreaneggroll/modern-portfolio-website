import React from 'react';


import { 
    Box,
    Tab,
    TabList,
    Tabs,
    TabPanel,
    TabPanels,
    Divider,
    Stack,
    Hide,
    Show,
    Flex
} from '@chakra-ui/react';

import "../Css/underline-animated.css";


import "../Css/Work.css";




function Work(){
    return(
        <Box className="Work">
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>



            <Box mr={{base: '10', md: '150', lg: '300'}} className="Work-wrapper">
                <Box className="Work">
                   <Flex className="work-header">
                    <p className="header">
                            <b>
                                <span className="line">

                                </span>

                                <span className="underline-other-way">
                                    Some of my projects
                                </span>
                            </b>
                        </p>
                    </Flex> 
                </Box>



                <Box className="Work-content">
                    
                </Box>


            </Box>

        </Box>
    );
};


export default Work;