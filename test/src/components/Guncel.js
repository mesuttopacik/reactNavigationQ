import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class Guncel extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style = {styles.contanier}>
        <Text> güncel </Text>
        <Button title = "ana sayfa"
         onPress = {()=> navigate('Home')}
         />
            <Button title = "QuizData"
         onPress = {()=> navigate('Quiz', {
          testData: 'QuizData'
         })}
         />

         <Button title = "guncelTest1"
         onPress = {()=> navigate('Quiz', {
          testData: 'guncelTest1'
         })}
         />
         <Button title = "guncelTest2"
         onPress = {()=> navigate('Quiz', {
          testData: 'guncelTest2'
        })}
         />
         <Button title = "guncelTest3"
         onPress = {()=> navigate('Quiz', {
          testData: 'guncelTest3'
        })}
         />
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