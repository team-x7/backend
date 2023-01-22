const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    contact: {
      phone: { type: String, required: [true, 'contact.phone is required'] },
      telephone: {
        type: String,
      },
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
    foodExpiryTime: Date,
    foodItems: [
      {
        name: String,
        image: String,
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model('events', eventSchema)
