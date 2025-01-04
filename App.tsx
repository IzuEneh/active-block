/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import AppBlocker from './specs/AppBlockerNativeComponent';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Blocklists</Text>
      <View style={styles.blocklistContainer} />
      <AppBlocker style={styles.appBlocker} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  appBlocker: {
    height: 50,
    width: '100%',
  },
  blocklistContainer: {
    flex: 1,
  },
});

export default App;
