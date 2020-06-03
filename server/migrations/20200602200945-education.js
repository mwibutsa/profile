"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("education", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: { type: Sequelize.INTEGER },
      schoolName: { type: Sequelize.TEXT },
      courseTaken: {
        type: Sequelize.TEXT,
      },
      startDate: { type: Sequelize.DATE },
      endDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      inProgress: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    }),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.dropTable("education")]),
};
