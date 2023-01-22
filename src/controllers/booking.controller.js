const BookingModel = require('../models/booking.model')

const catchAsync = require('../utils/catchAsync')

exports.createBooking = catchAsync(async (req, res, next) => {
  const booking = await BookingModel.create(req.body)
  res.json(booking)
})

exports.getAllBookings = catchAsync(async (req, res, next) => {
  const bookings = await BookingModel.find()
  res.json(bookings)
})

exports.getBooking = catchAsync(async (req, res, next) => {
  const booking = await BookingModel.findById(req.params.id)
  res.json(booking)
})

exports.updateBooking = catchAsync(async (req, res, next) => {
  const { datesHistory, ...restBody } = req.body

  const booking = await BookingModel.findByIdAndUpdate(
    req.params.id,
    restBody,
    { new: true }
  )
  res.json(booking)
})

exports.postPoneBooking = catchAsync(async (req, res, next) => {
  const booking = await BookingModel.findByIdAndUpdate(req.params.id, {
    status: 'postponed',
    $push: { datesHistory: req.body },
  })

  res.json(booking)
})

exports.cancelBooking = catchAsync(async (req, res, next) => {
  const booking = await BookingModel.findByIdAndUpdate(req.params.id, {
    status: 'cancelled',
  })
  res.json(booking)
})

exports.deleteBooking = catchAsync(async (req, res, next) => {
  await BookingModel.findByIdAndDelete(req.params.id)
  res.status(204).json()
})
