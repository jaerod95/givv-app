// @flow
import React from "react";
import { StyleSheet, View } from "react-native";

export default class JrTextInput extends React.Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ababab",
    borderRadius: 10,
    marginBottom: 5,
    flex: 0.75
  }
});
