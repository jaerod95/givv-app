// @flow
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight
} from "react-native";
import { login } from "../../libraries/Auth";
import Colors from "../../libraries/Colors";
import * as firebase from "firebase";

export default class HomeView extends React.Component {
  state = {
    email: "",
    password: "",
    toggle: false,
    firstName: "",
    lastName: ""
  };

  toggle() {
    console.log("toggle ran");
    this.setState({ toggle: !this.state.toggle });
  }

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
      <View style={styles.wrapper}>
        <View style={[styles.wrapper, this.state.toggle && styles.hidden]}>
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
          <View style={styles.row}>
            <Text>Don't have an account? </Text>
            <TouchableHighlight
              style={styles.highlight}
              underlayColor="transparent"
              onPress={() => this.toggle()}
            >
              <Text style={styles.button}>Create an Account</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.wrapper, !this.state.toggle && styles.hidden]}>
          <View style={styles.row}>
            <TextInput
              style={formStyles.container}
              placeholder="First Name"
              onChangeText={text => {
                this.state.firstName = text;
              }}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              style={formStyles.container}
              placeholder="Last Name"
              onChangeText={text => {
                this.state.lastName = text;
              }}
            />
          </View>
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
            title="Create Account"
          />
          <View style={styles.row}>
            <Text>Already have an account? </Text>
            <TouchableHighlight
              style={styles.highlight}
              underlayColor="transparent"
              onPress={() => this.toggle()}
            >
              <Text style={styles.button}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
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
  wrapper: {
    flex: 1,
    height: 100,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50
  },
  container: {
    flex: 1,
    height: 100,
    backgroundColor: "#FFFFFF",
    alignItems: "center"
  },
  row: {
    flexDirection: "row"
  },
  button: {
    color: Colors.main
  },
  highlight: {
    backgroundColor: "transparent"
  },
  hidden: {
    display: "none"
  }
});
