// @flow
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Router from "../../routes/CharityRouter";

export default class CharityHome extends React.Component {
  render() {
    const { user, userData } = this.props.navigation.state.params;
    return <Router user={user} userData={userData} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
