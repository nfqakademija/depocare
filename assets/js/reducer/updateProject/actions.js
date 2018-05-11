import {URL_UPDATE_PROJECT} from "../../Data/Constants";

export const RESPONSE = "RESPONSE_UPDATE_PROJECT_CREATE";

export const updateProjectCreate = (data) => {
    return (dispatch) => {
        return updateProjectCreateFunction(data).then(([response]) =>{
            return dispatch({type: RESPONSE, status:response.status});
        })
    };
};

function updateProjectCreateFunction(data) {
    return fetch(URL_UPDATE_PROJECT+data.id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem("token")
        })
    }).then( response => Promise.all([response]));
}
