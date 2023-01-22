const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    contact: {
      phone: { type: String, required: [true, 'contact.phone is required'] },
      telephone: {
        type: String,
        required: [true, 'contact.telephone is required'],
      },
    },
    email: {
      type: String,
    },
    address: {
      state: {
        type: String,
        enum: ['Province 1'],
      },
      city: {
        type: String,
        required: [true, 'address.city is required'],
      },
      street: {
        type: String,
        required: [true, 'address.street is required'],
      },
      lat: {
        type: Number,
        required: [true, 'address.lat is required'],
      },
      long: {
        type: Number,
        required: [true, 'address.long is required'],
      },
    },
    datesHistory: [
      {
        date: { type: Date, required: [true, 'date is required'] },
        reason: String,
      },
    ],
    status: {
      type: String,
      enum: ['pending', 'success', 'cancelled', 'postponed'],
      default: '',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('bookings', bookingSchema)
