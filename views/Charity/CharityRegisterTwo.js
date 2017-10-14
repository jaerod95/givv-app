// @flow
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class CharityRegisterTwo extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is the charity RegisterTwo</Text>
        <Button
          style={styles.button}
          onPress={() => navigate("Home")}
          title="To Charity Home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  button: {}
});
