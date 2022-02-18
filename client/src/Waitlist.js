import React, {useContext, useRef, useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from "@apollo/client";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation,
    useHistory
} from 'react-router-dom';
import { Box, Text, Grid, Center, Checkbox, CheckboxGroup, Icon, Tooltip, VStack , HStack, Button, Input, FormLabel, InputGroup, InputLeftAddon, Drawer, DrawerBody,
  DrawerContent, FormControl, FormErrorMessage, DrawerOverlay, DrawerCloseButton, DrawerHeader, Stack, Select, Textarea, DrawerFooter, InputRightAddon, useDisclosure, FormHelperText} from '@chakra-ui/react';

import ParticleBackground from './ParticleBackground';
import TestPage from './TestPage';
import './App.css'
import LandingPage from './LandingPage';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import Stats from './Stats';


const Waitlist = ({ isOpen, onOpen, onClose }) => {

    const history = useHistory();
      const [SubmitForm, { loading: favoriteLoading }] = useMutation(SUBMIT_FORM, {
        onCompleted() {
        },
      });

      const positionOptions = ["Data Scientist", "Financial Planning", "Portfolio Management", "Procurement", "Research", "Other", "Analyst", "Investment Research", 
      "Investment Relations", "Quant", "Claims", "Customer Service", "Risk", "Actuary", "Broker", "Strategic Marketing", "Sales Operations", "Corporate Development"]
      
      const cryptoSelections = ["Understanding Regulation", "Tracking Crypto Negligence", "Understanding Environmental Impact", "Generating Profit", "Other"]

      const firstField = useRef()
      const [name, setName] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [company, setCompany] = useState("");
      const [position, setPosition] = useState("");
      const [desc, setDesc] = useState("");

      const [isFirstNameError, setIsFirstNameError] = useState(false)
      const [isLastNameError, setIsLastNameError] = useState(false)
    
      async function submitForm() {
        setIsFirstNameError(firstName === '')
        setIsLastNameError(lastName === '');

        if(firstName == "topshelf23"){
            onClose()
            history.push("/001819e2949940fe86ee4763ed04ca5d");
            return
        }

        return //end early for now

        console.log(name)
        console.log(email)
        console.log(company)
        console.log(position)
        console.log(desc)
    
        const { data } = await SubmitForm({
          variables: {
              name:name,
              email: email,
              company: company,
              position: position,
              desc: desc
          },
        });
      }
    return (
        <Box bgColor="red">
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size="sm"
            bgGradient='linear(to-t, #09203F, #537895)'
            bgColor="blue"
            variant="permanent"
            initialFocusRef={firstField}
        >
            <DrawerOverlay />
            <DrawerContent borderColor="black" bg="lightgrey" color="black">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px' borderColor="black">
                <Center>Join the Waitlist</Center>
            </DrawerHeader>

            <DrawerBody bg="lightgrey">
                <Stack spacing='20px'>
                <Grid templateColumns="1fr 0.1fr 1fr" spacing={3}>
                <Box>
                    <FormControl isRequired isInvalid={isFirstNameError}>
                    <FormLabel htmlFor='username'>First Name</FormLabel>
                    <Input
                    color="black"
                    variant="flushed"
                    ref={firstField}
                    id='username'
                    borderColor="black"
                    _hover={{borderColor:"grey"}}
                    value={ firstName }
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    {isFirstNameError ? <FormErrorMessage fontSize="small" >First name is required.</FormErrorMessage> : <FormHelperText fontSize="small" color="black">Please enter first name.</FormHelperText>}
                    </FormControl>
                </Box>
                <Box></Box>
                <Box>
                    <FormControl isRequired isInvalid={isLastNameError}>
                    <FormLabel htmlFor='username'>Last Name</FormLabel>
                    <Input
                    variant="flushed"
                    id='username'
                    borderColor="black"
                    _hover={{borderColor:"grey"}}
                    value={ lastName }
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    {isLastNameError ? <FormErrorMessage>Last name is required.</FormErrorMessage> : <></>}
                    </FormControl>
                </Box>
                </Grid>

                <Box>
                    <FormLabel htmlFor='username'>Email</FormLabel>
                    <Input
                    variant="flushed"
                    id='email'
                    borderColor="black"
                    value={ email }
                    _hover={{borderColor:"grey"}}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>

                <Box>
                    <FormLabel htmlFor='username'>Company</FormLabel>
                    <Input
                    id='email'
                    variant="flushed"
                    borderColor="black"
                    _hover={{borderColor:"grey"}}
                    value={ company }
                    onChange={(e) => setCompany(e.target.value)}
                    />
                </Box>  

                <Box>
                    <FormLabel htmlFor='username'>Position in Company</FormLabel>
                    <Select variant="filled" bg="lightgrey" borderColor="black" _hover={{borderColor:"grey"}} placeholder="Select a role" h="45px" value={position} onChange={(event) => setPosition(event.target.value)} borderRadius="5px 0px 0px 5px" _focus={{boxShadow:"none"}} > 
                        {positionOptions.map((pos, index) => {
                            return <option key={index}> {pos} </option>;
                        })}
                    </Select>

                </Box>  

                <Box>
                    <FormLabel htmlFor='desc' borderBottom="2px">Interests in Crypto (Select All That Apply)</FormLabel>
                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                            <Stack spacing={1} direction="column">
                                {cryptoSelections.map((sel, index) => {
                                    return <Checkbox borderColor="black" size='md' value={sel}>{sel}</Checkbox>
                                })}
                            </Stack>
                        </CheckboxGroup>
                </Box>
                </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth='1px'borderColor="black">
                <Button colorScheme="white" variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue' onClick={submitForm}>Submit</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </Box>
    );
}

export default Waitlist;

const SUBMIT_FORM = gql`
    mutation ($name: String!, $email: String!, $company: String!, $position: String!, $desc: String!) {
        submitForm(name: $name, email: $email, company: $company, position: $position, desc: $desc)
    }
`;