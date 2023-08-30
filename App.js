import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';


export default function App() {

  const [number, setNumber] = useState('');
  const arvattava = Math.floor(Math.random() * 100) + 1;
  console.log(arvattava);

  const guess = () => {
    arvaus = number;
    console.log(number);
    
    teksti= " ";
    if (arvaus == " ") {
      teksti = "Guess a number between 1-100"
    }
    if (arvaus < arvattava) {
      teksti = "Your guess " + arvaus + " is too low";
    } else if (arvaus > arvattava) {
      teksti = "Your guess " + arvaus + " is too high";
    }else {
      teksti = "You guessed the number in " + lkm + " guesses";
    }

  }

  return (
    <View style={styles.container}>
      <Text>{teksti}</Text>
      <TextInput style={styles.input} id='arvaus' onChangeText={number => setNumber(number)} value={number} keyboardType='number-pad'/>
      <Button onPress={guess} title="Make guess"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    marginTop:10,
    marginBottom: 10,
    width:150,
    borderColor: 'gray', 
    borderWidth: 1
  },
});
