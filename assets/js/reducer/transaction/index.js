import {NEW_TRANSACTION_REQUEST, NEW_TRANSACTION_SUCCESS, NEW_TRANSACTION_ERROR} from "../transaction/actions";

const initialState = {
    status: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_TRANSACTION_REQUEST:
            return Object.assign({}, state, {
                status: 'loading'
            });

        case NEW_TRANSACTION_SUCCESS:
            return Object.assign({}, state, {
                status: action.payload.status
            });

        case NEW_TRANSACTION_ERROR:
            return Object.assign({}, state, {
                status: action.payload
            });
        default:
            return state
    }
}
