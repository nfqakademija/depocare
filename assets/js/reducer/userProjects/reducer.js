import _ from 'lodash';
import {ERROR, SUCCESS} from "../userProjects/actions";


const initialState = {
    allUserProjects: [],
    status: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS:
            return _.assign({}, state, {
                allUserProjects: action.projects,
                status: action.status
            });
        case ERROR:
            return _.assign({}, state, {
                status: action.status
            });
        default:
            return state;
    }
};