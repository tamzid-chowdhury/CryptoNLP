const clientsResolvers = require('./clients');

module.exports = {
  Query: {
    ...clientsResolvers.Query,
  },
  Mutation: {
    ...clientsResolvers.Mutation,
  },
};
