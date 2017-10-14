// @flow
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class HomeView extends React.Component {
  state: {
    email: "",
    password: ""
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TextInput
          style={formStyles.container}
          placeholder="Email"
          onChangeText={email => {
            this.setState({ email });
          }}
        />
        <TextInput
          style={formStyles.container}
          placeholder="Password"
          onChangeText={password => {
            this.setState({ password });
          }}
        />
        <Button onPress={() => navigate("Selection")} title="Select me bro" />
        <Button
          onPress={() => navigate("Selection")}
          title="Create an Account"
        />
      </View>
    );
  }
}

const formStyles = StyleSheet.create({
  container: {
    width: 200,
    height: 50
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingTop: 30
  }
});
