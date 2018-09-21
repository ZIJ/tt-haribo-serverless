const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const deviceTokens = [
    'da3iOsvPgGw:APA91bFQHAu-Q5iXJ4m3HIDXyhd-R2NIG3mmyYK8wG9SC25np3PSV4QUPWBdm6QNYxe3-cg54v4Uo6xtP_xMeFQMXidgVBrcQvy7m9xZQelBSg_TwZ309BN5IuqJszLFI-x1nrJO08LX'
];

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.sendVoteNotification = functions.database.ref('/article_votes/{voteId}')
    .onWrite((change, context) => {
        let messagePayload = {
            notification: {
                title: 'True or False?',
                body: 'What do you think…'
            }
        };
        let messageOptions = {
            content_available : true,
            mutable_content: true,
            priority : 'high'
        };
        admin.messaging().sendToDevice(deviceTokens, messagePayload, messageOptions).then((response) => {
            console.log(response);
        })
});
