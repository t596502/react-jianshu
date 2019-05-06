import * as constants from './constants'

const deaufteState = {
    login:false
}

export default (state = deaufteState,action)=>{
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return {
                login:action.value
            }
            break;
        case constants.LOGOUT:
            return {
                login:action.value
            }
            break;
    }
    return state
}
