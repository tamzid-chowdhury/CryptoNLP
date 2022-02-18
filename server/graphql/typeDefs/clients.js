const { gql } = require('apollo-server-express');

module.exports = gql`
    type Client {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        company: String
        position: String
        interests: [String]
    }

    extend type Query {
        getClients: [Client]
    }

    extend type Mutation {
        submitForm(firstName: String!, lastName: String!, email: String!, company: String, position: String, interests: [String]): Client
    }
`;
