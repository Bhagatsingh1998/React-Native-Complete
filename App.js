import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [courseGoals, setCourseGols] = React.useState([]);
  const [enteredGoal, setEnteredGoal] = React.useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGols((currentGoals) => [...currentGoals, enteredGoal]);
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
        {/* {courseGoals.map((goal) => (
          // adding key property to prevent warrning 
          <Text key={goal}>{goal}</Text>
        ))} */}

        {/* 
          {courseGoals.map((goal) => (
            // we can style Text component also but its has options as compared to View component thus, warpping it with View.
            // As View is parent component, 'key' get applied to View

            <View key={goal} style={styles.listItem}>
              <Text >{goal}</Text>
            </View>
          ))} 
        */}

        {/* After adding certain amount of goals, list goals is going beyound the screen and we are not able to scroll unlike web page. hence using scrollView component */}
        {/* it has number of properties which we can add, like horizontal: scroll horizontally*/}
        {/* <ScrollView horizontal> */}
        
        <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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
  listItem: {
    padding: 10,
    backgroundColor: `#ccc`,
    borderColor: "black",
    borderWidth: 1,
    // eg of RN styles are like CSS but not exact CSS.
    // marginVertical will give margin on top an bottom.
    marginVertical: 10,
  },
});
