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
import {Box} from '@chakra-ui/react'
import Homepage from './Homepage.js'

function App() {

    return <Homepage/>;
}

export default App;
