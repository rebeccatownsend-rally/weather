import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import HomeScreen from './scripts/screens/Home';
import {colors} from './scripts/constants';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

export default App;
