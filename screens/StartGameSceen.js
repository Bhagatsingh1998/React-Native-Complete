import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
//
import Card from "../components/Card";

export default function StartGameSceen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen</Text>
      <Card style={styles.inputContainer}>
        {/* <View style={styles.inputContainer}> */}
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.btnContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
        {/* </View> */}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    // no need, we using card comp.
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.26,
    // shadowRadius: 6,
    // backgroundColor: "white",
    // elevation: 15,
    // padding: 15,
    // borderRadius: 10,
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 15,
  },
});
