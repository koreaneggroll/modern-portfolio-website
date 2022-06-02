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


import WorkTab from './Custom/WorkTab';

import { ArrowRightIcon } from '@chakra-ui/icons';


import "../Css/worktabs.css";


function Work(){
    return(
        <Box className="Work">
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <Hide below="md">
                <Box mr={20} className="work-wrapper">
                    <Tabs orientation='vertical' variant="soft-rounded" colorScheme='teal' className="work-tabs">
                        <TabList>
                            <Tab>Fiverr</Tab>
                            <Tab>N/A</Tab>
                        </TabList>

                        <TabPanels direction="ltr">
                            <TabPanel className="work-tab">
                                <Flex className="work-heading">
                                    <b className="work-rank">
                                        Freelancer 
                                    </b>

                                    <i className="work-company">
                                        <span className="work-company-span">
                                             @ Fiverr
                                        </span>
                                    </i>
                                </Flex>

                                <Box className="work-time-span">
                                    <span className="time-span-span">
                                        April 2020 - present
                                    </span>
                                </Box>


                                <Box className="work-contents">
                                    <Box className="work-content-box">
                                        <ArrowRightIcon />

                                        <span className="work-content-box-span">
                                        Lorem ipsum Lorem ipsum Lorem ipsum
                                        </span>
                                    </Box>



                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Hide>



            <Show below="md">

            </Show>
        </Box>
    );
};


export default Work;