const express = require('express')
const router = express.Router()
const TodoContoller = require('../controllers/todoController')

// list All Todo
router.get('/', TodoContoller.findAll)

//  Detail Todo
router.get('/:id', TodoContoller.findByPk)

// Create Todo
router.post('/', TodoContoller.create)

// Delete Todo
router.delete('/:id', TodoContoller.destroy)

module.exports = router
