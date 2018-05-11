import {URL_REGISTER} from "../../Data/Constants";

export const REGISTER_REQUEST = "user_register_request";
export const REGISTER_SUCCESS = "user_register_success";
export const REGISTER_ERROR = "user_register_error";

export function actionRegister(email, username, lastname, password, re_password) {
    return (dispatch) => {
        dispatch({type: REGISTER_REQUEST});
        return register(email, username, lastname, password, re_password).then(([response]) =>{
            if(response.status === 201){
                dispatch({type: REGISTER_SUCCESS});
            }
            else{
                dispatch({
                    type: REGISTER_ERROR,
                    error: response
                });
            }
        })
    }
}

function register(email, username, lastname, password, re_password) {
    return fetch(URL_REGISTER,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                username: email,
                firstname: username,
                lastname: lastname,
                plainPassword: {
                    first: password,
                    second: re_password
                }
            })
        })
        .then( response => Promise.all([response, response.json()]));
}
