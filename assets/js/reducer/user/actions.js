import {URL_GET_USER} from "../../Data/Constants";
import {LOGOUT} from "../login/actions";

export const GET_USER_INFO_REQUEST = "get_user_info_request";
export const GET_USER_INFO_SUCCESS = "get_user_info_success";
export const GET_USER_INFO_ERROR = "get_user_info_error";

export function getUserInfo() {
    return (dispatch) => {
        dispatch({type: GET_USER_INFO_REQUEST});
        return getInfo().then(([response, json]) =>{
            if(response.status === 200){
                dispatch({
                    type: GET_USER_INFO_SUCCESS,
                    payload: json
                });
            }
            else{
                dispatch({
                    type: GET_USER_INFO_ERROR,
                    error: response
                });
                dispatch({
                    type: LOGOUT
                })
            }
        })
    }
}

function getInfo() {
    return fetch(URL_GET_USER,
        {
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ localStorage.getItem("token")
            })
        })
        .then( response => Promise.all([response, response.json()]));
}
