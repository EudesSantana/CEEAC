import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu primeiro app</Text>

      <view>
        <text>React native</text>
        <text> Criando aplicativos para android e IOS</text>
      </view>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#2A2A2A',
   justifyContent: 'center',
   alignItems: 'center',
  },
  title: { 
    color: '#fff'
  }
});
