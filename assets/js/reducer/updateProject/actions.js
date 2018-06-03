import {URL_UPDATE_PROJECT, URL_PDF_UPLOAD} from "../../Data/Constants";
import {LONG_DESCRIPTION_CHANGE} from "../projectCreate/actions";
export const RESPONSE = "RESPONSE_UPDATE_PROJECT_CREATE";
export const RESPONSE_PDF_UPLOAD = "RESPONSE_PDF_UPLOAD";

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

export const uploadPdf = (data) => {
    return (dispatch) => {
        return uploadPdfFunction(data).then(([response, json]) =>{
            dispatch({type: LONG_DESCRIPTION_CHANGE, payload: {long_description: json}});
            return dispatch({type: RESPONSE_PDF_UPLOAD, status:response.status});
        })
    };
};

function uploadPdfFunction(data) {
    return fetch(URL_PDF_UPLOAD+54, {
        method: 'POST',
        body: data,
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("token"),
            'Accept': 'application/json',
        })
    }).then( response => Promise.all([response, response.json()]));
}
