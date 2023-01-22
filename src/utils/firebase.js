const firebase = require('firebase-admin')
const credentials = require('../../firebase_cred.json')

const firebaseAdmin = firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
})

module.exports = firebaseAdmin
