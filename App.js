// import React from 'react';
// // importing react as we are using JSX

// import { StatusBar } from 'expo-status-bar';
// // Text, View, Button : these are special components provided by react native that gets compiled to native plateform widgets and StyleSheet is an extra feature which helps with styling
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function App() {

//   return (
//     // a normal react component
//     // View : its like a 'div'
//     // Text: outputting some text 
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// ////////////////////////////////////////////////////////////////////////////////////////
// modifing

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// importing button
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('Open App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      {/* This is wrong, button should be self closing */}
      {/* <Button>Text</Button> */}
      {/* <Button title="Change Text" />   */}
      {/* when we clcik on the button, text should change. thus managing the state. with react 16.8+, we can use rect hooks in functional component */}

      {/* onPress: same as on click */}
      <Button title="Change Text" onPress={() => setOutputText('Text changed')} />    

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
