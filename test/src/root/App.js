import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import Guncel from '../components/Guncel';
import Tarih from '../components/Tarih';
import Quiz from '../components/QuizD';

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
