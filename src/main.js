let database = firebase.database();
let articleRef = database.ref('/articles');

let app = new Vue({
    el: '#app',
    firebase: {
        articles: articleRef
    },
    data: {
      message: 'Go Team Haribo!',
    }
});
