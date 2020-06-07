'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('skills', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: Sequelize.INTEGER,
    skillName: {
      type: Sequelize.TEXT,
    },

    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
  }),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.dropTable('skills')
  ])
};