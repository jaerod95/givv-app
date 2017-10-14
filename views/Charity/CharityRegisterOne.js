// @flow
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class CharityRegisterOne extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is the charity RegisterOne</Text>
        <Button
          style={styles.button}
          onPress={() => navigate("RegisterTwo")}
          title="To Charity Register Two"
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
