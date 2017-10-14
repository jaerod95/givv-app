// @flow
import React from "react";

import { StyleSheet, View } from "react-native";

import JrWrapper from "./components/jrWrapper/jrWrapper";

import Router from "./routes/Router";

export default class App extends React.Component {
  render() {
    return (
      <JrWrapper>
        <Router />
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
