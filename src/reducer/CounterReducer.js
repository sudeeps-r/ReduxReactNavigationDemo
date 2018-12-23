import * as Actions from '../actions/ActionTypes'

const counterReducer= ( state={count:0},action)=>{
    console.log('Action')
    switch(action.type){
        case Actions.COUNTER_INCREMENT:
        return {...state,count: state.count+1}
        break
        case Actions.COUNTER_DECREMENT:
        return {...state,count:state.count-1}
        break
        case Actions.COUNTER_DEFAULT_VALUES:
        return {...state,count:action.defValue}
        break;
        default:
        return state
    }
}

export default counterReducer