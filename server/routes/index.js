const Router = require('express')
const router = new Router()
const applicationRouter = require('./applicationRouter')
const employmentTypeRouter = require('./employmentTypeRouter')
const specialtyRouter = require('./specialtyRouter')
const userRouter = require('./userRouter')
const vacancyRouter = require('./vacancyRouter')
const studentProfileRouter = require('./studentProfileRouter')


router.use('/user', userRouter)
router.use('/vacancy', vacancyRouter)
router.use('/application', applicationRouter)
router.use('/specialty', specialtyRouter)
router.use('/employmentType', employmentTypeRouter)
// router.use('/studentProfile', studentProfileRouter)

module.exports = router