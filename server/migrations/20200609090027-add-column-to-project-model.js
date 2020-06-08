'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.addColumn('projects', 'projectName', Sequelize.TEXT),
    ]),

  down: (queryInterface, Sequelize) => Promise.all([]),
};
