const Router = require('express')
const router = new Router()
const applicationController = require('../controllers/applicationController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, applicationController.create)
router.get('/:id', authMiddleware, applicationController.getOne)


module.exports = router