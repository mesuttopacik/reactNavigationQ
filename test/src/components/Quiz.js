import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class Quiz extends Component {
    
    render() {
        const {navigate, goBack, getParam} = this.props.navigation;
        const testData = getParam('testData');
        return (
            <View>
                <Text> {testData}</Text>
                <Button title = "ana sayfa"
            onPress = {()=> navigate('Home')}
         />
                <Button title = "geri git"
                onPress = {()=> goBack()}
                />
            </View>
        )
    }
}
