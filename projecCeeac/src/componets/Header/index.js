import React from "react";

import{
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

//icon
import {Feather} from '@expo/vector-icons'
//img
import BR from '../../img/BrasãoCarapicuiba.png'



//BARRA SUPERIOR EM ANDROID E IOS
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}){
    return(
        <View style={styles.container}>

            <View style={styles.content}>
                <View style={styles.logoUser}>
                <img src={BR}/>
                </View>
                <Text style={styles.nameUser}>Secretaria do Esporte e Lazerde Carapicuiba</Text>
                <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF"/>
                </TouchableOpacity>
            </View>
            <View style={styles.subTitulo}>
                <Text style={styles.subTitulo}> </Text>
            </View>
        </View>
    )
}




//CSS
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1646a0',
        paddingTop: StatusBarHeight,
        paddingEnd:16,
        paddingStart:16,
        paddingBottom:20,
    },
    content:{
        alignItems: 'center',
        flexDirection:'row',  
        justifyContent:'space-between'
    },
    nameUser:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold',
    },
    buttonUser:{
        width:44,
        height:44,
        backgroundColor:'rgba(255,255,255, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 44/2,
    },
    logoUser:{
        width:90,
        height:90,  
    },
    subTitulo:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold',
        alignItems:"center",
        justifyContent:"center",
        
    }

})