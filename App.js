import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  // making the 'add' btn functional and displaying down
  const [courseGoals, setCourseGols] = React.useState([]);


  const [enteredGoal, setEnteredGoal] = React.useState("");
  // function goalInputHandler(enteredText) {
  //   setEnteredGoal(enteredText);
  // };
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // console.log(enteredGoal);
    // can give problems
    // setCourseGols([...courseGoals, enteredGoal]);

    setCourseGols(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.sreen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input}
          // 
          value={enteredGoal} 
          onChangeText={goalInputHandler} />
        <Button 
          title="ADD"
          onPress={addGoalHandler} /> 
      </View>
      <View>{/* List of goals */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
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
