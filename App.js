// @flow
import React from "react";

import { StyleSheet, View } from "react-native";
import * as firebase from "firebase";
import JrWrapper from "./components/jrWrapper/jrWrapper";
import Router from "./routes/Router";

const config = {
  apiKey: "AIzaSyD7crPd6Rjh8j4VBE2s5rMj1SsRGEOuAJ8",
  authDomain: "givv-app-f3dec.firebaseapp.com",
  databaseURL: "https://givv-app-f3dec.firebaseio.com",
  projectId: "givv-app-f3dec",
  storageBucket: "givv-app-f3dec.appspot.com",
  messagingSenderId: "604410246273"
};

firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <JrWrapper>
        <Router firebase={firebase} />
      </JrWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFf",
    alignItems: "center",
    justifyContent: "center"
  }
});
