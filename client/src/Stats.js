import React, {useContext, useRef, useState} from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client'
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



function Stats() {
    const {data:data, error:error, loading:loading} = useQuery(GET_CLIENTS, {
        fetchPolicy: 'network-only',
    });

    let clients = null; 

    if(loading) {
        return (
            <></>
        )
    }
    if(data){
        clients = data.getClients;
    }

    console.log(clients)

    return (
            <Box h="100vh" color="white">
                <VStack color="white">
                    <Text marginTop="2vh" color="red.300">Waitlist for NLPCrypto</Text>
                    <HStack spacing="300px">
                            <Text color="green" borderBottom="1px">Name</Text>
                            <Text color="pink" borderBottom="1px">Email</Text>
                            <Text color="yellow" borderBottom="1px">Company</Text>
                            <Text color="orange" borderBottom="1px">Position</Text>
                            <Text color="brown" borderBottom="1px">Crypto Interest</Text>
                    </HStack>
                    {clients.map((client, key) => {
                        return (
                            <HStack spacing="300px">
                            <Text key={key} color="green">{client.firstName}</Text>
                            <Text key={key} color="brown">{client.lastName}</Text>
                            <Text key={key} color="pink">{client.email}</Text>
                            <Text key={key} color="yellow">{client.company}</Text>
                            <Text key={key} color="orange">{client.position}</Text>
                            </HStack>
                        )
                    })}
                </VStack>
            </Box>
    )
}

export default Stats;

export const GET_CLIENTS = gql`
    {
        getClients {
            firstName
            lastName
            email
            company
            position
            interests
        }
    }
`;
