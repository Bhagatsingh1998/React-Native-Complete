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
  // const [enteredGoal, setEnteredGoal] = React.useState("");

  

  const addGoalHandler = (goalTitle) => {
    setCourseGols((currentGoals) => [
      ...currentGoals,
      { value: goalTitle, uid: new Date().toISOString().toString() },
    ]);
  };

  return (
    <View style={styles.screen}>
      {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View> */}

      <GoalInput addGoalHandler={text => addGoalHandler(text)}/>
      
      <View>
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem title={itemData.item.value} />
          )}
        /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  // inputContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // input: {
  //   borderBottomColor: "black",
  //   borderBottomWidth: 1,
  //   marginBottom: 3,
  //   padding: 10,
  //   width: "80%",
  // },
});
