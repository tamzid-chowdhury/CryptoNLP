const Client = require('../../models/Client');

module.exports = {
  Query: {
    async getClients() {
      const clients = await Client.find()
      return clients;
    } 

  },
  Mutation: {
    async submitForm(_,{name,email,company,position,desc},__) {
      console.log(name)

      const newClient = new Client({
        name,
        email,
        company,
        position,
        desc
    });

    const client = await newClient.save();

    return true;
    } 
  },
};
