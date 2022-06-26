import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card}>
      <Text styles={styles.title}>bem vindo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
   flex: 1,
   backgroundColor: '#2A2A2A',
   justifyContent: 'center',
   alignItems: 'center',
  },
  title: { 
    color: '#fff',
    backgroundColor: '#fff'
  }
});
