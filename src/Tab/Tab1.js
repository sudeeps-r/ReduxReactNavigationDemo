import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';
import { StackActions } from 'react-navigation';

const popAction = StackActions.pop({
    n: 2,
  })

export default class Tab1 extends Component{
   
    

    render(){
       let {navigate} = this.props.navigation
        return <View style={{backgroundColor:'white',flex:1}}>
        <Text style={{backgroundColor:'green'}}>Tab1</Text>
        <Button onPress={()=>navigate('Home')} title='GoBack'/>
        </View>
    }
}

