const {
  createEvent,
  getAllEvents,
  getEvent,
  deleteAll,
} = require('../controllers/events.controller')

const router = require('express').Router()

router.route('/').post(createEvent).get(getAllEvents)
router.route('/').delete(deleteAll)
router.route('/:id').get(getEvent)

module.exports = router
