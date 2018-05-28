import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR} from './actions';
import { LOGOUT } from "../login/actions";
import {HANDLE_FAVORITE_PROJECT_SUCCESS} from "../projects/actions";
import {NEW_TRANSACTION_SUCCESS} from "../transaction/actions";

const initialState ={
    dataReceived: false,
    loading: false,
    error: null,
    updated: false,
    userData: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return Object.assign({}, state, {
                dataReceived: false,
                loading: true,
                error: null
            });
        case GET_USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                dataReceived: true,
                error: null,
                userData: action.payload
            });
        case GET_USER_INFO_ERROR:
            localStorage.removeItem('token');
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });
        case LOGOUT:
            return Object.assign({}, state, {
                userData: {},
                dataReceived: false
            });
        case HANDLE_FAVORITE_PROJECT_SUCCESS:
            switch (action.action) {
                case "add":
                    return {
                        ...state,
                        userData: {
                            ...state.userData,
                            favorite_projects: [
                                ...state.userData.favorite_projects,
                                action.payload
                            ]
                        }
                    };
                case "delete": {
                    // create a new state using object spread or assign
                    return {
                        ...state,
                        userData: {
                            ...state.userData,
                            favorite_projects: state.userData.favorite_projects
                                .filter(project => project.id !== action.payload.id)
                        }
                    };
                }
                default:
                    return state;
            }
        case NEW_TRANSACTION_SUCCESS:
            let newBalance = state.userData.balance-= action.payload.amount;
            return {
                ...state,
                userData: {
                    ...state.userData,
                    balance: newBalance
                }
            };
        default:
            return state;
    }
};
