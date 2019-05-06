import { fromJS } from 'immutable';
import * as constants from './constants'
const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState ,action)=>{

    if(action.type === constants.CHANGE_DETAIL){
        return state.merge({
            title:action.title,
            content:action.content
        })
    }else {
        return state
    }

    //
}
