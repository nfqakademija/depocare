import _ from 'lodash';
import {RESPONSE, RESPONSE_AVATAR_UPLOAD,RESPONSE_PDF_UPLOAD,RESPONSE_PHOTO_UPLOAD,
    SUBMIT_PROJECT_REQUEST, SUBMIT_PROJECT_SUCCESS, SUBMIT_PROJECT_ERROR}
    from "../updateProject/actions";

const initialState = {
    submit_success: false,
    submit_error: '',
    status: '',
    pdf_status: '',
    photo_status: '',
    avatar_status: ''
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
            case RESPONSE_PHOTO_UPLOAD:
                return _.assign({}, state, {
                    photo_status: action.status
                });
            case RESPONSE_AVATAR_UPLOAD:
                return _.assign({}, state, {
                    avatar_status: action.status
                });
            case SUBMIT_PROJECT_REQUEST:
                return _.assign({}, state, {
                    submit_success: false,
                    submit_error: ''
                });
            case SUBMIT_PROJECT_SUCCESS:
                return _.assign({}, state, {
                    submit_success: true
                });
            case SUBMIT_PROJECT_ERROR:
                return _.assign({}, state, {
                    submit_error: action.error
                });
        default:
            return state
    }
}
