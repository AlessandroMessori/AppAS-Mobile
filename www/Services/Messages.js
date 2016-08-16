var Messages = function () {

    this.sendPost = function (text) {

        var Message = new Parse.Object("Post");

        Message.set("text", text);
        Message.set("Writer", Parse.User.current().get("username"));
        Message.set("date", GetCurrentDate());

        Message.save(null, {
            success: function (Message) {
                alert('Post pubblicato con successo');
            },
            error: function (Message, error) {
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    };

    this.getPosts = function (win, state) {

        var Message = new Parse.Object("Post");
        var posts = [];
        var query = new Parse.Query(Message);
        query.find().then(
            function (results) {

                for (var i = 0; i < results.length; i++) {
                    posts[results.length - 1 - i] = {
                        name: results[i].get("Writer"),
                        text: results[i].get('text'),
                        date: results[i].get('date'),
                        objectId: results[i].id,
                        //commentsCount : GetCommentsCount(results[i].id),
                        link: function () {
                            win.localStorage.setItem("currentPost", this.objectId);
                            state.go("tab.comments");
                        }
                    };

                }

            }
        );

        return posts;
    };

};

module.exports = Messages;
