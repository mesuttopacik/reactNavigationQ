import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class InTestHeader extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 20, height: 25}}
          source={require('../Images/arrow.png')}
        />
        <Image
          style={{width: 25, height: 25}}
          source={require('../Images/q.png')}
        />
      </View>
    );
  }
}
