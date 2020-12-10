import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 35}}>
      {/* inputbox and button shuould be side by side. RN uses flexbox */}
      {/* flexbox postion elements side by side or below one another. */}
      {/* justifycontent: align items to main axis. as flex direction is row, thus main axis is from L -> R. space-between: gives all empty space inbetween */}
      {/* cross axis: opposit of main axis. alignItem aligns across cross-axis */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        {/* can also set width in pixels */}
        <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 3, padding: 10, width: '80%'}} /> 
        <Button title="ADD" /> 
      </View>
      <View>
        {/* List of goals */}
      </View>
    </View>
  );
}
 