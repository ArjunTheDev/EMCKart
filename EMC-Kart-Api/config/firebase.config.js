const admin = require('firebase-admin');
require('dotenv').config();
const firebaseConfig = require("/home/arjun/Documents/firebase/serviceKey.json")

console.log("Firebase Connected..")
admin.initializeApp({
    credential : admin.credential.cert(firebaseConfig)
});
