import Firebase from "firebase";
import Async from "async";

class Users {

    constructor(Modals) {

        this.GetUserData = (user, callback) => {

            const ModelRef = Firebase.database().ref("Utenti");
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();

                if (results != null) {
                    Object.keys(results).map(item=> {
                        if (results[item].mail.toLowerCase() == user.email) {
                            callback(results[item]);
                        }
                    });
                }
            });

        };

        this.setUserData = (oldMail, email, uid) => {
            const ModelRef = Firebase.database().ref("Utenti");
            ModelRef.once("value", snapshot => {
                const results = snapshot.val();

                if (results != null) {
                    Object.keys(results).map(item=> {
                        if (results[item].mail.toLowerCase() == oldMail) {
                            let updates = results[item];
                            updates.mail = email;
                            ModelRef.child(item).remove();
                            ModelRef.child(uid).update(updates);
                        }
                    });
                }
            });
        };

        this.Update = (user, email, displayName, password, callback) => {
            const oldMail = user.email;

            user.updateEmail(email).then(
                ()=> Async.parallel([
                        () => user.updateProfile({displayName}),
                        () => user.updatePassword(password),
                        () => this.setUserData(oldMail, email, user.uid)
                    ],
                    (err, results) => {
                        console.log(err);
                        callback(results);
                    }),
                error => Modals.ResultTemplate(error)
            );

        };

    }

}

export default Users;
