import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from '../navigation/DrawerNavigation';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

function Details({route}): JSX.Element {
    console.log(route.params[0]["deadline"]);
    return (
      <View style={styles.container}>
         <LinearGradient colors={['#CDB4DB', 'lightblue']} style={styles.gradient}>
            <Text style={{paddingTop:200}}>THE TASK</Text>
              <Text style={{width:300,height:50,backgroundColor:'white',borderColor:'white',borderWidth:2,borderRadius:10,marginVertical:10}} >
                {route.params[0]["task"]}</Text> 
              <Text>THE DEADLINE</Text>
              <Text style={{width:300,height:50,backgroundColor:'white',borderColor:'white',borderWidth:2,borderRadius:10,marginVertical:10}}>
                {route.params[0]["deadline"]}
              </Text>
        </LinearGradient>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    gradient: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      padding:10
    }
   
  });
  
  export default Details;