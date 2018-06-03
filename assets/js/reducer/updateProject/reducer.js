import _ from 'lodash';
import {RESPONSE, RESPONSE_PDF_UPLOAD} from "../updateProject/actions";

const initialState = {
    status: '',
    pdf_status: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RESPONSE:
                return _.assign({}, state, {
                    status: action.status
                });
            case RESPONSE_PDF_UPLOAD:
                return _.assign({}, state, {
                    pdf_status: action.status
                });
        default:
            return state
    }
}