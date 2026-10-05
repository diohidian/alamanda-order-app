'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('menus', [{
      name: 'cumi goreng tepung',
      description: 'cumi goreng tepung dengan bumbu spesial',
      price: 25000,
      image: 'cumi-goreng-tepung.jpg',
      is_available: true,
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
