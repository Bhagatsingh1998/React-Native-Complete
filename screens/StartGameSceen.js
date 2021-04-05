import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StartGameSceen() {
  return (
    <View style={styles.screen}>
      <Text>Start Game Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    // here alignItems will align the itemsfrom left to right as 'View' bydefault uses flexbox an flexbox by default uses flexbox direction coloumn.
    alignItems: 'center',

  }
})