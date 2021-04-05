import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card(props) {
  // return <View style={styles.card}>{props.children}</View>;

  // making card more flexible with designs
  // applying "...props.style" after "...styles.card" si that seprate components can override the style if they want.
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    // no every card will have these design, thus making more flexible
    // width: 300,
    // maxWidth: "80%",
    // alignItems: "center",

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
