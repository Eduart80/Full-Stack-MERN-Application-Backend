const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const taskController = require('../controller/taskController')

// task routes
router.post('/api/projects/:projectId/tasks', authMiddleware, taskController.createTask)
router.get('/api/projects/:projectId/tasks', authMiddleware, taskController.getAllTasks)
router.get('/api/tasks/:id', authMiddleware, taskController.getOneTask)
// router.put('/:id', taskController.updateTask)
// router.delete('/:id', taskController.deleteTask)

module.exports = router