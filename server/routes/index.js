const Router = require('express')
const router = new Router()
const applicationRouter = require('./applicationRouter')
const statusRouter = require('./statusRouter')
const employmentTypeRouter = require('./employmentTypeRouter')
const specialtyRouter = require('./specialtyRouter')
const districtRouter = require('./districtRouter')
const userRouter = require('./userRouter')
const vacancyRouter = require('./vacancyRouter')
const studentProfileRouter = require('./studentProfileRouter')


router.use('/user', userRouter)
router.use('/vacancy', vacancyRouter)
router.use('/application', applicationRouter)
router.use('/status', statusRouter)
router.use('/specialty', specialtyRouter)
router.use('/employmentType', employmentTypeRouter)
router.use('/district', districtRouter)
router.use('/studentProfile', studentProfileRouter)

module.exports = router