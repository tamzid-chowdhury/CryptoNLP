import React from 'react';
import { useQuery } from '@apollo/client';
import * as queries from './cache/queries';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Router,
} from 'react-router-dom';
import {Box, Text, Grid} from '@chakra-ui/react'
import ParticleBackground from './ParticleBackground';
import TestPage from './TestPage';

const App = () => {

  return (
    <Box w='100%' h='750px' bgGradient='linear(to-t, #09203F, #537895)'>
       <ParticleBackground/>
       <TestPage/>
    </Box>
  );
};

export default App