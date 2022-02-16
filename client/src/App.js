import React, {useContext, useRef} from 'react';
import { useQuery } from '@apollo/client';
import * as queries from './cache/queries';
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

const App = () => {
  
  const location = useLocation();
  console.log(location)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()

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
    <Box w='100%' bgGradient='linear(to-b, #09203F, #537895)'>
      {/* <ParticleBackground/> */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/'><LandingPage onOpen={onOpen}/></Route>
            <Route exact path='/demo'><TestPage onOpen={onOpen}/></Route>
          </Switch>
        </AnimatePresence>
        <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Join the Waitlist
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter user name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='username'>Email</FormLabel>
                <Input
                  id='email'
                  placeholder='Please enter email'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='username'>Company</FormLabel>
                <Input
                  id='email'
                  placeholder='Please enter email'
                />
              </Box>  

              <Box>
                <FormLabel htmlFor='desc'>Interest in Crypto</FormLabel>
                <Textarea id='desc' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default App