import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
      <View style={styles.centered}>
      <Text 
        style={styles.container}>
        Bem vindo!
      </Text>
     <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Insira seu email"
        keyboardType="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Insira a senha"
        keyboardType="numeric"
      />
    </SafeAreaView>
    <Button
      color= '#000'
      title='Entrar'
      onPress={() => Alert.alert('Botao funcionando')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 12,
      alignContent: 'center',
      justifyContent: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4
  },
  centered: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
    
  },
});

export default UselessTextInput;
