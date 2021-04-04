import React, {useState} from "react";
// import { StyleSheet, View, FlatList } from "react-native";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGols] = React.useState([]);
  // setting state for modal
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGols((currentGoals) => [
      ...currentGoals,
      { value: goalTitle, uid: new Date().toISOString().toString() },
    ]);
  };

  const deleteHandler = (goalId) => {
    let updatedCourseGoals = courseGoals.filter(
      (course) => course.uid !== goalId
    );
    return setCourseGols(() => [...updatedCourseGoals]);
  };

  return (
    <View style={styles.screen}>
      {/*  */}
      <Button title="Add New Goal" onPress={() => setIsAddMode(true) } />
      {/* passing prop for modal */}
      <GoalInput visible={isAddMode} addGoalHandler={(text) => addGoalHandler(text)} />
      <View>
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              title={itemData.item.value}
              onDelete={() => deleteHandler(itemData.item.uid)}
            />
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
