// @flow
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { login } from "../../libraries/Auth";
import * as firebase from "firebase";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "jason.eli.rodriguez@gmail.com",
    password: ""
  };

  render() {
    const { navigate } = this.props.navigation;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("authenticated");
        navigate("Selection");
      } else {
        console.log("NO USER");
      }
    });
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            style={formStyles.container}
            placeholder="Email"
            onChangeText={text => {
              this.state.email = text;
            }}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={formStyles.container}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => {
              this.state.password = text;
            }}
          />
        </View>
        <Button
          onPress={() => login(this.state.email, this.state.password)}
          title="Login"
        />
      </View>
    );
  }
}

const formStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ababab",
    borderRadius: 10,
    marginBottom: 5,
    flex: 0.75
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: "#FFFFFF",
    alignItems: "center"
  },
  row: {
    flexDirection: "row"
  }
});
