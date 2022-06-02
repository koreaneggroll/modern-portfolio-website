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
    Show
} from '@chakra-ui/react';

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

                        <TabPanels>
                            <TabPanel>
                                
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