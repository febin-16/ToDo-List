import 'react-native-gesture-handler';
import React,{useState} from 'react';
import {Button,Text,View,TouchableOpacity} from 'react-native';

import { createDrawerNavigator ,DrawerContentScrollView , DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../components/Home'
import Input from '../components/Input';
import Profile from '../components/Profile';
import HomeStackNavigation from './HomeNavigation';
function CustomDrawerContent({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared successfully');
    navigation.navigate('Login')
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView>
      <DrawerItem label="Homess" onPress={() => navigation.navigate('Homess')} />
      <DrawerItem label="Input" onPress={() => navigation.navigate('Input')} />
      <DrawerItem label="Profile" onPress={() => navigation.navigate('Profile')} />
      <View>
        <TouchableOpacity style={{paddingLeft:20,paddingTop:10}} onPress={handleLogout}>
          <Text style={{fontSize:15}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigation(){
  return (
        <Drawer.Navigator drawerContent={CustomDrawerContent}>
            <Drawer.Screen name="Homess" component={HomeStackNavigation} />
            <Drawer.Screen name="Input" component={Input} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>    
  )
}

export default DrawerNavigation;
