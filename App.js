// @flow
import React from "react";
import { StyleSheet } from "react-native";
import Router from "./routes/Router";

export default class App extends React.Component {
  render() {
    return <Router />;
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
