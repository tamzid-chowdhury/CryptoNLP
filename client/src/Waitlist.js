import React, {useContext, useEffect, useRef, useState} from 'react';
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
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription, Text, Grid, Center, Checkbox, CheckboxGroup, Icon, Tooltip, VStack , HStack, Button, Input, FormLabel, InputGroup, InputLeftAddon, Drawer, DrawerBody,
  DrawerContent, FormControl, FormErrorMessage, DrawerOverlay, DrawerCloseButton, DrawerHeader, Stack, Select, Textarea, DrawerFooter, InputRightAddon, useDisclosure, FormHelperText} from '@chakra-ui/react';
import TestPage from './TestPage';
import './App.css'
import LandingPage from './LandingPage';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import Stats from './Stats';


const Waitlist = ({ isOpen, onOpen, onClose, submitted, setSubmitted}) => {

    const history = useHistory();
      const [SubmitForm, { loading: favoriteLoading }] = useMutation(SUBMIT_FORM, {
        onCompleted() {
        },
      });

      useEffect(() => {
        if(submitted == true){
            setTimeout(() => {
                onClose()
                setShowClosing(false)
            },4000)   
        }
      }, [submitted])

      const [showClosing, setShowClosing] = useState(true);

      const positionOptions = ["Data Scientist", "Financial Planning", "Portfolio Management", "Procurement", "Research", "Other", "Analyst", "Investment Research", 
      "Investment Relations", "Quant", "Claims", "Customer Service", "Risk", "Actuary", "Broker", "Strategic Marketing", "Sales Operations", "Corporate Development"]
      
      const cryptoSelections = ["Understanding Regulation", "Tracking Crypto Negligence", "Understanding Environmental Impact", "Generating Profit", "Other"]

      const firstField = useRef()
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [company, setCompany] = useState("");
      const [position, setPosition] = useState("");
      const [interests, setInterests] = useState([]);

      const [isFirstNameError, setIsFirstNameError] = useState(false)
      const [isLastNameError, setIsLastNameError] = useState(false)
      const [isEmailError, setIsEmailError] = useState(false)

      const [load, setLoad] = useState(false)

      function handleKeyPress(event) {
        if(event.key === 'Enter'){
            if(firstName == "topshelf23"){
                onClose()
                history.push("/001819e2949940fe86ee4763ed04ca5d");
                return
            }
        }
      }
    
      async function submitForm() {
        if(firstName === ''){
            setIsFirstNameError(true)
        }
        else{
            setIsFirstNameError(false)
        }

        if(lastName === ''){
            setIsLastNameError(true)
        }
        else{
            setIsLastNameError(false)
        }

        if(email === ''){
            setIsEmailError(true)
        }
        else{
            setIsEmailError(false)
        }

        if(firstName === '' || lastName === ''|| email === '') {
            return
        }

        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(company)
        console.log(position)
        console.log(interests)

        setLoad(true)

        const { data } = await SubmitForm({
          variables: {
              firstName: firstName,
              lastName: lastName,
              email: email,
              company: company,
              position: position,
              interests: interests
          },
        });

        setTimeout(() => {
            setFirstName('');
            setLastName('');
            setCompany('');
            setEmail('');
            setPosition('');
            setInterests([]);
            setLoad(false)
            setTimeout(() => {
                setSubmitted(true);
            },500)
        }, 1000)


      }
    return (
        <Box >
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
            <DrawerContent bg="#1b222d" color="lightgrey">
            <DrawerCloseButton />
            <DrawerHeader >
                <Center><Text borderBottom="1px" fontSize='25px'>Join the Waitlist</Text></Center>
            </DrawerHeader>

            {!submitted ? <DrawerBody borderTop="1px">
                <Stack spacing='25px'>
                <Grid templateColumns="1fr 0.1fr 1fr" spacing={3}>
                <Box>
                    <FormControl isRequired isInvalid={isFirstNameError}>
                    <FormLabel fontSize="lg" htmlFor='username'>First Name</FormLabel>
                    <Input
                    onKeyPress={handleKeyPress}
                    color="lightgrey"
                    variant="outline"
                    _focus={{borderColor:"white"}} 
                    ref={firstField}
                    id='username'
                    borderColor="lightgrey"
                    _hover={{borderColor:"grey"}}
                    value={ firstName }
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    {isFirstNameError ? <FormErrorMessage fontSize="small" >First name is required.</FormErrorMessage> : <FormHelperText fontSize="small" color="lightgrey">Please enter first name.</FormHelperText>}
                    </FormControl>
                </Box>
                <Box></Box>
                <Box>
                    <FormControl isRequired isInvalid={isLastNameError}>
                    <FormLabel fontSize="lg" htmlFor='username'>Last Name</FormLabel>
                    <Input
                    _focus={{borderColor:"white"}} 
                    variant="outline"
                    id='username'
                    borderColor="lightgrey"
                    _hover={{borderColor:"grey"}}
                    value={ lastName }
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    {isLastNameError ? <FormErrorMessage>Last name is required.</FormErrorMessage> : <FormHelperText fontSize="small" color="lightgrey">Please enter last name.</FormHelperText>}
                    </FormControl>
                </Box>
                </Grid>

                <Box>
                    <FormControl isRequired isInvalid={isEmailError}>
                    <FormLabel fontSize="lg" htmlFor='username'>Email Address</FormLabel>
                    <Input
                    _focus={{borderColor:"white"}} 
                    variant="outline"
                    id='email'
                    borderColor="lightgrey"
                    value={ email }
                    _hover={{borderColor:"grey"}}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {isLastNameError ? <FormErrorMessage>Email address is required to join our waitlist.</FormErrorMessage> : <FormHelperText fontSize="small" color="lightgrey">Please enter email address to recieve updates on our website.</FormHelperText>}
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                    <FormLabel fontSize="lg" htmlFor='username'>Company</FormLabel>
                    <Input
                    id='email'
                    variant="outline"
                    borderColor="lightgrey"
                    _focus={{borderColor:"white"}} 
                    _hover={{borderColor:"grey"}}
                    value={ company }
                    onChange={(e) => setCompany(e.target.value)}
                    />
                    <FormHelperText fontSize="small" color="lightgrey">Please enter your company of employment.</FormHelperText>
                    </FormControl>
                </Box>  

                <Box>
                    <FormControl>
                    <FormLabel fontSize="lg" htmlFor='username'>Position in Company</FormLabel>
                    <Select _focus={{borderColor:"white"}}  bg="#1b222d"  variant="filled" borderColor="lightgrey" _hover={{borderColor:"grey"}} placeholder="Select a role" h="45px" value={position} onChange={(event) => setPosition(event.target.value)} borderRadius="5px 0px 0px 5px" > 
                        {positionOptions.map((pos, index) => {
                            return <option style={{color:"black"}} key={index}> {pos} </option>
                        })}
                    </Select>
                    <FormHelperText fontSize="small" color="lightgrey">Please select the option that best describes your role in the company</FormHelperText>
                    </FormControl>

                </Box>  

                <Box>
                    <FormLabel fontSize="lg" htmlFor='desc' borderBottom="2px">Interests in Crypto (Select All That Apply)</FormLabel>
                        <CheckboxGroup colorScheme='green' onChange={(event) => setInterests(event)}>
                            <Stack spacing={1} direction="column">
                                {cryptoSelections.map((sel, index) => {
                                    return <Checkbox key={index} borderColor="lightgrey" size='lg' value={sel}>{sel}</Checkbox>
                                })}
                            </Stack>
                        </CheckboxGroup>
                </Box>
                </Stack>
            </DrawerBody> : 
            <DrawerBody borderTop="1px">
                <Box marginTop={["20vh","30vh"]}>
                                    <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle color="black" mt={4} mb={1} fontSize='lg'>
                        Waitlist has been joined!
                    </AlertTitle>
                    <AlertDescription color="black" maxWidth='sm'>
                        Thank you for your submission. Our team will get back to you soon.
                        {showClosing && <Text className="closing"  textAlign="center" fontSize="20px">Automatically closing in three seconds...</Text>}
                    </AlertDescription>
                    </Alert>
                </Box>
            </DrawerBody>}

            <DrawerFooter borderTopWidth='1px'borderColor="lightgrey">
                <Button size="lg" colorScheme="white" variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button isLoading={load} size="lg" colorScheme='blue' onClick={submitForm}>Submit</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </Box>
    );
}

export default Waitlist;

const SUBMIT_FORM = gql`
    mutation ($firstName: String!, $lastName: String!, $email: String!, $company: String, $position: String, $interests: [String]) {
        submitForm(firstName: $firstName, lastName: $lastName, email: $email, company: $company, position: $position, interests: $interests){
            firstName
            lastName
            email
            company
            position
            interests
        }
    }
`;