import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // quizData: QuizData,
      userAnswer: null,
      currentQuestion: 0,
      options: [],
      quizEnd: false,
      score: 0,
      empty: 0,
      wrong: 0,
    };
  }
  // whichOne = () => {
  //     return {guncelTest1} ///////////////////////////////
  // }
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

  loadQuiz = () =>  {
    const {currentQuestion} = this.state;
    const {getParam} = this.props.navigation;
    const testData = getParam('testData');
    console.log(testData[currentQuestion].answer);

      this.setState(() => {
        return{
          question: testData[currentQuestion].question,
          options: testData[currentQuestion].options,
          answer: testData[currentQuestion].answer,
        }  
      })
  }


  componentDidMount() {
    this.loadQuiz();
  }

  checkAnswer = (answer) => {
        this.setState({
      userAnswer: answer,
    });
  };
  // whichTestData = (g) =>  {
  //   const {currentQuestion, quizData} = this.state;
  //   const {getParam} = this.props.navigation;
  //   const testData = getParam('testData');
  //   let g = testData;
  //   if (testData === 'guncelTest1'){
  //     g = quizData.g1;
  //     return g;   
  //   }else if (testData === 'guncelTest2'){
  //     g = quizData.g2;
  //    return g;
  //   }
  // }

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
            <Text style={userAnswer === option ? styles.selected : null}>
              {option}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  correctAnswerListHandler = ({item}) => {
    return (
      <View>
        <Text>{item.answer}</Text>
      </View>
    );
  };
  render() {
    const {question, currentQuestion, quizEnd} = this.state;
    const {getParam} = this.props.navigation;
    const testData = getParam('testData');
    if (quizEnd) {
      return (
        <SafeAreaView>
          <Text>sonuç sayfası</Text>
          <Text>cevaplar</Text>
          <FlatList
            renderItem={this.correctAnswerListHandler}
            keyExtractor={(item) => item.id.toString()}
            data={testData}
          />
          <View>
            <Text>doğru {this.state.score}</Text>
            <Text>boş {this.state.empty}</Text>
            <Text>yanlış {this.state.wrong}</Text>
          </View>

          {/* buraya anasayfa ve güncel testlere gidecek iki tane buton eklenecek */}
        </SafeAreaView>
      );
    }
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.questionSty}>
            <Text style={styles.questionText}> {question} </Text>
          </View>
          <Text>
            {currentQuestion + 1} - {testData.length}
          </Text>
          <View>
            <View>{this.listOptions()}</View>
            {currentQuestion < testData.length - 1 && (
              <TouchableOpacity
                onPress={() => this.nextquestion()}
                style={styles.nextButtonTocuhST}>
                <Text>sonraki soru </Text>
              </TouchableOpacity>
            )}
            {currentQuestion === testData.length - 1 && (
              <TouchableOpacity
                onPress={() => this.finishHandler()}
                style={styles.nextButtonTocuhST}>
                <Text>sınavı bitir</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  questionSty: {
    alignItems: 'center',
    backgroundColor: '#80ffcc',
    marginTop: 20,
    margin: 20,
  },
  questionText: {
    margin: 30,
  },
  nextButtonTocuhST: {
    marginTop: 60,
    alignItems: 'center',
  },
  optionsST: {
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
  },
  selected: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
});

export default Quiz;
