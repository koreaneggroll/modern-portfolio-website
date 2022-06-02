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
    Hide
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
                <Box className="work-wrapper">
                    <Stack direction="row" h = "200px" p={4}>
                        <Divider orientation="vertical" />
                        <Tabs mr={20} orientation='vertical' variant="soft-rounded" colorScheme='teal' className="work-tabs">
                            <TabList>
                                <Tab>Fiverr</Tab>
                                <Tab>N/A</Tab>
                            </TabList>
                        </Tabs>
                    </Stack>
                </Box>
            </Hide>
        </Box>
    );
};


export default Work;