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

export default class Guncel extends Component {
  static navigationOptions = {
    title: 'test listesi',
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
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g11,
                testName: '11. TEST',
              })
            }>
            <Text style={styles.text}>Test 11</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g12,
                testName: '12. TEST',
              })
            }>
            <Text style={styles.text}>Test 12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g13,
                testName: '13. TEST',
              })
            }>
            <Text style={styles.text}>Test 13</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g14,
                testName: '14. TEST',
              })
            }>
            <Text style={styles.text}>Test 14</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g15,
                testName: '15. TEST',
              })
            }>
            <Text style={styles.text}>Test 15</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g16,
                testName: '16. TEST',
              })
            }>
            <Text style={styles.text}>Test 16</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g17,
                testName: '17. TEST',
              })
            }>
            <Text style={styles.text}>Test 17</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g18,
                testName: '18. TEST',
              })
            }>
            <Text style={styles.text}>Test 18</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g19,
                testName: '19. TEST',
              })
            }>
            <Text style={styles.text}>Test 19</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Quiz', {
                testData: QuizData.g20,
                testName: '20. TEST',
              })
            }>
            <Text style={styles.text}>Test 20</Text>
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
  },
  text: {
    color: '#4D5656',
  },
});
