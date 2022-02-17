import {React, useState, useEffect, createRef, useRef} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip, VStack , HStack, Button, Input, FormLabel, InputGroup, InputLeftAddon, Drawer, DrawerBody,
DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, Stack, Select, Textarea, DrawerFooter, InputRightAddon, useDisclosure} from '@chakra-ui/react';
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

function LandingPage(props) {
    const MotionBox = motion(Box);
    const MotionButton = motion(Button);

    const history = useHistory();

    const menuVariants = {
        hidden: {
            opacity:0, scale:0,
         transition: {
            type: "spring",
            duration: 0.1,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
            opacity:1, scale:1.1,
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
            scale:0,
         transition: {
            type: "spring",
            duration: 1,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
            opacity:1,
            scale:1,
          transition: {
            type: "spring",
            duration: 1,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      function gotoDemo(){
        history.push('/demo')
      }

        return (
          <MotionBox h="100vh" color="white">
                <Center position="relative" top="35vh">
                    <VStack spacing={3}>
                    <MotionBox variants={titleVariants} initial="hidden" animate="visible" exit="hidden" className="titlefont" fontSize={{ base: '15px', md: '30px', lg: '40px' }}>Understand <Box as="span" color="red.300">Crypto </Box>Like Never Before</MotionBox>
                    <MotionBox variants={titleVariants} initial="hidden" animate="visible" exit="hidden" className="titlefont" fontSize={{ base: '11px', md: '20px', lg: '30px' }}>Utilizing <Box as="span" color="red.300">NLP</Box> to Understand the<Box as="span" color="red.300"> Global Crypto Market</Box></MotionBox>
                    </VStack>
                </Center>
                <Center position="relative" top="40vh">
                    <HStack spacing={10}>
                    <MotionButton variant="solid" whileHover={{scale:1.2}} bgColor="white" _hover={{bgColor:"gray.200"}}  color="black" className="titlefont" variants={menuVariants} initial="hidden" animate="visible" exit="hidden" size='md' onClick={gotoDemo}>Start Demo</MotionButton>
                    <MotionButton variant="solid"  whileHover={{scale:1.2}} bgColor="red.300" _hover={{bgColor:"red.500"}} className="titlefont" variants={menuVariants} initial="hidden" animate="visible" exit="hidden" size="md" onClick={props.onOpen}>Join Waitlist</MotionButton>
                    </HStack>
                </Center>
          </MotionBox>
        );
}
export default LandingPage;