import React from 'react';


import { 
    Box
} from '@chakra-ui/react';


import { ArrowRightIcon } from '@chakra-ui/icons';

function WorkTab(props){
    return(
        <Box className="WorkTab-wrapper">
            <TabPanel className="work-tab">
                <Flex className="work-heading">
                    <b className="work-rank">
                        {props.rank}
                    </b>

                    <i className="work-company">
                        <span className="work-company-span">
                            @ {props.company}
                        </span>
                    </i>
                </Flex>

                <Box className="work-time-span">
                    <span className="time-span-span">
                        {props.time_start} - {props.time_end}
                    </span>
                </Box>


                <Box className="work-contents">
                    <Box className="work-content-box">
                        <ArrowRightIcon />

                        <span className="work-content-box-span">
                            {props.contents_box1}
                        </span>
                    </Box>



                </Box>
            </TabPanel>
        </Box>
    );
};


export default WorkTab;