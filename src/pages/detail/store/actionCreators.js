import axios from 'axios'
import * as constants from './constants'

export const getDetailData = (id)=>{
    return(dispatch) =>{
        axios.get('/api/detail.json?id=' + id).then(res=>{
            const {title,content} = res.data.data
            dispatch({
                type:constants.CHANGE_DETAIL,
                title,
                content
            })
        })
    }
}
