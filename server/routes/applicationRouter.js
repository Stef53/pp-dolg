const Router = require('express')
const router = new Router()
const applicationController = require('../controllers/applicationController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', authMiddleware, applicationController.create)
router.get('/', authMiddleware, applicationController.getAll)
router.get('/:id', authMiddleware, applicationController.getOne)
router.put('/', authMiddleware, applicationController.change)


module.exports = router