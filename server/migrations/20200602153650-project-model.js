"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("projects", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: { type: Sequelize.INTEGER },
      projectUrl: {
        type: Sequelize.TEXT,
      },
      projectVideoUrl: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      thumbnailImageUrl: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      startDate: { type: Sequelize.DATE },
      endDate: { type: Sequelize.DATE, allowNull: true },
      inProgress: { type: Sequelize.BOOLEAN, defaultValue: false },
      projectOwner: { type: Sequelize.TEXT },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    }),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.dropTable("projects")]),
};
