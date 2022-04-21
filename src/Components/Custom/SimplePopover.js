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


//<UnlockIcon color="royalblue" focusable={true} fontSize='50' className="grid-item-icon" />
//Using Open-Source <Emoji symbol="🤓" />
// I have been able to use Git since really early in my programming journey, hence I am comfortable using it
//together with GitHub to efficiently share my software with the world.

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