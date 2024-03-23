const request = require('supertest')

const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize;

const BASE_URL = '/api/todo'

beforeAll( async () => {
  try {
    await queryInterface.bulkInsert('Todos', [
      {
        id:1,
        title:"Mengerjakan Tugas Matematika",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        title:"Belajar Bahasa Inggris",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        title:"Menyelesaikan Proyek Desain Grafis",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        title:"Berolahraga Setiap Hari",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:5,
        title:"Membaca Buku tentang Sejarah",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  } catch (err) {
    console.log(err)
  }
})

afterAll( async () => {
  try {
    await queryInterface.bulkDelete('Todos', null)
  } catch (err) {
    console.log(err)
  }
})

describe('GET List Todo /api/todo', () => {
  it('GET /api/todo', (done) => {
    request(app)
      .get(`${BASE_URL}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        const { body } = response
        // expect(body.length).toEqual(5)
        console.log(body);
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})

describe('GET Detail Todo /api/todo/:id', () => {
  it('GET /api/todo/:id', (done) => {
    request(app)
      .get(`${BASE_URL}/1`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        const { body } = response
        const { id, title} = body
        expect(id).toEqual(1)
        expect(title).toBe("Mengerjakan Tugas Matematika")
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})

describe('POST Create Todo /api/todo', () => {
  it('POST /api/todo', (done) => {
    const service = {
      id:6,
      title:"Menonton Film Dokumenter tentang Alam",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    request(app)
      .post(`${BASE_URL}`)
      .send(service)
      .expect(201)
      .then(response => {
        const { body } = response
        const { message, data } = body
        const { id, title } = data
        expect(message).toBe('todo added successfully')
        expect(id).toEqual(6)
        expect(title).toBe("Menonton Film Dokumenter tentang Alam")
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})



describe('DELETE Destroy Todo /api/todo/:id', () => {
  it('DELETE /api/todo/:id', (done) => {
    request(app)
      .delete(`${BASE_URL}/1`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        const { body } = response
        const { message } = body
        expect(message).toBe('todo delete successfully')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})