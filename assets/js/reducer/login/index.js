import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} from './actions';
const initialState = {
        login: false,
        loading: false,
        error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                login: true
            });
        case LOGIN_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('persist:root');
            return Object.assign({}, state, {
                login: false,
            });
        default:
            return state;
    }
};
