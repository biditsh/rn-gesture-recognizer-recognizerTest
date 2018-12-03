<!-- # React Native Draw
React native draw tool using react-native-svg.

[![rn-draw.gif](https://s1.gifyu.com/images/rn-draw.gif)](https://gifyu.com/image/pLIr) -->

# React Native Gesture Recognizer
A React Native gesture recognition trainer/recognizer, built off of the [rn-draw package](https://github.com/jayeszee/rn-draw).

# Installation

### Non-Expo Applications
If you are **not** using expo for your development, install [react-native-svg](https://github.com/react-native-community/react-native-svg) via `npm install --save react-native-svg`.

Then, install rn-gesture-recognizer with `npm install --save rn-gesture-recognizer`.

### Expo Applications
Make sure you follow the proper guidelines on https://expo.io to set up your react native application with expo sdk.

Install rn-draw with `npm install --save rn-gesture-recognizer`.

### Compatibility
expo version <= 21 or react native <= 48 w/ react 16 alpha 12 --- rn-draw@0.0.4

expo version = 22 or react native = 49 w/ react 16 beta 5 --- >= rn-draw@0.0.5



# How to use the Trainer
The **Trainer** component is used to help you generate the custom gestures you would like the **Recognizer** component to be able to recognize. The Trainer uses `react-native-fs` to write the `gestureClasses.json` file to your project directory, which you will import as a prop to the Recognizer component later on.

```javascript
import {Trainer} from 'rn-gesture-recognizer';

<Trainer
  strokes={[]}
  // containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
  // color={'#000000'}
  // strokeWidth={4}
  // onChangeStrokes={(strokes) => console.log(strokes)}
/>
```

### Props
**strokes** [Array] - set with some initial data. (defaults to [])

**containerStyle** [Object] - style for the container of the draw component.

**color** [String] - string representation of pen color (defaults to '#000000')

<!-- **strokeWidth** [Number] - width of pen strokes (defaults to 4) -->

<!-- **rewind** [Func] - a function for passing the draw component's undo functionality

**clear** [Func] - a function for passing the draw component's clear functionality -->

<!-- **onChangeStrokes** [Func] - callback that is called when the draw changes. -->

# How to use the Recognizer
The **Recognizer** component is built to use the `gestureClasses.json` data file to recognize user input. It handles much the same as the Trainer component, but has more props to allow for developer customization.

```javascript
import {Recognizer} from 'rn-gesture-recognizer';
let gestureClassData = require('./gestureClasses.json'); // <- default location of the gesture class data, as exported from the Trainer component

<Recognizer
  strokes={[]}
  containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
  color={'#000000'}
  strokeWidth={4}
  gestureClasses={gestureClassData}
  // onChangeStrokes={(strokes) => console.log(strokes)}
/>
```