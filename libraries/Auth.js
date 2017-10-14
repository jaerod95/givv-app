import * as firebase from "firebase";

export function login(email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(sucess => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function register(firstName, lastName, email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      firebase
        .auth()
        .currentUser.updateProfile({ displayName: firstName + " " + lastName })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(err => {
      console.error(err);
    });
}
