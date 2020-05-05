import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';

export default class  SecondPage extends Component {
  render() {
   
    return (
      <View style={styles.MainContainer}>
         <TouchableOpacity activeOpacity={0.5}
           onPress={() => Alert.alert('4th button pressed')}
           >
             <Image 
               source={require('../assets/man.png')} 
               style={{ height: 75, width: 65, marginBottom: 0}}  
             />
         </TouchableOpacity>       
 
         <View 
           style={styles.ViewButtons}
           >
               <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
                 onPress ={() => Alert.alert('4th button pressed')}
                 >
                   <Image 
                     source={require('../assets/pic1.png')} 
                    style={styles.ImageIconStyle} 
                    // style={{ height: 68, width: 65, margin: 1,  }} 
                   /> 
               </TouchableOpacity>
 
               <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
                 onPress={() => Alert.alert('4th button pressed')}
                 >
                   <Image 
                     source={require('../assets/pic2.png')} 
                     style={styles.ImageIconStyle} 
                   /> 
               </TouchableOpacity>
 
         </View>
 
         <View 
           style={styles.ViewButtons}
           >
               <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
                 onPress={() => Alert.alert('4th button pressed')}
                 >
                   <Image 
                     source={require('../assets/pic3.png')} 
                    style={styles.ImageIconStyle} 
                    // style={{ height: 68, width: 65, margin: 1,  }} 
                   /> 
               </TouchableOpacity>
 
               <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
                 onPress={() => Alert.alert('4th button pressed')}
                 >
                   <Image 
                     source={require('../assets/pic4.png')} 
                     style={styles.ImageIconStyle} 
                   /> 
               </TouchableOpacity>
 
         </View>
 
         <View 
           style={styles.ViewButtons}
           >
               <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
                 onPress={() => Alert.alert('4th button pressed')}
                 >
                   <Image 
                     source={require('../assets/pic5.png')} 
                    style={styles.ImageIconStyle} 
                    // style={{ height: 68, width: 65, margin: 1,  }} 
                   /> 
               </TouchableOpacity>
 
               <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
                 onPress={() => Alert.alert('4th button pressed')}
                 >
                   <Image 
                     source={require('../assets/pic6.png')} 
                     style={styles.ImageIconStyle} 
                   /> 
               </TouchableOpacity>
 
         </View>
 
 
      </View>
    );
  }
 }
 
 
 const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    backgroundColor: 'black',
 },
 
 ViewButtons: {
   flexDirection: 'row',
   alignItems: 'center',
 },
 
 ButtonStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#d97102',
   borderColor: '#d97102',
   height: 125,
   width: 125, 
   borderRadius: 14,
   margin: 13,
   justifyContent: 'space-around',
 },
 
 ImageIconStyle: {
    height: 70,
    width: 70,
    resizeMode : 'stretch',
 //borderWidth: .5,
 //borderColor: 'red',
 
 }, 
 });
 
  