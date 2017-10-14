// @flow
import React from "react";
import { StyleSheet } from "react-native";
import Router from "../../routes/AdminRouter";

export default class RootViewAdmin extends React.Component {
  render() {
    return <Router />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  }
});
