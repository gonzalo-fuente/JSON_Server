var fs = require('fs');
var faker = require('@faker-js/faker/locale/en');
faker.locale = 'en';

let employees = [];

for (let i = 1; i <= 1000; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  employees.push({
    address: `${faker.address.streetAddress()}, ${faker.address.zipCode()}, ${faker.address.city()}, ${faker.address.country()}`,
    email: faker.internet.email(firstName, lastName),
    id: i,
    name: faker.name.findName(firstName, lastName),
  });
}

const data = {
  employees,
};

fs.writeFile('./db/db.json', JSON.stringify(data, null, 2), (err) => {
  if (err) return console.log(err);
  console.log('Created database at db/db.json');
});
