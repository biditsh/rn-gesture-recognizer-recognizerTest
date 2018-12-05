import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Trainer} from 'rn-gesture-recognizer';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Trainer
          path={'/Users/bidit/Projects/trainerTest/'}
          strokes={[]}
          containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
          color={'#000000'}
          strokeWidth={4} 
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
