const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
  {
    uid: String,
    userType: {
      type: String,
      enum: ['farmer', 'distributer', 'supplier', 'seller'],
    },
    contact: {
      mobile: String,
      telephone: String,
    },
  },
  {}
)

module.exports = mongoose.model('profiles', profileSchema)
