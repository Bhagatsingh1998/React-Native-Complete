import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGols] = React.useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGols((currentGoals) => [
      ...currentGoals,
      { value: goalTitle, uid: new Date().toISOString().toString() },
    ]);
    // closing the modal after ading goal
    setIsAddMode(false);

    // we can have two or more state updates together, react will batch all the state change and the rerender the component and not individually.
  };

  // disappering the modal onpress of cancel button
  const cancelBtnHandler = () => {
    setIsAddMode(false);
  };

  const deleteHandler = (goalId) => {
    let updatedCourseGoals = courseGoals.filter(
      (course) => course.uid !== goalId
    );
    return setCourseGols(() => [...updatedCourseGoals]);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={(text) => addGoalHandler(text)}
        // 
        onCancle={cancelBtnHandler}
      />
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
