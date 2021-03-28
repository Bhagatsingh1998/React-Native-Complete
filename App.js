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
        {/* ScrollView is good when number of items are limited in a list as it will render all the data which will be not seen on the screen. Thus scrollview is inefficinet for very long lists */}
        {/* for long list, FlatList component i used. Flat list takes 2 imp args. data: takes a array as data. renderItem: its a function which iterates over the data array one by one and render it. */}
        {/* in this, we dont have to pass key, as it expects staructured ata which will have key value in it */}
        {/* to access the value, '.item' is used on itemData  */}
        {/* <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item}</Text>
            </View>
          )}
        />  */}


        {/*our above array data is not strutctured ie, its not haveing any key value. Rearraging our data in array */}
        {/* <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />  */}

        {/* it maky happen that we dont use 'key' value in array, but instaed of it rename 'key' to 'uid'. at that time we have to tell Flatlist to take 'uid' value as key */}
        {/* FlatList has method ketExtrator which which extrats key name by default from an array of data */}
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
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
  listItem: {
    padding: 10,
    backgroundColor: `#ccc`,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
