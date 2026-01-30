const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const taskController = require('../controller/taskController')

// task routes
// router.post('/', taskController.createTask)
// router.get('/project/:projectId', taskController.getTasksForProject)
// router.put('/:id', taskController.updateTask)
// router.delete('/:id', taskController.deleteTask)

// module.exports = router