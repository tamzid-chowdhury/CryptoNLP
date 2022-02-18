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
import { Table, TableCaption, Td, Tr, Th, Thead, Tbody, Tfoot, Box, Text, Grid, Center, Icon, Tooltip, VStack , HStack, Button, Input, FormLabel, InputGroup, InputLeftAddon, Drawer, DrawerBody,
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
        console.log(clients)
    }

    return (
        <Box h="110vh" w="100vw" bg="#537895"> 
        <Center><Box position="relative" top="1vh" fontSize="xxx-large" color="red.300" h="10vh">Waitlist ({clients.length})</Box></Center>
        <Center><Box h="95vh" w="90%" overflow="visible">
            <Table size='sm'>
            <Thead>
                <Tr>
                <Th fontSize="2xl" color="red.300">No.</Th>
                <Th fontSize="2xl" color="red.300">First Name</Th>
                <Th color="red.300" fontSize="2xl">Last Name</Th>
                <Th color="red.300" fontSize="2xl">Email</Th>
                <Th color="red.300" fontSize="2xl">Company</Th>
                <Th color="red.300" fontSize="2xl">Position in Company</Th>
                <Th color="red.300" fontSize="2xl">Interests in Crypto</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    clients.map((client, index) => {
                        return (
                            <Tr color="white" key={index}>
                                <Td fontSize="large" >{index + 1}</Td>
                                <Td fontSize="large" >{client.firstName}</Td>
                                <Td fontSize="large" >{client.lastName}</Td>
                                <Td fontSize="large" >{client.email}</Td>
                                <Td fontSize="large" >{client.company}</Td>
                                <Td fontSize="large" >{client.position}</Td>
                                <Td fontSize="large" >{client.interests.join()}</Td>
                            </Tr>
                        )
                    })
                }

            </Tbody>
</Table>
        </Box></Center>
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
