import {React, useState} from 'react';
import { Box, Text, Grid, GridItem, Center, Button, Tooltip} from '@chakra-ui/react';
import {Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel} from '@chakra-ui/react'
import {List, ListIcon, ListItem} from '@chakra-ui/react'
import {motion, AnimatePresence} from 'framer-motion';
import {MdCheckCircle} from 'react-icons/md'

//motion components to animate transitions
const MotionBox = motion(Box);
const MotionText = motion(Text);

//the article component is used to display articles using our NLP technology
function Article(props) {

    const textArray = props.article.textArr; //array holding sections of the article divided by type (extractions vs nonextraction)
    const title = props.article.title; //title of article
    const extractions = props.article.extractions; //array containing all extractions
    const metadata = props.article.metadata; //data about article including title, date, source


    const [view, setView] = useState("full"); //state to determine which side of the article we are viewing (full article or extractions)

    //framer motion transformations for article text and title 
    const articleVariants = {
        lefthidden: {
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
        },
        righthidden: {
            x: "100vh",
           transition: {
              type: "spring",
              duration: 0.7,
              ease: [0.83, 0, 0.17, 1]
            }
        },
      };

    return (
        <MotionBox className="article" initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.5}} marginTop="6vh" w="38vw" h="80vh" bgColor="#1b222d" borderRadius="4%" overflow="scroll">
            {view == "full" && <Button colorScheme="blue" top="8px" left="15px" size='sm' fontSize="lg" color="white" onClick={() => {setView("extractions")}}>
                View Extractions
            </Button>}
            {view == "extractions" && <Button colorScheme="blue" top="8px" left="15px" size='sm' fontSize="lg" color="white"  onClick={() => {setView("full")}} >
                View Full Article
            </Button>}
            {view == "full" && 
            <Box>
                <AnimatePresence exitBeforeEnter>
                <MotionText variants={articleVariants} initial="lefthidden" animate="visible" bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="17px" fontSize="3xl">{title}</MotionText>
                    {<MotionBox variants={articleVariants} initial="righthidden" animate="visible" exit="righthidden" margin="30px" color="white" fontSize="22px">
                        {
                            textArray.map((text) => {
                            if(text.type == "normal"){
                                return (
                                    <span>{text. text}</span>
                                )
                            }
                            if(text.type == "extraction"){
                                    return (
                                        <MotionBox display="inline" color="blue.200">
                                            {
                                                text.extArr.map((text) => {
                                                    if(text.extType == "slot"){
                                                        return (
                                                            <Tooltip  bgColor="#E50914" color="white" label={text.slotValue} placement='top'>
                                                            <MotionBox whileHover={{ color:"#E50914"}} color="#4b8ae1" as="span">
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
            }
            {view == "extractions" &&
            <Box>
            <MotionText variants={articleVariants} initial="righthidden" animate="visible"  bgGradient='linear(to-l, #63B3ED, #2C5282)' color="white" textAlign="center" marginTop="17px" fontSize="28px">Extractions</MotionText>
            <AnimatePresence>
            <MotionText variants={articleVariants} initial="lefthidden" animate="visible" margin="30px" color="white">
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
            <MotionBox variants={articleVariants} initial="lefthidden" animate="visible" color="white">
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