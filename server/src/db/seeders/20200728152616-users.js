'use strict';
const bcrypt = require('bcrypt');

function generateUsers() {
  const users = [];
  for(let i=0; i<100; i++){
    users.push({
      firstName: `fname${i}`,
      lastName: `lname${i}`,
      email: `email${i}@mail.com`,
      login: `userlogin${i}`,
      passwordHash: bcrypt.hashSync(`passwords${i}`, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
  return users;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users',generateUsers(), {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
