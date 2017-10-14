// @flow
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import NavComponent from "../NavComponent/NavComponent";

export default class JrWrapper extends React.Component {
  render() {
    let nav = this.props.nav;

    return (
      <View style={styles.container}>
        <NavComponent nav={nav} />
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 35
  }
});
