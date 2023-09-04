import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';

let random;
let guesses;

export default function App() {

  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  
  const start = () => {
    setText('Guess a number between 1-100');
    guesses = 0;
    random = Math.floor(Math.random() * 100) + 1;
    console.log ('Secret:', random);
  }

  useEffect(() => {
    start();
  }, [])

  const guess = () => {
    arvaus = number;
    console.log(number);
    guesses++;

    if (arvaus == " ") {
      setText("Guess a number between 1-100")
    }
    if (arvaus < random) {
      setText("Your guess " + arvaus + " is too low");
      setNumber('');
    } else if (arvaus > random) {
      setText("Your guess " + arvaus + " is too high");
      setNumber('');
    }else {
      Alert.alert('You guessed the number ' + random + ' in ' + guesses + ' guesses!')
      setNumber('');
      start();
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <TextInput style={styles.input} onChangeText={text => setNumber(text)} value={number} keyboardType='number-pad'/>
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
    width:50,
    borderColor: 'gray', 
    borderWidth: 1
  },
});
