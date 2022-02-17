import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {BrowserRouter as Router} from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
  components: {
    Drawer: {
      variants: {
        permanent: {
          dialog: {
            pointerEvents: 'auto',
          },
          dialogContainer: {
            pointerEvents: 'none',
          }
        },
      },
    },
  },
})

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: '/graphql',
    // Credentials: include is necessary to pass along the auth cookies with each server request
    credentials: 'include',
    cache: cache,
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ChakraProvider theme={theme}>
                <Router onUpdate={() => window.scrollTo(0, 0)}>
                    <App />
                </Router>
            </ChakraProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
