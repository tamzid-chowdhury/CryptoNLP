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
  DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, Stack, Select, Textarea, DrawerFooter, InputRightAddon, useDisclosure} from '@chakra-ui/react';

import ParticleBackground from './ParticleBackground';
import TestPage from './TestPage';
import './App.css'
import LandingPage from './LandingPage';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import Stats from './Stats';
import Waitlist from './Waitlist.js'

const App = () => {
  
  const location = useLocation();
  console.log(location)

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
      {/* <ParticleBackground/> */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/'><LandingPage onOpen={onOpen}/></Route>
            <Route exact path='/demo'><TestPage onOpen={onOpen}/></Route>
            <Route exact path='/stats'><Stats/></Route>
          </Switch>
        
        <Waitlist isOpen={isOpen} onClose={onClose}/>
        </AnimatePresence>

    </Box>
  );
};

export default App

