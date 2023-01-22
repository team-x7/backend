const ProfileModel = require('../models/profile.model')
const catchAsync = require('../utils/catchAsync')

const firebaseAdmin = require('../utils/firebase')

exports.createProfile = catchAsync(async (req, res, next) => {
  const profile = await ProfileModel.create({ uid: req.firebaseUser.uid })

  firebaseAdmin.auth().setCustomUserClaims(req.firebaseUser.uid, {
    profileCreated: true,
  })
  res.json(profile)
})

exports.getAllProfiles = catchAsync(async (req, res, next) => {
  const profiles = await ProfileModel.find()
  res.json(profiles)
})

exports.getProfile = catchAsync(async (req, res, next) => {
  const profile = await ProfileModel.findOne({ uid: req.params.uid })
  res.json(profile)
})

exports.updateProfile = catchAsync(async (req, res, next) => {
  const profile = await ProfileModel.findOneAndDelete(
    { uid: req.params.uid },
    req.body,
    { new: true }
  )

  res.json(profile)
})
