import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
// can even write "colors" in lower case
import Colors from './../constants/colors';

export default function StartGameSceen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.btnContainer}>
          {/* giving same width to both the buttons, thus warpping them with View */}
          {/* <View style={styles.btn}><Button color="#c717fc" title="Reset" onPress={() => {}} /></View>
          <View style={styles.btn}><Button color="#f7287b" title="Confirm" onPress={() => {}} /></View> */}


          <View style={styles.btn}>
            <Button color={Colors.accent} title="Reset" onPress={() => {}} />
          </View>
          <View style={styles.btn}>
            <Button color={Colors.primary} title="Confirm" onPress={() => {}} />
          </View>
        </View>
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
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 15,
  },
  btn: {
    width: "40%",
  },
});
