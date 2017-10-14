// @flow
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class RootViewAdmin extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Root View Admin</Text>
        <Button
          onPress={() => navigate("RootViewBusiness")}
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
