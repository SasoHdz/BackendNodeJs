const faker = require('faker');
const boom  = require('@hapi/boom');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {

    const limit = 100;

    for(let index = 0; index < limit; index++){
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        number: fake.phone.phoneNumber(),
        avatar: faker.internet.avatar(),
        country: faker.address.country(),
        address: faker.address.address(),
        isPremiun: faker.datatype.boolean(),
      });
    }

  }

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.users.push(newUser);
    return newUser;
  }

  async find () {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
          resolve(this.users);
        },5000);
    });
    //return this.users;
  }

  async findOne(id) {
    //const name = this.getTotal();
    const user = this.users.find(item => item.id === id);
    if(!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];

  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.users.splice(index, 1);

    return { id };
  }
}

module.exports = UsersService;
