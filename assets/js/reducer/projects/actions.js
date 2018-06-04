import {API_URL, URL_GET_CATEGORIES, URL_GET_PROJECT, URL_GET_PROJECTS} from "../../Data/Constants";
import {getUserInfo} from "../user/actions";

export const LOAD_PROJECTS_REQUEST = "load_projects_request";
export const LOAD_PROJECTS_SUCCESS = "load_projects_success";
export const LOAD_PROJECTS_ERROR = "load_projects_error";
export const LOAD_CATEGORIES_REQUEST = "load_categories_request";
export const LOAD_CATEGORIES_SUCCESS = "load_categories_success";
export const LOAD_CATEGORIES_ERROR = "load_categories_error";
export const LOAD_PROJECT_SUCCESS = "LOAD_PROJECT_SUCCESS";
export const LOAD_PROJECT_RESPONSE = "LOAD_PROJECT_RESPONSE";
export const GET_FAVORITE_PROJECTS = "get_favorite_projects";
export const HANDLE_FAVORITE_PROJECT_REQUEST = "handle_favorite_project_request";
export const HANDLE_FAVORITE_PROJECT_SUCCESS = "handle_favorite_project_success";
export const HANDLE_FAVORITE_PROJECT_ERRROR = "handle_favorite_project_error";

export function loadMoreProjects(category, from, to) {
    return (dispatch) => {
        dispatch({
            type: LOAD_PROJECTS_REQUEST
        });
        return fetchMoreProjects(category, from, to).then(([response, json]) =>{
            if(response.status === 200){
                dispatch({
                    type: LOAD_PROJECTS_SUCCESS,
                    payload: json
                })
            } else {
                dispatch({
                    type: LOAD_PROJECTS_ERROR,
                    error: response
                })
            }
        })
    }
}

function fetchMoreProjects(category, from, to) {
    const URL = URL_GET_PROJECTS+category+"?getFrom="+from+"&getTo="+to;
    return fetch(URL, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            })
        })
        .then( response => Promise.all([response, response.json()]));
}

export function getProject(id) {
    return (dispatch) => {
        return fetchProject(id).then(([response, json]) =>{
            if(response.status === 200){
                dispatch({
                    type: LOAD_PROJECT_SUCCESS,
                    status: response.status,
                    project: json
                })
            } else {
                dispatch({
                    type: LOAD_PROJECT_RESPONSE,
                    status: response.status
                })
            }
        })
    }
}

function fetchProject(id) {
    const URL = URL_GET_PROJECT+id;
    return fetch(URL, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
        .then( response => Promise.all([response, response.status===200?response.json():{}]));
}



export function getCategories() {
    return (dispatch) => {
        dispatch({
            type: LOAD_CATEGORIES_REQUEST
        });
        return fetchCategories().then(([response, json]) =>{
            if(response.status === 200){
                dispatch({
                    type: LOAD_CATEGORIES_SUCCESS,
                    payload: json
                })
            }
            else{
                dispatch({
                    type: LOAD_CATEGORIES_ERROR,
                    error: response
                })
            }
        })
    }
}

function fetchCategories() {
    return fetch(URL_GET_CATEGORIES, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
        .then( response => Promise.all([response, response.json()]));
}

export function getFavoriteProjects(favorite_projects){
    return (dispatch) => {
        dispatch({
            type: GET_FAVORITE_PROJECTS,
            payload: favorite_projects
        });
    };
}

export function handleFavoriteProjectsChange(project, action) {
    return (dispatch) => {
        dispatch({
            type: HANDLE_FAVORITE_PROJECT_REQUEST
        });
        return fetchHandleProjectsFavoriteChange(project.id, action).then(([response]) =>{
            if(response.status === 200){
                getUserInfo();
                dispatch({
                    type: HANDLE_FAVORITE_PROJECT_SUCCESS,
                    payload: project,
                    action
                });

            }
            else{
                dispatch({
                    type: HANDLE_FAVORITE_PROJECT_ERRROR,
                    error: response
                })
            }
        })
    }
}

function fetchHandleProjectsFavoriteChange(project_id, action) {
    switch (action){
        case "add":
            return fetch(API_URL+"addUserFavoriteProject/"+project_id.toString(), {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                })
            }).then( response => Promise.all([response, response.json()]));
        case "delete":
            return fetch(API_URL+"deleteUserFavoriteProject/"+project_id.toString(), {
                method: 'DELETE',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                })
            }).then( response => Promise.all([response, response.json()]));

    }

    return fetch(URL_GET_CATEGORIES, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
        .then( response => Promise.all([response, response.json()]));
}
