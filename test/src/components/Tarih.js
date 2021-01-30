import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class Tarih extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.contanier}>
        <Text> Tarih </Text>
        <Button title="ana sayfa" onPress={() => navigate('Home')} />
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
