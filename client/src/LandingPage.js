import {React, useState, useEffect, createRef, useRef} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip, VStack , Button} from '@chakra-ui/react';
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

function LandingPage() {
    const MotionBox = motion(Box);
    const MotionButton = motion(Button);

    const history = useHistory();

    const menuVariants = {
        hidden: {
            opacity:0, scale:0,
         transition: {
            delay: 0.2,
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
            opacity:1, scale:1,
          transition: {
            delay: 0.8,
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      function gotoDemo(){
        history.push('/demo')
      }

        return (
            <AnimatePresence>
                <Center>
                    <MotionButton variants={menuVariants} initial="hidden" animate="visible" exit="hidden" size="lg" marginTop="50vh" onClick={gotoDemo}>Start Demo</MotionButton>
                </Center>
            </AnimatePresence>
        );
}

export default LandingPage;