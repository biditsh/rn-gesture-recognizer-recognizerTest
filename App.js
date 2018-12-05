import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Recognizer} from 'rn-gesture-recognizer';

let gestureClassData = require('./gestureClasses.json'); 

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Recognizer
          strokes={[]}
          containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
          color={'#000000'}
          strokeWidth={4}
          // gestureClasses={gestureClassData}
          trainingData={gestureClassData}
          recognitionHandler = { (data) => {console.log(data)}}
          // onChangeStrokes={(strokes) => console.log(strokes)}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
