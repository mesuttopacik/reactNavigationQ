import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';

export default class TestListHeader extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text>Güncel Bilgiler - Test Listesi</Text>
        <Image
          style={{width: 50, height: 30}}
          source={require('../Images/qa.png')}
        />
      </View>
    );
  }
}
