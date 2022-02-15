import React, {useContext} from 'react';
import { useQuery } from '@apollo/client';
import * as queries from './cache/queries';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
} from 'react-router-dom';
import {Box, Text, Grid} from '@chakra-ui/react'
import ParticleBackground from './ParticleBackground';
import TestPage from './TestPage';
import './App.css'
import LandingPage from './LandingPage';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';

const App = () => {
  
  const location = useLocation();
  console.log(location)

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
    <Box w='100%' h='285vh' bgGradient='linear(to-t, #09203F, #537895)'>
      {/* <ParticleBackground/> */}
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/demo' component={TestPage} />
          </Switch>
        </AnimatePresence>
    </Box>
  );
};

export default App