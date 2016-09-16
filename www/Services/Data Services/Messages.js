var Firebase = require('firebase');
var Messages = function (Modals, Comments, Likes) {

    this.sendPost = function (newData, binary) {

        if (binary.length > 0) {

            var storageRef = Firebase.storage().ref();
            binary.map(function (item) {
                var childRef = storageRef.child(item.name);
                childRef.put(item.binary);
            });
        }

        var newPostKey = Firebase.database().ref().child('Comunicazioni').push().key;
        var updates = {};
        updates['/Comunicazioni/' + newPostKey] = newData;
        Firebase.database().ref().update(updates)
            .then(function () {
                Modals.ResultTemplate("Comunicazione Pubblicata con Successo");
            })
            .catch(function () {
                Modals.ResultTemplate("Errore nella Pubblicazione della Comunicazione");
            })
    };

    this.getPosts = function (scope, state, spinner) {

        var storage = Firebase.storage();
        var self = this;
        document.getElementById(spinner).style.display = 'block';

        var ModelRef = Firebase.database().ref('Comunicazioni');
        ModelRef.on('value', function (snapshot) {
            var results = snapshot.val();
            var posts = [];

            if (results != null) {
                Object.keys(results).map(function (item, i) {

                    var files = [];

                    if (results[item].files != undefined) {

                        results[item].files.map(function (file, j) {
                            var stRef = storage.ref();
                            stRef.child(file).getDownloadURL().then(function (url) {
                                files.push({
                                    url: url,
                                    name: file
                                });

                                if (j == results[item].files.length - 1) {
                                    self.setPostProperties(results, files, state, posts, scope, item, i);
                                }

                            });
                        });
                    } else {
                        self.setPostProperties(results, files, state, posts, scope, item, i);
                    }
                });
            }

        });

    };

    this.setPostProperties = function (results, files, state, posts, scope, item, i) {


        posts[i] = {
            author: results[item].author,
            text: results[item].text,
            date: results[item].date,
            files: files,
            id: item,
            likeCount: 0,
            commentCount: 0,
            link: function (dest) {
                window.localStorage.setItem("currentPost", item);
                state.go(dest);
            },
            like: function () {
                Likes.checkLike(Firebase.auth().currentUser.displayName, item);
            }
        };

        Comments.getCommentCount(item, scope, posts, i);
    }

};

module.exports = Messages;

