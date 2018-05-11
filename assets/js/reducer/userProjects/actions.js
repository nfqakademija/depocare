import {URL_GET_USERS_PROJECT_LIST} from "../../Data/Constants";

export const SUCCESS = "SUCCESS_USERS_PROJECTS_LIST";
export const ERROR = "ERROR_USERS_PROJECTS_LIST";

export const getAllUserProjects = () => {
    return (dispatch) => {
        return getProjects().then(([response, json]) =>{
            switch (response.status) {
                case 200:
                    return dispatch({type: SUCCESS, projects: json, status: response.status});
                default:
                    return dispatch({type: ERROR, status: response.status});
            }
        });
    };
};
function getProjects() {
    return (
    fetch(URL_GET_USERS_PROJECT_LIST, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem("token")
        })}).then( response => Promise.all([response, response.json()])));
}