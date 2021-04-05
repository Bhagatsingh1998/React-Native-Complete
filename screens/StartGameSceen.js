import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function StartGameSceen() {
  return (
    <View style={styles.screen}>
      
      <Text style={styles.title}>Start Game Screen</Text>
      {/* we want to have input field and buttons. and make it feel like these components are siting on card. */}

      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        {/* now 2 buttons, siting next to each other , thus another view comp */}
        <View style={styles.btnContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title : {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around', 
    padding: 15
  },
})