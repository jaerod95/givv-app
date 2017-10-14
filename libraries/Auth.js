import * as firebase from "firebase";

export function login(email, password) {
  console.log(email);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(sucess => {
      //console.log(sucess);
    })
    .catch(err => {
      console.log(err);
    });
}

export function register(firstName, lastName, email, password) {
  console.log("email: ", email);
  console.log("password: ", password);
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
