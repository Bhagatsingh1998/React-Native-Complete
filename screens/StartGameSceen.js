import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Colors from "./../constants/colors";
//
import Input from "./../components/Input";

export default function StartGameSceen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        {/*  */}
        {/* <Input style={styles.input} /> */}

        {/* passing few extra props */}
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />

        <View style={styles.btnContainer}>
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
  //
  input: {
    width: 50,
    textAlign: "center",
  },
});
