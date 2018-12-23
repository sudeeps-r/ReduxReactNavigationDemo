import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';


export default class Tab1 extends Component{
   
    render(){
       let {navigation} = this.props
        
        return <View style={{backgroundColor:'white',flex:1}}>
        <Text style={{backgroundColor:'green'}}>Tab1</Text>
        <Button onPress={()=>navigation.navigate('HomeNavigator')} title='Press here'/>
        </View>
    }
}