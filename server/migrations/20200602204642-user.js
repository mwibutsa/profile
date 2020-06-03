"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      professionalSummary: {
        type: Sequelize.TEXT,
        trim: true,
      },
      location: Sequelize.STRING,
      title: Sequelize.STRING,
      password: {
        type: Sequelize.STRING,
      },
      profileImage: { type: Sequelize.TEXT },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    }),
  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.dropTable("users")]),
};
