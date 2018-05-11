const URL_LOGIN = 'http://localhost:8000/api/login';
export const LOGIN_REQUEST = "user_login_request";
export const LOGIN_SUCCESS = "user_login_success";
export const LOGIN_ERROR = "user_login_error";
export const LOGOUT = "user_logout";

export function actionLogin(email,password) {
    return (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        return login(email,password).then(([response, json]) =>{
            if(response.status === 200){
                localStorage.setItem("token", json.token);
                dispatch({type: LOGIN_SUCCESS});
            }
            else{
                dispatch({
                    type: LOGIN_ERROR,
                    error: response
                });
            }
        })
    }
}

export function actionLogout() {
    return (dispatch) => {
        dispatch({type: LOGOUT});
    }
}

function login(email,pass) {
    return fetch(URL_LOGIN,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({username: email, password: pass})})
        .then( response => Promise.all([response, response.json()]));
}
