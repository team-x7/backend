const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    contact: {
      phone: { type: String, required: [true, 'contact.phone is required'] },
      telephone: {
        type: String,
        required: [true, 'contact.telephone is required'],
      },
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
