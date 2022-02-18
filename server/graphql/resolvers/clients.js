const Client = require('../../models/Client');

module.exports = {
  Query: {
    async getClients() {
      const clients = await Client.find()
      console.log(clients)
      return clients;
    } 

  },
  Mutation: {
    async submitForm(_,{firstName,lastName,email,company,position,interests},__) {

    const newClient = new Client({
        firstName,
        lastName,
        email,
        company,
        position,
        interests
    });

    const client = await newClient.save();

    console.log(client)

    return client;
    } 
  },
};
