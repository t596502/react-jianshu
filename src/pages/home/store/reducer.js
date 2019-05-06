import {fromJS} from "immutable";
import * as constants from './constants'

const defaultStatus = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultStatus, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                articlePage:action.page,
                articleList: state.get('articleList').concat(action.list)
            });
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        default:
            return state
    }
};
