const Router = require('express')
const router = new Router()
const vacancyController = require('../controllers/vacancyController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), vacancyController.create)
router.delete('/:id', checkRole('ADMIN'), vacancyController.delete)
router.get('/', vacancyController.getAll)
router.get('/:id', vacancyController.getOne)



module.exports = router