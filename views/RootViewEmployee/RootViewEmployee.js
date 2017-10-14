// @flow
import React from "react";
import { StyleSheet } from "react-native";
import Router from "../../routes/EmployeeRouter";

export default class RootViewEmployee extends React.Component {
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
