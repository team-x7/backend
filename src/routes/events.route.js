const {
  createEvent,
  getAllEvents,
  getEvent,
} = require('../controllers/events.controller')

const router = require('express').Router()

router.route('/').post(createEvent).get(getAllEvents)
router.route('/:id').get(getEvent)

module.exports = router
