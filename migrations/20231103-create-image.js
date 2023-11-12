'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Images', {
           id: {
               allowNull: false,
               autoIncrement: true,
               primarykey: true,
               type: Sequelize.INTEGER
           },
           variantId: {
               type: Sequelize.INTEGER
           },
           createdAt: {
               allowNull: false,
               type: Sequelize.DATE
           },
           updatedAt: {
               allowNull: false,
               type: Sequelize.DATE
           }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Images');
    }
};