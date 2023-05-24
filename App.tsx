/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React,{useState} from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';
function App(): JSX.Element {
  return (
    <StackNavigation/>
    // <DrawerNavigation/>

  );
}



export default App;
