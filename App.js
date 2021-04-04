import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // so that it takes full height and width of screen
    flex: 1,
  },
});
