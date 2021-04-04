import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = React.useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  // after adding the goal, clearing the textfiled value
  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button
          title="ADD"
          // 
          onPress={addGoalHandler}
        />
        {/*  */}
        <Button title="CANCLE" color="red" onPress={props.onCancle} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // 2.22
  // bydefault "View" takes space as much as its child component takes. hence, setting flex 1, so that it takes full size of screen.
  // modal takes full screen width and height.
  inputContainer: {
    // flex: 1,
    // or
    height : "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 3,
    padding: 10,
    width: "80%",
    // 
    marginBottom: 10
  },
});

export default GoalInput;
