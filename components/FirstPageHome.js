import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';

export default class  FirstPageHome extends Component {
	state = {
	    location: null,
      count: 0,
      //currentLongitude: 'unknown',
      //currentLatitude: 'unknown',
	};
/*
	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = position.coords.latitude + ' \n' + position.coords.longitude;

				this.setState({ location });

        this.setState({count: this.state.count + 1})
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
  };
*/
 render() {
   return (
     <View style={styles.MainContainer}>
      <TouchableOpacity activeOpacity={0.5}
         onPress={() => Alert.alert('button pressed')}
         >
         <Image 
          source={require('../assets/man.png')} 
          style={{ height: 68, width: 65, margin: 0,  }} 
          />
         </TouchableOpacity>        

      <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
       onPress={() => this.props.navigation.navigate('VideoPlayPage')}
       >
         <Image 
          source={require('../assets/ask1.png')} 
          style={{ height: 68, width: 65, margin: 1,  }} 
          />
       </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
       //onPress= {FindCoordinates}
       onPress={() => this.props.navigation.navigate('SecondPage')}
        >
         <Image    
          source={require('../assets/forest1.png')} 
          style={styles.ImageIconStyle} 
          />
         <Text style={styles.TextStyle}>
           
         </Text>
         

        
       </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
       onPress={() => Alert.alert('4th button pressed')}
       >

         <Image 
          source={require('../assets/plant1.png')} 
          style={styles.ImageIconStyle} 
          />

         <Text style={styles.TextStyle}> 78 </Text>

       </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
       onPress={() => Alert.alert('4th button pressed')}
       >

         <Image 
          source={require('../assets/tree1.png')} 
          style={styles.ImageIconStyle} 
          />

         <Text style={styles.TextStyle}> 23.5 </Text>

       </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5}
        onPress={() => Alert.alert('4th button pressed')}
        >
         <Image 
          source={require('../assets/money1.png')} 
          style={styles.ImageIconStyle} 
          />
  
         <Text style={styles.TextStyle}> 356 </Text>

       </TouchableOpacity>

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

ButtonStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#d97102',
  borderColor: '#d97102',
  height: 70,
  borderRadius: 7,
  margin: 3,
  width: 280, 
  justifyContent: 'space-around',
  borderWidth: .5,

},

ImageIconStyle: {
   padding: 10,
   marginLeft: 85,
   height: 68,
   width: 65,
   resizeMode : 'stretch',
   
//borderWidth: .5,
//borderColor: 'red',
 
},

TextStyle :{
  color: "black",
  fontWeight: "bold",
  textAlign: 'right',
 // paddingTop: 40 , 
  //fontSize: ,
  //marginBottom : 4,
  //marginRight :20,
  //marginLeft :20,
   //padding: 1,
  //padding: 0,
  //borderWidth: .5,
  //borderColor: 'red',
},
 
});

 
 