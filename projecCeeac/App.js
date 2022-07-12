import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, alert} from 'react-native';
import Cadastro from '../templates/form.js';

export default function App() {

  const {email, setEmail} = useState('');
  const {senha, setSenha} = useState('');

  const login = () => {
    alert('funcionando');
    alert(email);
    alert(senha);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width:100,height:100}} source={require('./assests/prefeitura.jpg')}/> 

      <TextInput placeholder='Digite seu email' style={styles.textInput} onChargeText={text=>setEmail(text)}/> 
      <TextInput secureTextEntry={true } placeholder='Digite sua senha' style={styles.textInput} onChargeText={text=>setSenha(text)}/> 

      <TouchableOpacity style={styles.btnLogin} onPress={()=>login()}>
        <Text style={styles.btnText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
        <Text style={styles.btnText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },
  btnCadastro:{
    width: '100%',
    height: 30,
    backgroundColor: '#7b42f5',
    borderRadius: 20,
    justifyContent: 'center',
  },
  btnText:{
    color: '#fff',
    textAlign: 'center',
  }
});