import {URL_UPDATE_PROJECT, URL_PROJECT_FILE_UPLOAD, URL_AVATAR_UPLOAD} from "../../Data/Constants";
import {LONG_DESCRIPTION_CHANGE, IMAGE_CHANGE, PROFILE_IMAGE_CHANGE} from "../projectCreate/actions";
export const RESPONSE = "RESPONSE_UPDATE_PROJECT_CREATE";
export const RESPONSE_PDF_UPLOAD = "RESPONSE_PDF_UPLOAD";
export const RESPONSE_PHOTO_UPLOAD = "RESEPONSE_PHOTO_UPLOAD";
export const RESPONSE_AVATAR_UPLOAD = "RESPONSE_AVATAR_UPLOAD";

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
        return uploadFileFunction(data).then(([response, json]) =>{
            response.status === 200 ? dispatch({type: LONG_DESCRIPTION_CHANGE, payload: {long_description: json}}): "";
            return dispatch({type: RESPONSE_PDF_UPLOAD, status:response.status});
        })
    };
};

function uploadFileFunction(data) {
    return fetch(URL_PROJECT_FILE_UPLOAD, {
        method: 'POST',
        body: data,
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("token"),
            'Accept': 'application/json',
        })
    }).then( response => Promise.all([response, response.json()]));
}

export const uploadPhoto = (data) => {
    return (dispatch) => {
        return uploadFileFunction(data).then(([response, json]) =>{
            response.status === 200 ? dispatch({type: IMAGE_CHANGE, payload: {image: json}}) : "";
            return dispatch({type: RESPONSE_PHOTO_UPLOAD, status:response.status});
        })
    };
};

export const uploadAvatar = (data) => {
    return (dispatch) => {
        return uploadAvatarFunction(data).then(([response, json]) =>{
            response.status === 200 ? dispatch({type: PROFILE_IMAGE_CHANGE, payload: {profile_image: json}}) : "";
            return dispatch({type: RESPONSE_AVATAR_UPLOAD, status:response.status});
        })
    };
};

function uploadAvatarFunction(data) {
    return fetch(URL_AVATAR_UPLOAD, {
        method: 'POST',
        body: data,
        headers: new Headers({
            'Authorization': 'Bearer '+ localStorage.getItem("token"),
            'Accept': 'application/json',
        })
    }).then( response => Promise.all([response, response.json()]));
}
