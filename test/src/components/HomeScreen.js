import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '2021 GÜNCEL KPSS QUİZ UYGULAMA',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.contanier}>
        <View style={styles.explain}>
          <Text>
            Bu uygulama KPSS güncel test soruları içeren bir beta sürümdür.
            Yapılış amacı react-native uygulama pratiğinden başka birşey
            değildir. Yinede uygulamayı indiren arkadaşların faydalanabilmesi
            için 200 adet KPSS güncel sorusu içermektedir.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.myButton}
          onPress={() => navigate('Guncel')}>
          <Text style={styles.btnText}>BAŞLA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
  },
  myButton: {
    backgroundColor: '#FE8938',
    fontWeight: 'bold',
    color: 'red',
    // margin: 60,
    padding: 40,
    borderRadius: 40,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  explain: {
    padding: 10,
    margin: 40,
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: '#FE8938',
    borderRadius: 8,
  },
});
