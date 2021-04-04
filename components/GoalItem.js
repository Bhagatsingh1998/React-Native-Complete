import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

const GoalItem = (props) => {
  return (
    // we lots of events such as onTouchEnd, onTouchStart but these are not detailed events which can tell how long it was touch, we had to use timer ie write extra code.
    // <View style={styles.listItem} onTouchEnd={...}>
    //   <Text>{props.title}</Text>
    // </View>

    // thus deal with standard touch events, we have seprate touchable components  Touchable, TouchableOpacity, etc
    // <Touchable >
    //   <View style={styles.listItem} >
    //     <Text>{props.title}</Text>
    //   </View>
    // </Touchable>

    // it makes touched element transparent for a second
    // activeOpacity: controlling how much it should be opaque whn pressed
    // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
    //   <View style={styles.listItem} >
    //     <Text>{props.title}</Text>
    //   </View>
    // </TouchableOpacity>

    // gives differnt effect when pressed  : hightlight the box
    // <TouchableHighlight underlayColor="#ccc" onPress={props.onDelete}>
    //   <View style={styles.listItem} >
    //     <Text>{props.title}</Text>
    //   </View>
    // </TouchableHighlight>

    // currently only works in android
    // it gives ripple effect
    // <TouchableNativeFeedback onPress={props.onDelete}>
    //   <View style={styles.listItem} >
    //     <Text>{props.title}</Text>
    //   </View>
    // </TouchableNativeFeedback>


    // no ripple, ie no visula effect
    // <TouchableWithoutFeedback onPress={props.onDelete}>
    //   <View style={styles.listItem}>
    //     <Text>{props.title}</Text>
    //   </View>
    // </TouchableWithoutFeedback>


    // 2.20
    // going with TouchableOpacity
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.listItem} >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: `#ccc`,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default GoalItem;
