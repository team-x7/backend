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
    location: {
      // GeoJSON Point
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
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
      default: 'pending',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('bookings', bookingSchema)
