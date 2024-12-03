const Router = require('express')
const router = new Router()
const studentProfileController = require('../controllers/studentProfileController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', )
router.get('/:id',authMiddleware, studentProfileController.getOne)
router.put('/:id',authMiddleware, studentProfileController.change)


module.exports = router