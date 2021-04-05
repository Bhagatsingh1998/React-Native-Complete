import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: "white",
    elevation: 15,
    padding: 15,
    borderRadius: 10,
  },
});
