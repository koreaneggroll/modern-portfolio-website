import React from 'react';

import {
    Kbd,
    Text,
    Progress,

} from '@chakra-ui/react';


import "../../Css/Profficiency.css"


function Profficiency(props){
    return(
        <>
            <Text>
                <Kbd>
                    {props.text}
                </Kbd>
            </Text>

            <Progress className="language-profficiency-value" mt={5} ml={5} size='lg' value={props.value}/>

        </>
    );
}



export default Profficiency;