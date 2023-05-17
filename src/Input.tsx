import React,{useState} from 'react';
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
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
type ItemProps = {task: string};
function Input({navigation,route}): JSX.Element {
    console.log(route)
  return (
    <View style={styles.container}>
       <LinearGradient colors={['#CDB4DB', 'lightblue']} style={styles.gradient}>
       <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Text>
                {route.params}
              </Text>
          </View> 
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
    justifyContent:'space-between',
    alignItems:'center',
    padding:10
  },
  
  footer:{
    width:80,
    height:80,
    padding:10,
    borderRadius:80,
    backgroundColor:'cornflowerblue',
    display:'flex',
    alignItems:'center'
  }
});


export default Input;