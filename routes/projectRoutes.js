const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const projectController = require('../controller/projectController')

router.get('/api/projects', authMiddleware, projectController.getAllProjects)
router.get('/api/projects/:id',authMiddleware, projectController.getOneProject)
router.post('/api/projects', authMiddleware, projectController.createOneProject)
router.put('/api/projects/:id', authMiddleware, projectController.updateProject)
router.delete('/api/projects/:id', authMiddleware, projectController.deleteProject)

module.exports = router