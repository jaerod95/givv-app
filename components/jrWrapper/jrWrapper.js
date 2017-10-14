// @flow
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class JrWrapper extends React.Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  }
});
