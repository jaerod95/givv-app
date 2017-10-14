// @flow
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight
} from "react-native";
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
        <TouchableHighlight
          style={[styles.sectionWrapper, styles.green]}
          onPress={() => this.confirmSelection("Charity", navigate)}
        >
          <Text style={styles.button} color={Colors.white}>
            Charity
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.sectionWrapper, styles.blue]}
          onPress={() => this.confirmSelection("Business", navigate)}
        >
          <Text style={styles.button} color={Colors.white} title="Business">
            Business
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.sectionWrapper, styles.yellow]}
          onPress={() => this.confirmSelection("Employee")}
        >
          <Text style={styles.button} color={Colors.white}>
            Employee
          </Text>
        </TouchableHighlight>
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
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    color: Colors.white,
    justifyContent: "center",
    alignItems: "center"
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
