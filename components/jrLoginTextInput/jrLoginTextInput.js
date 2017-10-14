// @flow
import React from "react";
import { StyleSheet, View } from "react-native";

export default class JRLoginTextInput extends React.Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});
