import { statusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View styles={styles.container}>
      <statusBar hidden />

    </View>
  );
}

const styles = styleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '###',
    alignItems: 'center',
    justifyContent: 'center',
  },
});