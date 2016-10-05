import Firebase from "firebase";

class Messages {

    constructor(Modals, Comments, Likes) {

        this.sendPost = (newData, binary) => {

            const newPostKey = Firebase.database().ref().child("Comunicazioni").push().key;

            if (binary.length > 0) {
                const storageRef = Firebase.storage().ref("Comunicazioni/" + newPostKey);
                binary.map(item => {
                    const childRef = storageRef.child(item.name);
                    childRef.put(item.binary);
                });
            }

            let updates = {};
            updates["/Comunicazioni/" + newPostKey] = newData;
            Firebase.database().ref().update(updates)
                .then(() => Modals.ResultTemplate("Comunicazione Pubblicata con Successo"))
                .catch(() => Modals.ResultTemplate("Errore nella Pubblicazione della Comunicazione"));
        };

        this.getPosts = (scope, rootScope, state, spinner) => {

            const storage = Firebase.storage();
            const self = this;
            document.getElementById(spinner).style.display = "block";
            scope.Posts = [];

            const ModelRef = Firebase.database().ref("Comunicazioni");
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();
                let posts = [];

                if (results != null) {
                    Object.keys(results).map((item, i) => {

                        const maxLength = Object.keys(results).length;
                        let files = [];

                        if (results[item].files != undefined) {

                            results[item].files.map((file, j) => {
                                const stRef = storage.ref("Comunicazioni/" + item);
                                stRef.child(file).getDownloadURL().then(url => {
                                    files.push({
                                        url,
                                        name: file
                                    });

                                    if (j == results[item].files.length - 1) {
                                        self.setPostProperties(results, files, state, posts, scope, rootScope, item, i, maxLength);
                                    }

                                });
                            });
                        } else {
                            self.setPostProperties(results, files, state, posts, scope, rootScope, item, i, maxLength);
                        }
                    });
                }

            });

        };

        this.setPostProperties = (results, files, state, posts, scope, rootScope, item, i, maxLength) => {

            posts[i] = {
                author: results[item].author,
                text: results[item].text,
                date: results[item].date,
                avatar: results[item].avatar,
                files: files,
                id: item,
                likeCount: 0,
                commentCount: 0,
                link(dest) {
                    rootScope.currentPost = item;
                    state.go(dest);
                },
                like() {
                    Likes.checkLike(Firebase.auth().currentUser.displayName, item);
                }
            };

            Comments.getCommentCount(item, scope, posts, i, results, maxLength);
        };
    }

}


export default Messages;


