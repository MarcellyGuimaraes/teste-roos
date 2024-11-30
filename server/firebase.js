const admin = require("firebase-admin");
const serviceAccount = require("./access-key/teste-roos-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teste-roos.firebaseio.com",
});

const db = admin.firestore();
module.exports = db;
