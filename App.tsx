/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppBlocker from './specs/AppBlockerNativeComponent';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>This is a demo app</Text>
      <AppBlocker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'blue',
  },
});

export default App;
