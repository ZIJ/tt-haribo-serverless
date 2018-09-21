# Team Haribo back-end / web setup

### Components:
- Cloud Functions for handling push notifications
- Dummy web app that mimics Timeline

### Cloud functions
- sendVoteNotification - listens to write events in firebase and sends push notifications to target users to show the quiz
- [HelloWorld](https://us-central1-tictrac-haribo.cloudfunctions.net/helloWorld) - just a hello world :)

### Dummy [web app](https://tictrac-haribo.firebaseapp.com/)
Just reads the timeline of articles from Firebase :)


### Dev prerequisites:
- node.js 8+

### Dev setup:
```
git clone <...>
npm install
./node_modules/firebase-tools/bin/firebase login
```

### Deploy everything to firebase:
```
./node_modules/firebase-tools/bin/firebase deploy 
```

### Deploy functions only:
```
./node_modules/firebase-tools/bin/firebase deploy --only functions
```
