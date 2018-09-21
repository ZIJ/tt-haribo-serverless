const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.sendVoteNotification = functions.database.ref('/article_votes/{voteId}')
    .onWrite((change, context) => {
        admin.messaging().send("Vote added").then((response) => {
            console.log(response);
        })
});
