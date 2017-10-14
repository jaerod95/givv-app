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
