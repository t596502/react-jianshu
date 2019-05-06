import axios from 'axios';
import {fromJS} from 'immutable';
import * as constants from './constants';

//
// const changHomeData = (result) => ({
//     type: constants.CHANGE_HOME_DATA,
//     topicList: result.topicList,
//     articleList: result.articleList,
//     recommendList: result.recommendList
// });
//
//

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            console.log(res);
            const result = res.data.data;
            dispatch({
                type: constants.CHANGE_HOME_DATA,
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            });
        });
    }
};

export const getMoreList = (page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+ (page)).then(res=>{
            const result = res.data.data;

            dispatch({
                type:constants.ADD_ARTICLE_LIST,
                page:page+1,
                list:fromJS(result)
            })
        })
    }
};
export const showScrollBar =(show)=>{
    return{
        type:constants.TOGGLE_SCROLL_TOP,
        show
    }
}
