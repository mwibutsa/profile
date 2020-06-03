"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("projectStacks", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      projectId: { type: Sequelize.INTEGER },
      stackName: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    }),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.dropTable("projectStacks")]),
};
