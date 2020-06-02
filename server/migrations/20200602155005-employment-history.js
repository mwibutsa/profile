"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("job", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user: { type: Sequelize.INTEGER },
      employer: { type: Sequelize.TEXT },
      jobTitle: { type: Sequelize.TEXT },
      jobDescription: { type: Sequelize.TEXT, allowNull: true },
      startDate: { type: Sequelize.DATE },
      endDate: { type: Sequelize.DATE, allowNull: true },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
      inProgress: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.dropTable("job")]),
};
