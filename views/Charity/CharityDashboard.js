// @flow
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationActions } from "react-navigation";

export default class CharityDashboard extends React.Component {
  render() {
    console.log("LOL");
    console.log(this.props);
    const { navigate } = this.props.navigation;
    const { user, userData } = this.props.navigation.state.params;

    return (
      <View>
        <Text>
          User:{" " +
            JSON.stringify({
              uid: user.uid,
              display_name: user.display_name,
              email: user.email
            })}
        </Text>
        <Text>User data: {JSON.stringify(userData)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
