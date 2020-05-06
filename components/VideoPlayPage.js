import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {  Video } from 'expo-av';

export default class VideoPlayPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
         source={require("../assets/video1.mp4")} 
         rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="contain"
          shouldPlay
          isLooping
          useNativeControls
          style={{ 
            width: "100%", 
            height: 400, 
          }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  }
});
