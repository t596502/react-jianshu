import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    focused:false,
    list:[],
    totalPage:10,
    page:1,
    mouse:false
});

const reducer = (state = defaultState,action)=>{
    console.log(action);
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.SEARCH_LIST:
            return state.set('list', action.data).set('totalPage',action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouse', true);
        case constants.MOUSE_OUT:
            return state.set('mouse', false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state
    }
}

export {reducer}
