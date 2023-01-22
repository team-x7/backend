const router = require('express').Router()

const { auth } = require('../middlewares/auth.middleware')
const {
  updateProfile,
  createProfile,
  getAllProfiles,
} = require('../controllers/profile.controller')

router.get('/', getAllProfiles)

router.use(auth)

router.route('/').post(createProfile)

router.route('/:id').patch(updateProfile)

module.exports = router
