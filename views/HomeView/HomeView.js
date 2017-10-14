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
import { login, register } from "../../libraries/Auth";
import Colors from "../../libraries/Colors";
import * as firebase from "firebase";

// Custom form
import Form from "../../components/jrForm/jrForm";

export default class HomeView extends React.Component {
  state = {
    email: "",
    password: "",
    toggle: false,
    firstName: "",
    lastName: "",
    showLoginForm: true
  };

  toggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const { navigate } = this.props.navigation;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigate("Selection");
      }
    });

    return (
      <View style={styles.wrapper}>
        <Form
          onSubmit={state => {
            login(state.email, state.password);
          }}
          fields={[
            {
              type: "text",
              name: "email",
              text: "Email"
            },
            {
              type: "text",
              name: "password",
              text: "Password"
            }
          ]}
          visibleWhenTrue={this.state.showLoginForm}
        />
        <Form
          onSubmit={state => {
            register(
              state.firstName,
              state.lastName,
              state.email,
              state.password
            );
          }}
          fields={[
            {
              type: "text",
              name: "firstName",
              text: "First Name"
            },
            {
              type: "text",
              name: "lastName",
              text: "Last Name"
            },
            {
              type: "text",
              name: "email",
              text: "Email"
            },
            {
              type: "text",
              name: "password",
              text: "Password"
            }
          ]}
          visibleWhenTrue={!this.state.showLoginForm}
        />
        <Button
          title={this.state.showLoginForm ? "Create an account" : "Login"}
          onPress={() => {
            let toggle = !this.state.showLoginForm;
            this.setState({ showLoginForm: toggle });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 50
  }
});
