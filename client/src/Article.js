import {React, useState} from 'react';
import { Box, Text, Grid, GridItem, Center, Icon, Button, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, List, ListIcon, ListItem } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import {motion, AnimatePresence} from 'framer-motion';
import {MdCheckCircle} from 'react-icons/md'

const MotionBox = motion(Box);
const MotionText = motion(Text);

function Article(props) {

    const [view, setView] = useState("full");

    const textArray = props.article.textArr;
    const title = props.article.title;
    const extractions = props.article.extractions;
    const metadata = props.article.metadata; 
    console.log(textArray)
    console.log(extractions)

    return (
        <MotionBox initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1, duration:5}} whileHover={{ scale:1.1}} marginTop="6vh" w="38vw" h="80vh" bgColor="#1b222d" borderRadius="4%" overflow="scroll">
            {view == "full" ? 
            <Box>
            <Button colorScheme="blue" top="8px" left="15px" size='xs' onClick={() => {setView("extractions")}}>
                View Extractions
            </Button>
            <MotionBox initial={{x:"-100vh"}} animate={{x:0}} transition={{ duration: 0.3 }} bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="17px" fontSize="28px">{title}</MotionBox>
                {<MotionBox initial={{x:"-100vh"}} animate={{x:0}} transition={{ duration: 0.3 }} margin="30px" color="white" fontSize="22px">
                    {
                        textArray.map((text) => {
                        if(text.type == "normal"){
                            return (
                                <span>{text.text}</span>
                            )
                        }
                        if(text.type == "extraction"){
                                return (
                                    <MotionBox display="inline" color="blue.200">
                                        {
                                            text.extArr.map((text) => {
                                                if(text.extType == "slot"){
                                                    return (
                                                        <Tooltip bgColor="#4b8ae1" color="white" label={text.slotValue} placement='auto'>
                                                        <MotionBox whileHover={{ fontSize:"23px"}} color="#4b8ae1" as="span">
                                                            {text.text}
                                                        </MotionBox>
                                                        </Tooltip>
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
                </MotionBox>}
            </Box>
            :
            <Box>
            <Button colorScheme="blue" top="8px" left="15px" size='xs' onClick={() => {setView("full")}} >
                View Full Article
            </Button>
            <MotionText initial={{x:"100vh"}} animate={{x:0}} transition={{ duration: 0.3 }} bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="17px" fontSize="28px">Extractions</MotionText>
            <MotionText initial={{x:"100vh"}} animate={{x:0}} transition={{ duration: 0.3 }} margin="30px" color="white">
                <Accordion allowMultiple>
                    {
                        extractions.map((extraction) => {
                            return (
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'fontSize="20px" color="white" _hover={{color:"blue.300"}} >
                                            {extraction.text}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <Grid templateColumns="1fr 1fr">
                                        <GridItem>
                                            <Text pb={2}>Details: </Text>
                                            <List spacing={3}>
                                            {
                                                extraction.details.map((detail) => {
                                                    return (
                                                        <ListItem fontSize="14px">
                                                            <ListIcon as={MdCheckCircle} color='blue.500' />
                                                            <Box as="span">{detail.slot}</Box>  <Box as="span" fontSize="18px" color="blue.300">({detail.slotValue})</Box>
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                            </List>
                                        </GridItem>
                                        <GridItem>
                                        <Text pb={2}>Impact: </Text>
                                            <List spacing={3}>
                                            {
                                                extraction.impact.map((impact) => {
                                                    return (
                                                        <ListItem fontSize="14px">
                                                            <ListIcon as={MdCheckCircle} color={impact.propertyValue == "Increased" ? "green.500":"red.500"} />
                                                            <Box as="span">{impact.property}</Box>  <Box as="span" fontSize="18px" color={impact.propertyValue == "Increased" ? "green.300":"red"}>({impact.propertyValue})</Box>
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                            </List>
                                        </GridItem>
                                    </Grid>
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                        })
                    }  
                </Accordion>     
            </MotionText>
            <MotionBox initial={{x:"100vh"}} animate={{x:0}} transition={{ duration: 0.3 }} color="white">
                <Center><Text textAlign="center" opacity="50%" fontSize="17px">Metadata</Text></Center>
                <Center><Box bgColor="white" h="1px" opacity="20%" w="50%" mb="10px"></Box></Center>
                <Center>
                    <Text fontSize="18px">{metadata.headline}</Text>
                </Center>
                <Center>
                    <Text marginRight="10px">Date: {metadata.date}</Text><Text>Source: {metadata.source}</Text>
                </Center>
            </MotionBox>
            </Box>}
        </MotionBox>
    )
}

export default Article;