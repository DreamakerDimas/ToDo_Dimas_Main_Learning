'use strict';
const moment = require('moment');

function generateTasks(users){
  const tasks = [];
  for(let i=0; i<users.length; i++){
    const taskCount = Math.round(Math.random()*10);
    for(let j=0; j<taskCount; j++){
      tasks.push({
        userId: users[i].id,
        isDone: Math.random() < 0.5,
        value: `User#${users[i].id} task #${j+1}`,
        deadline: moment('01.11.2020').set('day',Math.random()*10).toDate(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }
  return tasks;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.sequelize.query('Select id from "Users"')
        .then(
            ([results, metadata]) => {
              return queryInterface.bulkInsert('Tasks', generateTasks(results), {});
            }
        );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
