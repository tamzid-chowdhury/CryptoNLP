import React, {useContext, useRef, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from "@apollo/client";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from 'react-router-dom';
import { Box, Text, Grid, Center, Icon, Tooltip, VStack , HStack, Button, Input, FormLabel, InputGroup, InputLeftAddon, Drawer, DrawerBody,
  DrawerContent,Image, DrawerOverlay, DrawerCloseButton, DrawerHeader, Stack, Select, Textarea, DrawerFooter, InputRightAddon, useDisclosure, AspectRatio} from '@chakra-ui/react';

import TestPage from './TestPage';
import './App.css'
import LandingPage from './LandingPage';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import Stats from './Stats';
import Waitlist from './Waitlist.js'
import { extendTheme } from '@chakra-ui/react';
import '.'
import gif from './crypto_vid.gif'

const App = () => {
  
  const location = useLocation();
  console.log(location)

  const [submitted, setSubmitted] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      trasition: {delay: 1.5, duration: 1.5}
    }
  }

  return (
    <Box w='100%' bgGradient='linear(to-t, #09203F, #537895)'>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/'><LandingPage onOpen={onOpen}/></Route>
            <Route exact path='/demo'><TestPage onOpen={onOpen}/></Route>
            <Route exact path='/001819e2949940fe86ee4763ed04ca5d'><Stats/></Route>
          </Switch>
        
        <Waitlist submitted={submitted} setSubmitted={setSubmitted} isOpen={isOpen} onClose={onClose}/>
        </AnimatePresence>

    </Box>
  );
};

export default App

