import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStacknavigator, createAppContainer } from 'react-navigation';

export default class Homescreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                title="Go to about"
                onPress={() => this.props.navigation.navigate('About')}
                />
            </View>
        )
    }
}