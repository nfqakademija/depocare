import {URL_NEW_TRANSACTION} from "../../Data/Constants";
export const NEW_TRANSACTION_REQUEST = "new_user_project_transaction_request";
export const NEW_TRANSACTION_SUCCESS = "new_user_project_transaction_success";
export const NEW_TRANSACTION_ERROR = "new_user_project_transaction_error";

export function addNewUserProjectTransaction(project_id, amount) {
    return (dispatch) => {
        dispatch({
            type: NEW_TRANSACTION_REQUEST
        });
        return newTransactionRequest(project_id, amount).then(([response]) =>{
            if(response.status === 200){
                let transaction={
                    status: response.status,
                    project_id,
                    amount
                };
                dispatch({
                    type: NEW_TRANSACTION_SUCCESS,
                    payload: transaction
                });
            }
            else{
                dispatch({
                    type: NEW_TRANSACTION_ERROR,
                    error: response.status
                })
            }
        })
    }
}

function newTransactionRequest(project_id, amount) {
    const URL = URL_NEW_TRANSACTION+"?project_id="+project_id+"&amount="+amount;
    return fetch(URL, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem("token")
        })
    })
        .then( response => Promise.all([response]));
}
