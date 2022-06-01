import React from 'react';


import { 
    Box,
    Tab,
    TabList,
    Tabs,
    TabPanel,
    TabPanels
} from '@chakra-ui/react';


function Work(){
    return(
        <Box className="Work">
            <Box className="work-wrapper">
                <Tabs variant="soft-rounded" colorScheme='teal' className="work-tabs">
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