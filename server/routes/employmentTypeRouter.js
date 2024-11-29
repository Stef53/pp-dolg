const Router = require('express')
const router = new Router()
const employmentTypeController = require('../controllers/employmentTypeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), employmentTypeController.create)
router.get('/', employmentTypeController.getAll)


module.exports = router