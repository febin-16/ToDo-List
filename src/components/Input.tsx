import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [input,setInput] = useState(null);
  const [deadline,setDeadline] = useState(null);
  const handleInputChange = (text) => {
    setInput(text);
  };
  const handleDeadlineChange = (text) => {
    setDeadline(text);
  };
  const handleList = async () =>{
    const list = {task:input,deadline:deadline,status:'Incomplete'};
    const data = await AsyncStorage.getItem('list');
    let dataa=[];
    if(data!=null)
       dataa= JSON.parse(data);
    dataa=[...dataa,list]
    const jsondata = JSON.stringify(dataa)
    await AsyncStorage.setItem('list',jsondata)
    navigation.navigate('Homes')
    }
  return (
    <View style={styles.container}>
       <LinearGradient colors={['#CDB4DB', 'lightblue']} style={styles.gradient}>
       <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <View style={{paddingTop:80}}>
              <Text>ENTER THE TASK</Text>
              <TextInput style={{width:300,height:50,backgroundColor:'white',borderColor:'white',borderWidth:2,borderRadius:10,marginVertical:10}} onChangeText={handleInputChange}></TextInput> 
              <Text>ENTER THE DEADLINE</Text>
              <TextInput style={{width:300,height:50,backgroundColor:'white',borderColor:'white',borderWidth:2,borderRadius:10,marginVertical:10}} onChangeText={handleDeadlineChange}></TextInput>
              <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={styles.footer} onPress={handleList}>  
                  <View>
                    <Icon name="plus" size={60} color="lightblue" />
                  </View>
              </TouchableOpacity>
              </View>  
            </View>
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