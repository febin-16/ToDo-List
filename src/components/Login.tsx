import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View,
        Text,
        StyleSheet,
        TextInput,
        Button,
        Alert
      } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
function Login({navigation}){
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const handleInputChange = (text) => {
    setUserName(text);
  };
  const handleDeadlineChange = (text) => {
    setPassword(text);
  };
  const  handleLogin = async ()=>{
    try {
      await AsyncStorage.setItem(
        'username',userName
      );
      await AsyncStorage.setItem(
        'password',password
      );
      const list =[{}]
      const jsonlist = JSON.stringify(list);
      await AsyncStorage.setItem(
        'list',jsonlist
      );
      const user =await AsyncStorage.getItem('username')
      const pass =await AsyncStorage.getItem('password')
      if(user!= null && pass != null)
      {
        Alert.alert("Logged In")
        navigation.navigate('Home')
      }
      else
      {
        Alert.alert(
          'Invalid credentials',
          'Enter a valid username and password.',
          [
            {
              text: 'OK',
            },
          ]
        )  
      }

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View style={styles.container}>
    <LinearGradient colors={['#CDB4DB', 'lightblue']} style={styles.gradient}>
       <Text style={{fontSize:30,paddingTop:200,textAlign:'center',paddingBottom:30}}>ToDo List</Text>
       <View>
         <Text>ENTER THE USERNAME</Text>
         <TextInput style={{width:300,height:50,backgroundColor:'white',borderColor:'white',borderWidth:2,borderRadius:10,marginVertical:10}} onChangeText={handleInputChange}></TextInput> 
         <Text>ENTER THE PASSWORD</Text>
         <TextInput style={{width:300,height:50,backgroundColor:'white',borderColor:'white',borderWidth:2,borderRadius:10,marginVertical:20}} onChangeText={handleDeadlineChange}></TextInput>
         <View>
            <Button title='LOGIN'  onPress={handleLogin}/>
         </View>
       </View>  
   </LinearGradient>
 </View>
  )
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

export default Login;