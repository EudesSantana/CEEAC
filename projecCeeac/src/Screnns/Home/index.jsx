
//React
import React from 'react'

import {View,
        StyleSheet,
        TouchableOpacity
    } from 'react-native';

//componets
import { StatusBar } from 'expo-status-bar';
import Header from '../../componets/Header';


//css
import './index.css';




export function Home(){
    return( // name 
        <View> 
            <StatusBar style="light" /> 
            <Header name='Eudes'/> 
            <View style={styles.home}>
            <TouchableOpacity style={styles.button}>Inscreva-se</TouchableOpacity>
            <TouchableOpacity style={styles.button}>Minhas aulas</TouchableOpacity>
            <TouchableOpacity style={styles.button}>Consultar</TouchableOpacity>
          
            </View>
            
        </View>
    )
}


//CSS
const styles=StyleSheet.create({
    home:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        backgroundColor:'#1646a0',
        color: '#fff',
        padding: '0 45px',
        border: '4spx solid #fff',
        borderRadius: '25px',
        height: '60px',
        width:'40%',
        marginBottom:'50px',
        fontWeight: 'normal',
        fontSize: '1.2em',
        cursor: 'pointer',
        transition: '0.1s',    
        justifyContent:'center',
        alignItems:'center',
    },
})