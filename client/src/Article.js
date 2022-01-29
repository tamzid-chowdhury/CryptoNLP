import {React, useState} from 'react';
import { Box, Text, Grid, Center, Icon, Button } from '@chakra-ui/react';
import {motion} from 'framer-motion';


const MotionBox = motion(Box);

function Article(props) {

    const [view, setView] = useState("full");

    const textArray = props.article.textArr;
    const title = props.article.title;
    console.log(textArray)

    return (
        <MotionBox initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1, duration:5}} whileHover={{ scale:1.1}} marginTop="60px" h="80%" bgColor="#1b222d" borderRadius="4%" overflow="scroll">
            {view == "full" ? 
            <Box>
            <Button colorScheme='blue' size='xs' position="relative" left="580px" top="7px" onClick={() => {setView("extractions")}}>
                Extractions
            </Button>
            <Text bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="17px" fontSize="28px">{title}</Text>
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
                                <MotionBox whileHover={{ fontSize:"23px"}} _hover={{ color:"blue.300"}} display="inline" color="blue.600">
                                    {
                                        text.extArr.map((text) => {
                                            if(text.extType == "slot"){
                                                return (
                                                    <MotionBox bgGradient='linear(to-l, #63B3ED, #2C5282)' bgColor="blue.500" color="white" as="span">
                                                        {text.text}
                                                        <MotionBox as="span" fontSize="10px" bgColor="white" color="black" margin="5px">  {text.slotValue}</MotionBox>
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
            </Box>
            :
            <Box>
            <Button colorScheme='blue' size='xs' position="relative" left="580px" top="7px"  onClick={() => {setView("full")}} >
                Full Article
            </Button>
            <Text bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="17px" fontSize="28px">Extractions</Text>
            <Text margin="30px" color="white" fontSize="20px">

            </Text>
            </Box>}
        </MotionBox>
    )
}

export default Article;