// @flow
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default class ProfileView extends React.Component {
  static navigationOptions = {
    drawerLabel: "Profile"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Here is the profile</Text>
        <Button
          title="Toggle Drawer"
          onPress={() => this.props.navigation.navigate("DrawerToggle")}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
    alignItems: "center",
    paddingTop: 30
  }
});
