const Router = require('express')
const router = new Router()
const specialtyController = require('../controllers/specialtyController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), specialtyController.create)
router.get('/', specialtyController.getAll)


module.exports = router