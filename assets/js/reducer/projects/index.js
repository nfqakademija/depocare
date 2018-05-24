import {LOAD_PROJECT_SUCCESS, LOAD_PROJECT_RESPONSE, LOAD_PROJECTS_REQUEST, LOAD_PROJECTS_SUCCESS,
LOAD_PROJECTS_ERROR, LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_SUCCESS,
LOAD_CATEGORIES_ERROR, GET_FAVORITE_PROJECTS, HANDLE_FAVORITE_PROJECT_ERRROR,
HANDLE_FAVORITE_PROJECT_REQUEST, HANDLE_FAVORITE_PROJECT_SUCCESS} from "./actions";
import _ from 'lodash';
import {NEW_TRANSACTION_SUCCESS} from "../transaction/actions";


const initialState ={
    loadingProjects: false,
    loadingCategories: false,
    errorProjects: null,
    errorCategories: null,
    errorFavorite: null,
    isMore: true,
    categoriesData: [],
    projectsData: [],
    project: null,
    status: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        //project
        case LOAD_PROJECT_SUCCESS:
            return _.assign({}, state, {
                project: action.project,
                status: action.status
            });

        case LOAD_PROJECT_RESPONSE:
            return _.assign({}, state, {
                status: action.status
            });
        //projects

        case LOAD_PROJECTS_REQUEST:
            return Object.assign({}, state, {
                loadingProjects: true
            });

        case LOAD_PROJECTS_SUCCESS:
            if(action.payload.length > 0){
                return Object.assign({}, state, {
                    projectsData: state.projectsData.concat(action.payload),
                    loadingProjects: false,
                    errorProjects: null,
                    isMore: true
                });
            }
            else{
                return Object.assign({}, state, {
                    loadingProjects: false,
                    isMore: false
                });
            }

        case LOAD_PROJECTS_ERROR:
            return Object.assign({}, state, {
                loadingProjects: false,
                errorProjects: action.error
            });

         //categories

        case LOAD_CATEGORIES_REQUEST:
            return Object.assign({}, state, {
                loadingCategories: true
            });

        case LOAD_CATEGORIES_SUCCESS:
            return Object.assign({}, state, {
                loadingCategories: false,
                errorCategories: null,
                categoriesData: action.payload

            });

        case LOAD_CATEGORIES_ERROR:
            return Object.assign({}, state, {
                loadingCategories: false,
                errorCategories: action.error
            });

        case GET_FAVORITE_PROJECTS:
            return Object.assign({}, state, {
                projectsData: action.payload
            });

        case HANDLE_FAVORITE_PROJECT_REQUEST:
            return Object.assign({}, state, {
                updatingFavorite: true
            });

        case HANDLE_FAVORITE_PROJECT_SUCCESS:
            return Object.assign({}, state, {
                updatingFavorite: false
            });

        case HANDLE_FAVORITE_PROJECT_ERRROR:
            return Object.assign({}, state, {
                updatingFavorite: false,
                errorFavorite: action.error
            });

        case NEW_TRANSACTION_SUCCESS:
        {
            let newProject =
                state.projectsData
                    .find(p => p.id === action.payload.project_id);
            let newProjectIndex =
                state.projectsData
                    .findIndex(p => p.id === action.payload.project_id);
            newProject.reached += action.payload.amount;
            return {
                ...state,
                project: newProject,
                projectsData:
                    [...state.projectsData.slice(0,newProjectIndex),
                    newProject ,
                    ...state.projectsData.slice(newProjectIndex + 1, state.projectsData.length)]
            };


        }


        default:
            return state;
    }
};
