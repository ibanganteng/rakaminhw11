const TodoService = require('../services/todoService')

class TodoContoller {
  // list All todo
  static findAll = async (req, res, next) => {
    try {
      const todo = await TodoService.findAll(req.query)
      res.status(200).json(todo)
    } catch (err) {
      next(err)
    }
  }

  // get todo by id
  static findByPk = async (req, res, next) => {
    try {
      const todo = await TodoService.findByPk(req.params.id)
      res.status(200).json(todo)
    } catch (err) {
      next(err)
    }
  }

  // create todo
  static create = async (req, res, next) => {
    try {
      const todo = await TodoService.create(req.body)
      res.status(201).json({
        message: 'todo added successfully',
        data: todo
      })
    } catch (err) {
      next(err)
    }
  }

  // delete/destroy todo
  static destroy = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id
      }
      await TodoService.destroy(params)
      res.status(200).json({ message: 'todo delete successfully' })
    } catch (err) {
      next(err)
    }
  }
}
module.exports = TodoContoller
