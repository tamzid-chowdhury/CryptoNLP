import {React, useState} from 'react';
import { Box, Text, Grid, GridItem, Center, Icon, Button, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, List, ListIcon, ListItem } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import {motion, AnimatePresence} from 'framer-motion';
import {MdCheckCircle} from 'react-icons/md'
import './App.css'

const MotionBox = motion(Box);
const MotionText = motion(Text);

function Article(props) {

    const [view, setView] = useState("full");

    const articleVariants = {
        hidden: {
          x: "-100vh",
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
          x: "0",
          transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      const metadataVariants = {
        hidden: {
          x: "100vh",
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
          x: "0",
          transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      const article1Variants = {
        hidden: {
          scale: 0,
          opacity:0,
         transition: {
            type: "spring",
            duration: 1,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1
          }
        }
      };

    const textArray = props.article.textArr;
    const title = props.article.title;
    const extractions = props.article.extractions;
    const metadata = props.article.metadata; 
    console.log(textArray)
    console.log(extractions)

    return (
        <MotionBox className="article" initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.5}} marginTop="6vh" w="38vw" h="80vh" bgColor="#1b222d" borderRadius="4%" overflow="scroll">
            {view == "full" ? 
            <Box>
            <Button colorScheme="blue" top="8px" left="15px" size='xs' onClick={() => {setView("extractions")}}>
                View Extractions
            </Button>
                <MotionBox variants={articleVariants} initial="hidden" animate="visible" bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="17px" fontSize="28px">{title}</MotionBox>
                <AnimatePresence>
                    {<MotionBox variants={article1Variants} initial="hidden" animate="visible" exit="hidden" margin="30px" color="white" fontSize="22px">
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
                                                            <Tooltip hasArrow bgColor="#4b8ae1" color="white" label={text.slotValue} placement='top'>
                                                            <MotionBox whileHover={{ color:"#7ba9e9"}} color="#4b8ae1" as="span">
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
                </AnimatePresence>
            </Box>
            :
            <Box>
            <Button colorScheme="blue" top="8px" left="15px" size='xs' onClick={() => {setView("full")}} >
                View Full Article
            </Button>
            <MotionText variants={metadataVariants} initial="hidden" animate="visible"  bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="17px" fontSize="28px">Extractions</MotionText>
            <AnimatePresence>
            <MotionText variants={articleVariants} initial="hidden" animate="visible" margin="30px" color="white">
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
            </AnimatePresence>
            <MotionBox variants={metadataVariants} initial="hidden" animate="visible" color="white">
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