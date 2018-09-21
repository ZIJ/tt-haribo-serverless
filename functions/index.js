const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.sendVoteNotification = functions.database.ref('/article_votes/{voteId}')
    .onWrite((change, context) => {
        let messagePayload = {
            notification: {
                title: 'Vote added',
                body: 'No, seriously. Vote added!'
            }
        }
        admin.messaging().send(messagePayload).then((response) => {
            console.log(response);
        })
});
