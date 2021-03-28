import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import Guncel from '../components/Guncel';
import Quiz from '../components/QuizD';

export default class App extends React.Component {
  render() {
    return <AppContanier />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Guncel: {
    screen: Guncel,
  },
  Quiz: {
    screen: Quiz,
  },
});

const AppContanier = createAppContainer(AppNavigator);
