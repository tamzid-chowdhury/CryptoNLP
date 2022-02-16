const { gql } = require('apollo-server-express');

module.exports = gql`
    type Client {
        id: ID!
        name: String!
        email: String!
        company: String!
        position: String!
        desc: String!
    }

    extend type Query {
        getClients: [Client]
    }

    extend type Mutation {
        submitForm(name: String!, email: String!, company: String!, position: String!, desc: String!): Boolean
    }
`;
