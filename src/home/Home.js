import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';
import TabNavigator from '../Tab/TabContainer'
import { connect } from 'react-redux';
import * as Actions from  '../actions/ActionTypes'

class Home extends Component{

    buttonPress(){
        this.props.navi
    }
    render(){
        return <View style={{backgroundColor:'white',flex:1}}>
        <Text style={{backgroundColor:'green'}}>Home Screen </Text>
        <Button title='click here' onPress={ ()=>this.props.navigation.navigate('TabNavigator')}/>
        <Text>counter {this.props.count} </Text>
        <Button title='increment' onPress={ ()=> this.props.increment()}/>
        <Button title='decrement' onPress={ ()=> this.props.decrement()}/> 
        <Button title='setDefault' onPress={ ()=> this.props.setDefault(10)}/>
        </View>
    }
}

const mapStateToProps=(state)=>({
    count: state.counterReducer.count,
})

const mapDispatchToProps=(dispatch)=>({
    increment: ()=>dispatch({type:Actions.COUNTER_INCREMENT}),
    decrement: ()=>dispatch({type:Actions.COUNTER_DECREMENT}),
    setDefault:(value)=>dispatch({type:Actions.COUNTER_DEFAULT_VALUES, defValue:value})
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)