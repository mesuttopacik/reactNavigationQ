import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'

class Deneme extends Component {
    render() {
        return (
            <View>
                <Text> redux tan gelen deneme verisi {console.log(this.props.currentTest.testName)} </Text>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        currentTest:state.changeTestReducer
    }
}
export default connect(mapStateToProps)(Deneme)