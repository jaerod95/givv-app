// @flow
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Home View</Text>
        <Button onPress={() => navigate("Selection")} title="Select me bro" />
      </View>
    );
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
