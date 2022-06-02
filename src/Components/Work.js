import React from 'react';


import { 
    Box,
    Tab,
    TabList,
    Tabs,
    TabPanel,
    TabPanels
} from '@chakra-ui/react';

import "../Css/worktabs.css";


function Work(){
    return(
        <Box className="Work">
            <Box className="work-wrapper">
                <Tabs orientation='vertical' variant="soft-rounded" colorScheme='teal' className="work-tabs">
                    <TabList>
                        <Tab>Fiverr</Tab>
                        <Tab>N/A</Tab>
                    </TabList>
                </Tabs>
            </Box>
        </Box>
    );
};


export default Work;