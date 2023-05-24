import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Image,
    Platform,
    PermissionsAndroid,
  } from 'react-native';
var ImagePicker = require('react-native-image-picker');
import {launchCamera,CameraOptions, MediaType } from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Permissions from 'react-native-permissions';
function Profile({navigation}): JSX.Element {
    
    const [image, setImage] = useState<string | null>(null)
   function openCamera(){
    Permissions.request('camera').then(res => {
        switch (res) {
          case "authorized":
            /** 调用系统拍照功能 */
            ImagePicker.launchCamera({}, response => {
              if (response.didCancel) {
                // window.console.log('User cancelled image picker');
              }
              else if (response.error) {
                // window.console.log('ImagePicker Error: ', res.error);
              }
              else if (response.customButton) {
                // window.console.log('User tapped custom button: ', response.customButton);
              }
              else {
                   // if (ImageData.selectImgList.length < 4) {
                   // ImageData.selectImgList.push({
                   //     uri: response.uri,
                   //     isSelect: true,
                   //     filename: response.uri.slice(response.uri.lastIndexOf('/') + 1)
                   // })
                   // } else {
                   // bouncedUtils.toast.show({
                   //     content: '最多只能选择四张图片', type: 'warning'
                   // })
                   // }
              }
            })
            break;
        }
    })
   }

    
    const selectFile = async () => {

        const options = {
            mediaType: 'photo',
            quality: 1,
            allowsEditing: true,
            aspect: [1, 1],
        };
        ImagePicker.launchImageLibrary(options, async (selectedImage) => {
            if (selectedImage.didCancel) {
                console.log('User cancelled image picker');
            } else if (selectedImage.error) {
                console.log('ImagePicker Error: ', selectedImage.error);
            } else if (selectedImage.customButton) {
                console.log('User tapped custom button: ', selectedImage.customButton);
            } else {
                console.log(selectedImage)
                const source = { uri: selectedImage.assets[0].uri };
                setImage(source.uri);
                const response = await fetch(selectedImage.assets[0].uri);
                const filename = selectedImage.assets[0].uri.substring(selectedImage.assets[0].uri);
                console.log(`hey this is your url `, filename)
                try {
                    await AsyncStorage.setItem(
                      'profilepic',selectedImage.assets[0].uri
                    );
                } catch (error) {
                    console.error(error)
                  }    
            }
        });
    }

    useEffect(()=>{
        async function fetchProfilePic(){
            try{
                const url= await AsyncStorage.getItem('profilepic');

                if(url!=null)
                {
                    setImage(url)
                }
            }
            catch(error)
            {
                console.error(error);
            }
        }
        fetchProfilePic();
    },[])
  
  return (
    <View style={styles.container}>
       <LinearGradient colors={['#CDB4DB', 'lightblue']} style={styles.gradient}>
        <View >
            {image?<Image source={{ uri: image }} style={styles.image} />:
                    <Image source={require('../../assets/download.png')} style={styles.image} />
            }
        </View>
          <TouchableOpacity onPress={selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Upload From Gallery</Text>
          </TouchableOpacity>  
          <TouchableOpacity onPress={openCamera} style={styles.button}  >
              <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>     
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    padding:10
  },
  container: {
    flex: 1,
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:100,
    marginBottom:30
  },

});


export default Profile;