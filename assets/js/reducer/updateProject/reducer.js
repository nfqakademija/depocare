import _ from 'lodash';
import {RESPONSE, RESPONSE_AVATAR_UPLOAD,RESPONSE_PDF_UPLOAD,RESPONSE_PHOTO_UPLOAD} from "../updateProject/actions";

const initialState = {
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
        default:
            return state
    }
}