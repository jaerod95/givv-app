// @flow
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class SelectionView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Selection View</Text>
        <Button onPress={() => navigate("Charity")} title="Charity" />
        <Button onPress={() => navigate("RootViewBusiness")} title="Business" />
        <Button onPress={() => navigate("RootViewEmployee")} title="Employee" />
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
