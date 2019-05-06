import axios from 'axios'
import * as constants from './constants'

export const logout =()=>({
    type:constants.LOGOUT,
    value: false
})

export const login = (account,password)=>{
    console.log(account, password);
    return (dispatch)=>{
        axios.get(`/api/login.json?account=${account}&password=${password}`).then(res=>{
            console.log(res);
            if(res.data.data){
                dispatch({
                    type:constants.CHANGE_LOGIN,
                    value:true
                })
            }
        })
    }
}
