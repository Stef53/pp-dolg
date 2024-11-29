const Router = require('express')
const router = new Router()
const applicattionController = require('../controllers/applicationController')

router.post('/', applicattionController.create)
router.get('/', applicattionController.getAll)
router.get('/', applicattionController.getOne)


module.exports = router