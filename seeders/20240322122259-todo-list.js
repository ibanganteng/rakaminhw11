'use strict'

const fs = require('fs')
let data = fs.readFileSync('./todo.json', 'utf-8')

console.log(JSON.parse(data))

data = JSON.parse(data).map((elemen) => {
  return {

    title: elemen.title,
    createdAt: new Date(),
    updatedAt: new Date()

  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todo', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
