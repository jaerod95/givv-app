// @flow
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../../libraries/Colors";

export default class SelectionView extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.sectionWrapper, styles.green]}>
          <Button
            style={styles.button}
            color={Colors.white}
            onPress={() => navigate("Charity")}
            title="Charity"
          />
        </View>
        <View style={[styles.sectionWrapper, styles.blue]}>
          <Button
            style={styles.button}
            color={Colors.white}
            onPress={() => navigate("RootViewBusiness")}
            title="Business"
          />
        </View>
        <View style={[styles.sectionWrapper, styles.yellow]}>
          <Button
            style={styles.button}
            color={Colors.black}
            onPress={() => navigate("RootViewEmployee")}
            title="Employee"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  sectionWrapper: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    flex: 1,
    color: Colors.white
  },
  blue: {
    backgroundColor: Colors.main
  },
  green: {
    backgroundColor: Colors.green
  },
  yellow: {
    backgroundColor: Colors.yellow
  }
});
