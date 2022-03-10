import {React, useState, useEffect, createRef, useRef} from 'react';
import { Box, Image, Text, Grid, Center, Icon, Tooltip, VStack , HStack, Button, Input, FormLabel, InputGroup, InputLeftAddon, Drawer, DrawerBody,
DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, Stack, Select, Textarea, DrawerFooter, InputRightAddon, useDisclosure, SimpleGrid} from '@chakra-ui/react';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation,
    useHistory
} from 'react-router-dom';

import { createBreakpoints } from '@chakra-ui/theme-tools'
import {AddIcon} from '@chakra-ui/icons'
import article from './images/article.gif'
import graph from './images/graphs.gif'
import table from './images/tables.gif'

function LandingPage(props) {
    const MotionBox = motion(Box);
    const MotionButton = motion(Button);

    const history = useHistory();

    const menuVariants = {
        hidden: {
            opacity:0.8, scale:0,
         transition: {
            type: "spring",
            duration: 0.1,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
            opacity:1, scale:1,
          transition: {
            type: "spring",
            duration: 0.1,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      const titleVariants = {
        hidden: {
            opacity:0,
         transition: {
            type: "spring",
            duration: 1.3,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
            opacity:1,
          transition: {
            type: "spring",
            duration: 1.3,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      function gotoDemo(){
        history.push('/demo')
      }

        return (
          <>
          
          <MotionBox variants={titleVariants} initial="hidden" animate="visible" exit="hidden" h="100vh" color="white">
                <Center position="relative" top="35vh">
                    <VStack spacing={3}>
                    <MotionBox noOfLines={[1, 2, 3]} variants={titleVariants} initial="hidden" animate="visible" exit="hidden" className="titlefont" fontSize={{ base: '20px', md: '40px', lg: '50px' }}>Understand <Box as="span" color="red.300">Crypto </Box>Like Never Before</MotionBox>
                    <MotionBox variants={titleVariants} initial="hidden" animate="visible" exit="hidden" className="titlefont" fontSize={{ base: '14px', md: '25px', lg: '40px' }}>Utilizing <Box as="span" color="red.300">NLP</Box> to Understand the<Box as="span" color="red.300"> Global Crypto Market</Box></MotionBox>
                    </VStack>
                </Center>
                <Center position="relative" top="40vh">
                    <SimpleGrid columns={[1, null, 2]} spacing={5}>
                    <MotionButton variant="solid" whileHover={{scale:1.2}} bgColor="white" _hover={{bgColor:"gray.200"}}  color="black" className="titlefont" variants={menuVariants} initial="hidden" animate="visible" exit="hidden" size='md' onClick={gotoDemo}>Start Demo</MotionButton>
                    <MotionButton variant="solid"  whileHover={{scale:1.2}} bgColor="red.300" _hover={{bgColor:"red.500"}} className="titlefont" variants={menuVariants} initial="hidden" animate="visible" exit="hidden" size="md" onClick={props.onOpen}>Join Waitlist</MotionButton>
                    </SimpleGrid>
                </Center>
                <Center position="relative" top={["65vh","75vh"]}>
                  <Text color="white">Scroll Down To Learn More</Text>
                </Center>
          </MotionBox>
          <MotionBox animate="visible" exit="hidden" h="240vh" color="white">
          <Box h="1px" border='1px'></Box>
            <SimpleGrid columns={[1, null, 2]} top="5vh" position="relative">
              <Box height='20vh' marginLeft={["0vh","30vh"]}>
                <Text fontSize={["xl","6xl"]} as="b">
                  Read Only What You Need To And None Of What You Don't. 
                </Text>
                <Text fontSize={["sm","2xl"]} as="b">
                <br /> Access extractions from every relevant news article. Easily understand <Box as="span" color="green">positive</Box> and <Box as="span" color="red">negative</Box> setiment.
                </Text>
              </Box>
              <Box height='50vh' marginLeft={["3vh","10vh"]} boxSize={['xs','xl']}>
                <Image src={article} alt='Dan Abramov' />
              </Box>
            </SimpleGrid>
            <Box h="1px" border='1px' position="relative" top="17vh"></Box>
            <SimpleGrid columns={[1, null, 2]} top="23vh" position="relative">
              <Box height='20vh' marginLeft={["0vh","30vh"]}>
                <Text fontSize={["xl","6xl"]} as="b">
                  Get Rid of the Noise and Easily Leverage Actionable Insights.
                </Text>
                <Text fontSize={["sm","2xl"]} as="b">
                <br />  Analyze data with responsive graphs that shrink and expand in a blink.
                </Text>
              </Box>
              <Box height='50vh' marginLeft={["3vh","10vh"]} boxSize={['xs','xl']}>
                <Image src={graph} alt='Dan Abramov' />
              </Box>
            </SimpleGrid>
            <Box h="1px" border='1px' position="relative" top="10vh"></Box>
            <SimpleGrid columns={[1, null, 2]} top="20vh" position="relative">
              <Box height='20vh' marginLeft={["0vh","30vh"]}>
                <Text fontSize={["xl","6xl"]} as="b">
                  Aggregate Everything You Want in One Place
                </Text>
                <Text fontSize={["sm","2xl"]} as="b">
                <br /> Easy to use tables that sort and filter through extractions and data.
                </Text>
              </Box>
              <Box height='20vh' marginLeft={["3vh","10vh"]} boxSize={['xs','3xl']}>
                <Image src={table} alt='Dan Abramov' />
              </Box>
            </SimpleGrid>
          </MotionBox>
          </>
        );
}
export default LandingPage;