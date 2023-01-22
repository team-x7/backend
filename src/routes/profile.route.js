const router = require('express').Router()

const { auth } = require('../middleware/auth.middleware')
const {
  updateProfile,
  createProfile,
} = require('../controllers/profile.controller')

router.use(auth)

router.route('/').post(createProfile)

router.route('/:id').patch(updateProfile)

module.exports = router
