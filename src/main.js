let database = firebase.database();

firebase.database().ref('/articles').once('value').then(function(snapshot) {
    let articles = snapshot.val();
    console.log(articles);

    var app = new Vue({
        el: '#app',
        data: {
          message: 'Go Team Haribo!',
          articles,
        }
      })
});
