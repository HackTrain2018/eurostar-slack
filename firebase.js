const firebase = require('firebase-admin')
const credentials = require('./serviceAccountKey.json')
const databaseURL = 'https://sentirails.firebaseio.com'
const credential = firebase.credential.cert(credentials)
const collectionName = 'events'

firebase
.initializeApp({credential, databaseURL})
.firestore()
.collection(collectionName)
.onSnapshot(
  tweets =>
    tweets.forEach(tweet => {
      const {name, payload} = tweet.data()

      console.log(`Document name: ${name}`)
      console.log(`Document payload: ${payload}`)
    }),
  err => console.log(`Encountered error: ${err}!`)
)
