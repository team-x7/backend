const router = require('express').Router()

const { auth } = require('../middlewares/auth.middleware')
const {
  updateProfile,
  createProfile,
  getAllProfiles,
  getProfile,
} = require('../controllers/profile.controller')

router.get('/', getAllProfiles)
router.get('/:uid', getProfile)

router.use(auth)

router.route('/').post(createProfile)

router.route('/:uid').patch(updateProfile)

module.exports = router
