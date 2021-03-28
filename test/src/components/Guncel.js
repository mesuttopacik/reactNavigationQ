import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// import {TestListHeader} from './TestListHeader';
import {QuizData} from '../guncelTestler/QuizData';
import TestListHeader from './TestListHeader';

export default class Guncel extends Component {
  static navigationOptions = {
    headerTitle: () => <TestListHeader />,
    // title: 'test listesi',
    // headerStyle: {
    //   // backgroundColor: '#FE8938',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
    // headerTitleStyle: {
    //   textAlign: 'center',
    //   flex: 1,
    // },
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.contanier}>
        <ScrollView>
          {/* <Text> burada küçük bir açılama küçük bir resim</Text> */}
          {/* <Button title="ana sayfa" onPress={() => navigate('Home')} /> */}

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g1,
                testName: '1. TEST',
              })
            }>
            <Text style={styles.text}>Test 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g2,
                testName: '2. TEST',
              })
            }>
            <Text style={styles.text}>Test 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g3,
                testName: '3. TEST',
              })
            }>
            <Text style={styles.text}>Test 3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g4,
                testName: '4. TEST',
              })
            }>
            <Text style={styles.text}>Test 4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g5,
                testName: '5. TEST',
              })
            }>
            <Text style={styles.text}>Test 5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g6,
                testName: '6. TEST',
              })
            }>
            <Text style={styles.text}>Test 6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g7,
                testName: '7. TEST',
              })
            }>
            <Text style={styles.text}>Test 7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g8,
                testName: '8. TEST',
              })
            }>
            <Text style={styles.text}>Test 8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g9,
                testName: '9. TEST',
              })
            }>
            <Text style={styles.text}>Test 9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g10,
                testName: '10. TEST',
              })
            }>
            <Text style={styles.text}>Test 10</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
  },
  button: {
    // flex: 0.05,
    paddingVertical: 20,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: '#4D5656',
    borderRadius: 8,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
  },
  text: {
    color: '#4D5656',
  },
});
