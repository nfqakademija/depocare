import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from './actions';
import { LOGOUT } from "../login/actions";

const initialState = {
    registered: false,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                registered: true
            });
        case REGISTER_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });
        case LOGOUT:
            return Object.assign({}, state, {
                registered: false,
                loading: false,
                error: null
            });
        default:
            return state;
    }
};
