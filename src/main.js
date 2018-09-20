let database = firebase.database();

firebase.database().ref('/test-message').once('value').then(function(snapshot) {
    let test_data = snapshot.val();

    var app = new Vue({
        el: '#app',
        data: {
          message: 'Go Team Haribo!',
          test_data,
          articles: [1,2,3]
        }
      })
});
