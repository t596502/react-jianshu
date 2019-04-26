import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'


const changeList = (data)=>({
    type:constants.SEARCH_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});
export const mouseOut = () => ({
    type: constants.MOUSE_OUT
});
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

export const getList = ()=>{
    return (dispatch) =>{
        axios.get('/api/headerList.json').then(res=>{
            const {data} = res.data
            dispatch(changeList(data))
        }).catch(err=>{
            console.log(err);
        })
    }
}


