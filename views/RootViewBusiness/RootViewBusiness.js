// @flow
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class RootViewBusiness extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Root View Business</Text>
        <Button
          onPress={() => navigate("RootViewEmployee")}
          title="Select me bro"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF0",
    alignItems: "center",
    justifyContent: "center"
  }
});
