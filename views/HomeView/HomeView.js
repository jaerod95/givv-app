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
import { getUser } from "../../libraries/RTD";
import Colors from "../../libraries/Colors";
import * as firebase from "firebase";

// Custom form
import Form from "../../components/jrForm/jrForm";

export default class HomeView extends React.Component {
  state = {
    email: "jason.eli.rodriguez@gmail.com",
    password: "happydays",
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
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        console.log("authenticated");
        getUser(user.uid).then(userData => {
          if (userData) {
            switch (userData.type) {
              case "charity":
                if (userData.isSetup) {
                  navigate("Charity", { user, userData });
                } else {
                  navigate("RegisterOne", { user, userData });
                }
                break;
              case "business":
                if (userData.isSetup) {
                  navigate("Business", { user, userData });
                } else {
                  navigate("RegisterOne", { user, userData });
                }
                break;
              case "employee":
                if (userData.isSetup) {
                  navigate("Employee", { user, userData });
                } else {
                  navigate("RegisterOne", { user, userData });
                }
                break;
            }
          } else {
            navigate("Selection", { user });
          }
        });
      } else {
        console.log("NO USER");
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
