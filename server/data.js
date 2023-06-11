const { faker } = require("@faker-js/faker");

let clients = [];

Array.from({ length: 30}).forEach((_, index) => {
    const client = {
        id: index,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: {
            street: faker.location.streetAddress(),
            street2: faker.location.secondaryAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
        }
    };
    clients.push(client);
});

module.exports = { clients,  };