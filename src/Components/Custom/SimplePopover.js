import React from 'react';


import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Box
} from '@chakra-ui/react';




function SimplePopover(props){
    <Popover>
        <PopoverTrigger>
            <Box className="button" as="button">
                {props.trigger}
            </Box>
        </PopoverTrigger>

        <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />

            <PopoverHeader>
                {props.header}
            </PopoverHeader>

            <PopoverBody>
                {props.body}
            </PopoverBody>
        </PopoverContent>
    </Popover>
}



export default SimplePopover;
