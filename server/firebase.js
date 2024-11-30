const admin = require("firebase-admin");
let serviceAccount;

try {
  // Tenta carregar do arquivo secreto (produção)
  serviceAccount = require("/etc/secrets/teste-roos-firebase-adminsdk.json");
} catch (e) {
  serviceAccount = require("./access-key/teste-roos-firebase-adminsdk.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teste-roos.firebaseio.com",
});

const db = admin.firestore();
module.exports = db;
