import {React, useState} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip } from '@chakra-ui/react';
import {motion} from 'framer-motion';

const MotionBox = motion(Box);

function Article(props) {

    const textArray = props.article.textArr;
    const title = props.article.title;
    console.log(textArray)

    return (
        <MotionBox initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1, duration:5}} whileHover={{ scale:1.1}} marginTop="60px" h="600px" bgColor="#1b222d" borderRadius="4%" overflow="scroll">
            <Text bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="50px" fontSize="28px">{title}</Text>
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
                                                        <MotionBox as="span" fontSize="10px" bgColor="white" color="black" margin="5px">  {text.slotValue}</MotionBox>
                                                    </MotionBox>
                                                    )
                                            }
                                            else if(text.extType == "nonslot"){
                                                return (
                                                    <MotionBox whileHover={{ fontSize:"24px"}} _hover={{ color:"blue.300"}}  as="span">{text.text}</MotionBox>
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
    )
}

export default Article;