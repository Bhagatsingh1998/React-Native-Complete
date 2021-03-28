import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
// 
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGols] = React.useState([]);
  const [enteredGoal, setEnteredGoal] = React.useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // restoring the data, adding key field
    setCourseGols((currentGoals) => [
      // ...currentGoals, enteredGoal
      ...currentGoals,
      // { value: enteredGoal, key: new Date().toISOString().toString() },
      { value: enteredGoal, uid: new Date().toISOString().toString() },
    ]);
  };

  return (
    <View style={styles.sreen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          //
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={(itemData) => (
            //
            // <View style={styles.listItem}>
            //   <Text>{itemData.item.value}</Text>
            // </View>

            // 
            // <GoalItem>{itemData.item.value}</GoalItem>

            <GoalItem title={itemData.item.value} />

          )}
        /> 
      </View>
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
  // listItem: {
  //   padding: 10,
  //   backgroundColor: `#ccc`,
  //   borderColor: "black",
  //   borderWidth: 1,
  //   marginVertical: 10,
  // },
});
