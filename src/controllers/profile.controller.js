const ProfileModel = require('../models/profile.model')
const catchAsync = require('../utils/catchAsync')

exports.createProfile = catchAsync(async (req, res, next) => {
  const profile = await ProfileModel.create({ uid: req.firebaseUser.uid })
  res.jsob(profile)
})

exports.updateProfile = catchAsync(async (req, res, next) => {
  const profile = await ProfileModel.findOneAndDelete(
    { uuid: req.params.id },
    req.body,
    { new: true }
  )

  res.json(profile)
})
