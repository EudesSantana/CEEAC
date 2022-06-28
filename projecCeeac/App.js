import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Alert, Button } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
    
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Insira seu email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Insira sua senha"
        keyboardType="numeric"
      />
      <Button style={styles.button}
        title="Entrar"
        onPress={() => Alert.alert('Button Ok')}
        
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
    container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    color: '2a2a2a'
  }
});

export default UselessTextInput;