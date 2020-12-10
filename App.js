import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    // giving some padding
    <View style={{padding: 35}}>
      <View>
        {/* 'black' is string here but color shortcuts are present which we can import */}
        {/* 'border-bottom-color' will work in css and js but will not work in RN. thus, have to follow perticular pattern. */}
        <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 3, padding: 10}} /> 
        <Button title="ADD" /> 
        {/* We can see ADD btn but not the inputbox.that is because inputbox is hidden as stausbar of mobile is overlaping it. Thus, using style to give some padding */}
      </View>
      <View>
        {/* List of goals */}
      </View>
    </View>
  );
}
 