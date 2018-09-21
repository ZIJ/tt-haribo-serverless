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
                title: 'True or False?',
                body: 'What do you think…',
                content_available : true,
                mutable_content: true,
                priority : 'high'
            },
            topic: 'all'
        }
        admin.messaging().send(messagePayload).then((response) => {
            console.log(response);
        })
});
