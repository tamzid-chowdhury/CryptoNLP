import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
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
                <App />
            </ChakraProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
