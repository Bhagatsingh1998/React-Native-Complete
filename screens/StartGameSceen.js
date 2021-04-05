import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function StartGameSceen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.btnContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
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


    // shadow property ONLY apply on iOS.
    // giving shadow : it takes 4 attributes : color, offset(takes an object, takes height and width), opacity(1: fully opaque), radius(how shapre the shawdow is)
    shadowColor: 'black',
    shadowOffset: {
      width: 0, height: 2
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: 'white',

    // to apply shadow on android, elevation property is used.
    elevation : 15,
    padding: 15,
    borderRadius: 10
  
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 15,
  },

 
});
