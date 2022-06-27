import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);

 

  return(
    <SafeAreaView>
    <form onSubmit = { handleSubmit(onSubmit)} >
      <input name="Email"  ref = { register({ required: true, maxLength: 20 }) } />
        <input name="Password" ref = { register({ maxLength: 20 }) } />
        <input type="submit" />
    </form>
    </SafeAreaView>
  )

}
