import {React, useState} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip } from '@chakra-ui/react';
import {article1} from "./document.json";
import {motion} from 'framer-motion';

const MotionBox = motion(Box);

function TestPage() {

    const textArray = article1.textArr;
    console.log(textArray)

    return (
        <Grid templateColumns="4fr 5fr 4fr">
            <Box></Box>
            <MotionBox whileHover={{ scale:1.1}} marginTop="100px" h="600px" bgColor="#1b222d" borderRadius="4%" overflow="scroll">
                <Text bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="50px" fontSize="28px">Uniswap Labs Report No. 24</Text>
                <Text margin="30px" color="white" fontSize="20px">
                    {
                     textArray.map((text) => {
                        if(text.type == "normal"){
                            return (
                                <span>{text.text}</span>
                            )
                        }
                        if(text.type == "extraction"){
                                return (
                                    <MotionBox display="inline" color="blue.600">
                                        {
                                            text.extArr.map((text) => {
                                                if(text.extType == "slot"){
                                                    return (
                                                        <MotionBox whileHover={{ fontSize:"24px"}} bgGradient='linear(to-l, #63B3ED, #2C5282)' bgColor="blue.500" color="white" as="span">
                                                            {text.text}
                                                            <Box as="span" fontSize="10px" bgColor="white" color="black" margin="5px">  {text.slotValue}</Box>
                                                        </MotionBox>
                                                     )
                                                }
                                                else if(text.extType == "nonslot"){
                                                    return (
                                                        <MotionBox  as="span">{text.text}</MotionBox>
                                                     )
                                                }

                                            })
                                        }
                                    </MotionBox>
                                )
                        }
                     })   
                    }
                </Text>
            </MotionBox>
            <Box></Box>
        </Grid>
    );
}

export default TestPage;
