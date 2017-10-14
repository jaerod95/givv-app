// @flow
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class EmployeeRegisterOne extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is the employee RegisterOne</Text>
        <Button
          style={styles.button}
          onPress={() => navigate("SelectCharity")}
          title="To SELECT CHARITY VIEW"
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
