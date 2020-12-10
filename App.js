import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// we are getting our desired design but by using inline style which is not good
export default function App() {
  return (
    <View style={styles.sreen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View>{/* List of goals */}</View>
    </View>
  );
}

// thus, using a StyleSheet object provided by RN.
// we can even craete our own js object for style but StyleSheet object also do performance optimization and it also dectects incorrect styling

const styles = StyleSheet.create({
  // creating nested objcts for style
  sreen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 3,
    padding: 10,
    width: "80%",
  },
});
