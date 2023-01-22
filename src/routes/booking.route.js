const {
  getAllBookings,
  createBooking,
  deleteBooking,
  updateBooking,
  getBooking,
  postPoneBooking,
  cancelBooking,
  updateStatus,
} = require('../controllers/booking.controller')
const { auth, access } = require('../middlewares/auth.middleware')

const router = require('express').Router()

// router.use(auth)

router.route('/').get(getAllBookings).post(createBooking)
router
  .route('/:id')
  .get(getBooking)
  .patch(updateBooking)
  .delete(access('admin'), deleteBooking)
router.patch('/postpone/:id', postPoneBooking, updateStatus)
router.patch('/cancel/:id', cancelBooking, updateStatus)

module.exports = router
