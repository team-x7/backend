const EventModel = require('../models/events.model')
const catchAsync = require('../utils/catchAsync')

exports.createEvent = catchAsync(async (req, res, next) => {
  const event = await EventModel.create(req.body)
  res.json(event)
})

exports.getAllEvents = catchAsync(async (req, res, next) => {
  const events = await EventModel.find()
  res.json(events)
})

exports.getEvent = catchAsync(async (req, res, next) => {
  const event = await EventModel.findById(req.params.id)
  res.json(event)
})
