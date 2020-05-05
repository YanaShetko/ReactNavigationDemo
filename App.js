import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import FirstPageHome from './components/FirstPageHome';
import SecondPage from './components/SecondPage';
import VideoPlayPage from './components/VideoPlayPage';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: FirstPageHome
  },
  SecondPage: {
    screen: SecondPage
  },
   VideoPlayPage: {
    screen: VideoPlayPage
  }
});
//this container manages navigation state
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   // backgroundColor: 'black',
  },
});
