import _ from 'lodash';
import {RESPONSE} from "../updateProject/actions";

const initialState = {
    status: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RESPONSE:
                return _.assign({}, state, {
                    status: action.status
                });
        default:
            return state
    }
}