import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStackNavigation from './HomeNavigation';
import Login from '../components/Login'
import DrawerNavigation from './DrawerNavigation';
import Home from '../components/Home';
const Stack = createNativeStackNavigator();
function StackNavigation(){
  const [page,setPage]=useState('')
  useEffect(()=>{
    async function getPage(){
      try
      {
        const user = await AsyncStorage.getItem('username');
        if(user!=null)
        {
          console.log(user)
          setPage('Home');
        }
        else
        {
          setPage('Login')
        }
      }
      catch(error)
      {
        console.error(error);
      }
    }
    getPage();
  },[page])
  return (
    <NavigationContainer>
    {page!=''&&<Stack.Navigator  
      screenOptions={{
      headerShown: false,
    }}
    initialRouteName={page}
    >
      <Stack.Screen name="Home" component={DrawerNavigation} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>}
  </NavigationContainer>
  )
}

export default StackNavigation;
