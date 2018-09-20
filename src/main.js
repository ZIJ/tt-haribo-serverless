let database = firebase.database();

firebase.database().ref('/test-message').once('value').then(function(snapshot) {
    let value = snapshot.val();
    document.querySelector("#target").innerHTML = value.toString();
});
