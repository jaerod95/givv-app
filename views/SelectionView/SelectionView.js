// @flow
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Colors from "../../libraries/Colors";
import { setUserType } from "../../libraries/RTD";

export default class SelectionView extends React.Component {
  setTypeOfUser(type: string, uid: any, navigate: any) {
    console.log("YOLO");
    console.log(uid);
    setUserType(uid, type.toLowerCase()).then(() => {
      navigate(type);
    });
  }

  confirmSelection(type: string, navigate: any) {
    Alert.alert(
      type,
      "You are about to select to be a " + type,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            this.setTypeOfUser(
              type,
              this.props.navigation.state.params.user.uid,
              navigate
            );
          }
        }
      ],
      { cancelable: true }
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.sectionWrapper, styles.green]}>
          <Button
            style={styles.button}
            color={Colors.white}
            onPress={() => this.confirmSelection("Charity", navigate)}
            title="Charity"
          />
        </View>
        <View style={[styles.sectionWrapper, styles.blue]}>
          <Button
            style={styles.button}
            color={Colors.white}
            onPress={() => this.confirmSelection("Business", navigate)}
            title="Business"
          />
        </View>
        <View style={[styles.sectionWrapper, styles.yellow]}>
          <Button
            style={styles.button}
            color={Colors.white}
            onPress={() => this.confirmSelection("Employee")}
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
