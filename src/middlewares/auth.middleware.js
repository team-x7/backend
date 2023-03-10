const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/AppError')
const firebaseAdmin = require('../utils/firebase')
const ProfileModel = require('../models/profile.model')

exports.auth = catchAsync(async (req, res, next) => {
  let token

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    return next(new AppError(401, 'Not authorized to access this route'))
  }

  if (token) {
    const payload = await firebaseAdmin.auth().verifyIdToken(token)
    if (!payload.uid) return next(new AppError(404, 'User not found'))
    req.firebaseUser = payload
    // console.log(payload.);
  }

  next()
})

exports.access = (role) => {
  return catchAsync(async (req, res, next) => {
    const userProfile = await ProfileModel.findOne({
      uid: req.firebaseUser.uid,
    })

    if (userProfile.role !== role) {
      return next(
        new AppError(
          403,
          `${req.user.role} do not have permission to perform this action.`
        )
      )
    }

    next()
  })
}
