const Router = require('express')
const router = new Router()
const specialtyController = require('../controllers/specialtyController')

router.post('/', specialtyController.create)
router.get('/', specialtyController.getAll)


module.exports = router