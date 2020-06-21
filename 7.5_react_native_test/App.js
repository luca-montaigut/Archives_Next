import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  buttonCircle: {
    borderRadius: 30,
    width: '100%',
    padding: 20,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 35,
    textAlignVertical: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const App = () => {
  const [color, setColor] = useState('white');
  const [run, setRun] = useState(false)
  const [intervalID, setIntervalID] = useState('Go Crazy !')

  const setRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let colorize = '#';
    for (let i = 0; i < 6; i++) {
       colorize += letters[Math.floor(Math.random() * 16)];
     }
    setColor(colorize)
  }
    
  const crazyColor = () => { 
    setRun(true)
    setIntervalID(setInterval(() => { setRandomColor() }, 100));
  }

  const stop = () => { 
    clearInterval(intervalID) 
    setColor('white')
    setRun(false)
  }

  return (
      <View style={{height: "100%", backgroundColor: color, display: "flex", justifyContent: "center", alignItems: "center"}} >
        <View>
          {!run && 
            <TouchableOpacity style={[styles.buttonCircle, {backgroundColor: "darkslateblue"}]} onPress={crazyColor}>
              <Text style={styles.textButton, {color: "white"}}>GO CRAZY !</Text>
            </TouchableOpacity>
          }
          {run && 
            <TouchableOpacity style={[styles.buttonCircle, {backgroundColor: "white"}]} onPress={stop}>
              <Text style={styles.textButton, {color: "black"}}>OMG PLEASE STOP</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
  )
}

export default App;
