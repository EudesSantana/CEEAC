import { statusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View styles={styles.container}>
      <statusBar hidden />

      <Image source={require('./assests/img.jpg')}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '###',
    alignItems: 'center',
    justifyContent: 'center',
  },
});