import React,{useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home'
import Input from '../components/Input';
import Details from '../components/Details';
const Stack = createNativeStackNavigator();

function HomeStackNavigation(){
    return (
      <Stack.Navigator  
        screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Home'
      >
        <Stack.Screen name="Homes" component={Home} />
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>

    )
  }
  
  export default HomeStackNavigation;
  