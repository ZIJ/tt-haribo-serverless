const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.sendVoteNotification = functions.database.ref('/article_votes/{voteId}')
    .onWrite((change, context) => {
        admin.messaging().send("Vote added").then((response) => {
            console.log(response);
        })
});
