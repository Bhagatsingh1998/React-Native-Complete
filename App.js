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

  const deleteHandler = goalId => {
    let updatedCourseGoals = courseGoals.filter(course => course.uid !== goalId)
    return setCourseGols(() => [...updatedCourseGoals]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={text => addGoalHandler(text)}/>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={(itemData) => (
            // <GoalItem title={itemData.item.value} onDelete={() => {console.log('clicked')}} />
            
            // 2.20
            <GoalItem title={itemData.item.value} onDelete={() => deleteHandler(itemData.item.uid)} />
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
});
