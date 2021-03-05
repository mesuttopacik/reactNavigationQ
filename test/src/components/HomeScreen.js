import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Deneme from './Deneme'

export default class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.contanier}>
        <Text>home</Text>
        <Button title = "guncel"
        onPress = {()=> navigate('Guncel')}
        />
        <Button title = "Tarih"
        onPress = {()=> navigate('Tarih')}
        />
        <Deneme />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
