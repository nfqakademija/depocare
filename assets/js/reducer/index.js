import { combineReducers } from 'redux';
import projects from './projects';
import projectCreate from './projectCreate/reducer';
import Login from './login';
import User from './user';
import Register from './register';
import UserProjects from './userProjects/reducer'
import updateProjectCreate from './updateProject/reducer'

export default combineReducers({
    projectCreate,
    projects,
    Login,
    User,
    Register,
    UserProjects,
    updateProjectCreate
});
