import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '2021 Güncel KPSS Uygulaması',
    headerStyle: {
      backgroundColor: '#FE8938',
      // textAlign: 'center',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      textAlign: 'center',
    },
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.contanier}>
        <View style={styles.headBackground} />
        <View>
          <Text style={styles.lg}> MST </Text>
          <Text style={styles.lgd}> Mesut Eğitim Kurumları </Text>
        </View>
        <View style={styles.explain}>
          <Text>
            Bu uygulama KPSS güncel test soruları içeren bir beta sürümdür.
            Yapılış amacı react-native uygulama pratiğinden başka birşey
            değildir. Yinede uygulamayı indiren arkadaşların faydalanabilmesi
            için 100 adet KPSS güncel sorusu içermektedir.
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
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#B31E3B',
    // height: 600,
    // width: 600,
    borderRadius: 2,
  },
  lg: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  lgd: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  myButton: {
    backgroundColor: '#FE8938',
    fontWeight: 'bold',
    color: 'red',
    // margin: 60,
    padding: 40,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 60,
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
    // borderWidth: 2,
    // borderColor: '#FE8938',
    borderRadius: 8,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
  },
});
