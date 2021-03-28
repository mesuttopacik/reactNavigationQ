import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import InTestHeader from './InTestHeader';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: null,
      currentQuestion: 0,
      options: [],
      quizEnd: false,
      score: 0,
      empty: 0,
      wrong: 0,
    };
  }

  static navigationOptions = {
    headerTitle: () => <InTestHeader />,
  };
  nextquestion = () => {
    const {userAnswer, answer, score, empty, wrong} = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
    // console.log(this.state.currentQuestion);
    // console.log(userAnswer,answers)
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
        userAnswer: null,
      });
    } else if (userAnswer === null) {
      this.setState({
        empty: empty + 1,
        userAnswer: null,
      });
    } else {
      this.setState({
        wrong: wrong + 1,
        userAnswer: null,
      });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.loadQuiz();
      // eslint-disable-next-line react/no-did-update-set-state
    }
  }

  loadQuiz = () => {
    const {currentQuestion} = this.state;
    const {getParam} = this.props.navigation;
    const testData = getParam('testData');

    this.setState(() => {
      return {
        question: testData[currentQuestion].question,
        options: testData[currentQuestion].options,
        answer: testData[currentQuestion].answer,
      };
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
    });
  };

  finishHandler = () => {
    // console.log('sinav bitti skor table sayafası> ');
    const {userAnswer, answer, score, wrong, empty} = this.state;
    const {getParam} = this.props.navigation;
    const testData = getParam('testData');
    // this.whichTestData(g);
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    } else if (userAnswer === null) {
      this.setState({
        empty: empty + 1,
      });
    } else {
      this.setState({
        wrong: wrong + 1,
      });
    }
    if (this.state.currentQuestion === testData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };
  listOptions = () => {
    //console.log('soru seçeneklerini listele')
    const {options, userAnswer} = this.state;
    let i = 1;
    return options.map((option, i) => {
      i++;
      return (
        <View key={i} style={styles.optionsST}>
          <TouchableOpacity
            style={[
              styles.button,
              userAnswer === option ? styles.selected : null,
            ]}
            onPress={() => this.checkAnswer(option)}>
            <Text
              style={
                userAnswer === option ? styles.selected : styles.optionText
              }>
              {option}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  correctAnswerListHandler = ({item}) => {
    return (
      <View style={styles.resultPageQA}>
        <Text style={{color: '#040404', marginBottom: 5}}>{item.question}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.checkImage}
            source={require('../Images/checkMark.png')}></Image>
          <Text>{item.answer}</Text>
        </View>
      </View>
    );
  };
  render() {
    const {question, currentQuestion, quizEnd} = this.state;
    const {getParam, navigate} = this.props.navigation;
    const testData = getParam('testData');
    const testName = getParam('testName');
    if (quizEnd) {
      return (
        <View style={styles.resultPage}>
          <SafeAreaView style={styles.resultPageFlatlist}>
            <View style={styles.resultPageList}>
              <View style={styles.correctAnswerText}>
                <Text style={{color: '#F4F6F6'}}>
                  {testName} `İN SORULARI VE DOĞRU CEVAPLARI
                </Text>
              </View>

              <FlatList
                renderItem={this.correctAnswerListHandler}
                keyExtractor={(item) => item.id.toString()}
                data={testData}
              />
            </View>
          </SafeAreaView>

          <View style={styles.resultPageScore}>
            <Text style={styles.scoreText}>Doğru: {this.state.score}</Text>
            <Text style={styles.scoreText}>Yanlış: {this.state.wrong}</Text>
            <Text style={styles.scoreText}>Boş: {this.state.empty}</Text>
          </View>
          <TouchableOpacity
            style={styles.returnTestListButton}
            onPress={() => navigate('Guncel')}>
            <Image
              style={styles.checkImage}
              source={require('../Images/backBtn.jpg')}></Image>
            <Text style={styles.btnText}>Test Listitesine Dön</Text>
          </TouchableOpacity>

          {/* buraya anasayfa ve güncel testlere gidecek iki tane buton eklenecek */}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.questionSty}>
          <Text style={styles.questionText}> {question} </Text>
        </View>
        <Text style={styles.questionMap}>
          {currentQuestion + 1} - {testData.length}
        </Text>
        <View>
          <View>{this.listOptions()}</View>
          {currentQuestion < testData.length - 1 && (
            <TouchableOpacity
              onPress={() => this.nextquestion()}
              style={styles.nextButton}>
              <Text style={styles.nextButtonText}>SONRAKİ SORU >></Text>
            </TouchableOpacity>
          )}

          {currentQuestion === testData.length - 1 && (
            <TouchableOpacity
              onPress={() => this.finishHandler()}
              style={styles.nextButton}>
              <Text style={styles.nextButtonText}>SONRAKİ SORU >></Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F6',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  resultPageList: {
    alignItems: 'center',
  },
  correctAnswerText: {
    backgroundColor: '#FE8938',
    borderColor: '#FE8938',
    borderRadius: 3,
    borderWidth: 2,
    marginVertical: 8,
    paddingHorizontal: 10,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
  },
  resultPageFlatlist: {
    flex: 8,
  },
  resultPageScore: {
    flex: 1,
    flexDirection: 'row',
    // marginVertical: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    // borderColor: '#3A8A2E',
    // borderRadius: 6,
    // borderWidth: 3,
  },
  scoreText: {
    color: '#F4F6F6',
    backgroundColor: '#FE8938',
    borderColor: '#FE8938',
    marginHorizontal: 2,
    fontWeight: 'bold',
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
  },

  resultPage: {
    flex: 1,
    // marginTop: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F4F6F6',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    // paddingHorizontal: 10,
  },
  resultPageQA: {
    paddingLeft: 5,
    margin: 10,
    backgroundColor: '#98F4D7',
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: '#275BDB',
    borderRadius: 4,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
  },

  checkImage: {
    width: 15,
    height: 15,
  },
  questionSty: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#626F90',
    marginBottom: 15,
    padding: 30,
    borderRadius: 8,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
  },
  questionText: {
    // fontFamily: 'calibri',
    fontWeight: 'bold',
    margin: 1,
    color: '#F4F6F6',
  },
  questionMap: {
    color: '#FE8938',
    fontWeight: 'bold',
  },
  nextButton: {
    // flex: 1,
    backgroundColor: '#FE8938',
    fontWeight: 'bold',
    color: 'red',
    margin: 60,
    padding: 10,
    borderRadius: 40,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#626F90',
    fontWeight: 'bold',
  },
  optionsST: {
    // flex: 4,
    marginTop: 10,
  },
  button: {
    // flex: 8,
    alignItems: 'center',
    backgroundColor: '#F4F6F6',
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#626F90',
  },
  selected: {
    borderColor: '#79EEA0',
    alignItems: 'center',
    backgroundColor: '#F4F6F6',
    color: '#2FCF64',
    // padding: 10,
    borderRadius: 10,
  },
  optionText: {
    color: '#626F90',
  },
  returnTestListButton: {
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor: '#79EEA0',
    // borderRadius: 5,
  },
  btnText: {
    color: '#FE8938',
    // paddingBottom: 7,
    // marginBottom: 7,
  },
});

export default Quiz;
