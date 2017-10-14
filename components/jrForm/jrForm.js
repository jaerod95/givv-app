import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import Colors from "../../libraries/Colors";

export default class Form extends React.Component {
  styles = {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end"
    },
    row: {
      flexDirection: "row"
    },
    textInput: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: "#ababab",
      borderRadius: 10,
      marginBottom: 5,
      flex: 0.75
    },
    hidden: {
      display: "none"
    }
  };

  state = {
    shouldSubmit: false
  };

  // - this function will be run once everytime the state
  // is updated, esp. when text changes are made
  // - it will call the onSubmit prop once the form is submitted
  stateUpdated() {
    if (this.state.shouldSubmit) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    let textFields = [];

    if (this.props.fields) {
      for (var i = 0; i < this.props.fields.length; i++) {
        let fieldName = this.props.fields[i].name;
        let fieldText = this.props.fields[i].text;

        (function(i) {
          textFields.push(
            <View key={`${fieldName}-${fieldText}`} style={this.styles.row}>
              <TextInput
                ref={fieldName}
                style={this.styles.textInput}
                placeholder={fieldText}
                placeholderTextColor="#888"
                returnKeyType={i < this.props.fields.length - 1 ? "next" : "go"}
                onSubmitEditing={event => {
                  if (i < this.props.fields.length - 1) {
                    this.refs[this.props.fields[i + 1].name].focus();
                  } else if (i === this.props.fields.length - 1) {
                    this.setState({ shouldSubmit: true }, this.stateUpdated);
                  }
                }}
                onChangeText={text => {
                  let obj = {};
                  obj[fieldName] = text;
                  this.setState(obj, this.stateUpdated);
                }}
              />
            </View>
          );
        }.bind(this)(i));
      }
    }

    // <Text>Already have an account? </Text>
    // <TouchableHighlight
    //   style={styles.highlight}
    //   underlayColor="transparent"
    //   onPress={() => this.toggle()}
    // >
    //   <Text style={styles.button}>Login</Text>
    // </TouchableHighlight>

    return (
      <View
        style={[
          this.styles.container,
          !this.props.visibleWhenTrue && this.styles.hidden
        ]}
      >
        {textFields}
        <Button
          onPress={() => this.setState({ shouldSubmit: true })}
          title="Submit"
        />
      </View>
    );
  }
}
