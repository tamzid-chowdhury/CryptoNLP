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
        <Box h="110vh"> 
        <Center><Box position="relative" top="1vh" fontSize="xxx-large" color="red.300" h="10vh">Waitlist ({clients.length})</Box></Center>
        <Center><Box h="95vh" w="90%" overflow="scroll">
            <Table size='sm'>
            <Thead>
                <Tr>
                <Th fontSize="large" color="red.300">No.</Th>
                <Th fontSize="large" color="red.300">First Name</Th>
                <Th color="red.300" fontSize="large">Last Name</Th>
                <Th color="red.300" fontSize="large">Email</Th>
                <Th color="red.300" fontSize="large">Company</Th>
                <Th color="red.300" fontSize="large">Position in Company</Th>
                <Th color="red.300" fontSize="large">Interests in Crypto</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    clients.map((client, index) => {
                        return (
                            <Tr color="white" key={index}>
                                <Td>{index+1}</Td>
                                <Td>{client.firstName}</Td>
                                <Td>{client.lastName}</Td>
                                <Td>{client.email}</Td>
                                <Td>{client.company}</Td>
                                <Td>{client.position}</Td>
                                <Td>{client.interests.join()}</Td>
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
