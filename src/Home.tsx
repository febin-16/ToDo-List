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
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
type ItemProps = {task: string};
const Item = ({task,index,navigation}: ItemProps) => {
  const [color,setColor] = useState('Incomplete');
  const [status,setStatus] = useState('lightblue');
  return(
    
    <View style={{display:'flex',flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Input',[task,])} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'lightblue',borderRadius:10,marginBottom:10,width:250}}>
        <Text style={{fontSize:30}}>{task}</Text>  
        </TouchableOpacity >
        <TouchableOpacity onPress={()=>{setColor((color)=>{
            if(color==('lightblue'))
            {
            setStatus('Complete')      
            return 'lightgreen'
            }  
            else
            {
            setStatus('Incomplete')      
            return 'lightblue'  
            }  
            })}}>
            {

            status.localeCompare('Complete')?
                <Icon style={{paddingLeft:20}} name="check" size={60} color="red" />
            :
                <Icon style={{paddingLeft:20}} name="check" size={60} color="lightgreen" />    
            }
        </TouchableOpacity>
    </View>
  );
  };

function Home({navigation}): JSX.Element {
  const [list,addList] = useState([]);
  const [input,setInput] = useState(null);
  const [deadline,setDeadline] = useState(null);
  const handleInputChange = (text) => {
    setInput(text);
  };
  const handleDeadlineChange = (text) => {
    setDeadline(text);
  };
  return (
    <View style={styles.container}>
       <LinearGradient colors={['#CDB4DB', 'lightblue']} style={styles.gradient}>
          <Text style={{fontSize:30,paddingTop:10,textAlign:'center',paddingBottom:10}}>ToDo List</Text>
          <View>
            <Text>ENTER THE TASK</Text>
            <TextInput style={{width:300,height:50,backgroundColor:'white',borderColor:'white',borderWidth:2,borderRadius:10,marginVertical:10}} onChangeText={handleInputChange}></TextInput> 
            <Text>ENTER THE DEADLINE</Text>
            <TextInput style={{width:300,height:50,backgroundColor:'white',borderColor:'white',borderWidth:2,borderRadius:10,marginVertical:10}} onChangeText={handleDeadlineChange}></TextInput>
          </View>
          <View style={{width:350,height:390,borderWidth:2,borderRadius:10,marginTop:10,display:'flex'}}>
            {
              list.length?
              <View style={{padding:10}}>
                {
                  <FlatList
                    style={{display:'flex',flexDirection:'column'}}
                    keyExtractor={(item,index)=>index.toString()} 
                    data={list}
                    renderItem={({item,index})=><Item navigation={navigation}  task={item}/>}                 
                  />
                } 
              </View>
              :
              <Text style={{fontSize:30,alignSelf:'center',paddingTop:150}}>LIST IS EMPTY :)</Text>
            }
          </View>
          <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={styles.footer} onPress={()=>{addList(()=>{
                if(input!=null)
                {
                  return [...list,input];
                }
                else
                  return [];
              })}}>  
                <View>
                  <Icon name="plus" size={60} color="lightblue" />
                </View>
              </TouchableOpacity>
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

export default Home;
