import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/components/HomeScreen';
import Guncel from './src/components/Guncel';
import Tarih from './src/components/Tarih';
import Quiz from './src/components/QuizD';

export default class App extends React.Component {
  render() {
    return <AppContanier> </AppContanier>;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Tarih: {
    screen: Tarih,
  },
  Guncel: {
    screen: Guncel,
  },
  Quiz: {
    screen: Quiz,
  }
}, {
  initialRouteName: "Home"
});

const AppContanier = createAppContainer(AppNavigator);
