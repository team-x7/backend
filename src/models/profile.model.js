const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
  {
    uid: String,
    role: {
      type: String,
      enum: ['farmer', 'distributer', 'supplier', 'seller', 'admin'],
    },
    contact: {
      mobile: String,
      telephone: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('profiles', profileSchema)
