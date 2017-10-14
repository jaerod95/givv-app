// @Flow
import * as firebase from "firebase";

export function getUser(uid) {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(`types/${uid}`)
      .once("value")
      .then(snapshot => {
        console.log(snapshot);
        console.log(snapshot.val());
        console.log(JSON.stringify(snapshot));
        if (snapshot.val()) {
          firebase
            .database()
            .ref(`${snapshot.val()}/${uid}`)
            .once("value")
            .then(snap => {
              if (snap.val()) {
                resolve(snap.val());
              } else {
                resolve({ type: snapshot.val() });
              }
            })
            .catch(err => {
              reject(err);
            });
        } else {
          resolve(snapshot.val());
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function setUserType(uid, type) {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(`types/${uid}`)
      .set(type)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
}
