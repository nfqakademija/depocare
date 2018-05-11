import React from 'react';
import {
    Link,
    Redirect
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getAllUserProjects} from "../../../reducer/userProjects/actions";
import {createEmptyProject} from "../../../reducer/projectCreate/actions";
import Notifications from '../../Notifications';
import {getUserInfo} from "../../../reducer/user/actions";
import {
    HOME_PAGE,
    LOGIN_PAGE, NOTIFICATION_500_TEXT, NOTIFICATION_500_TITLE,
    NOTIFICATION_NOT_LOGIN_TEXT,
    NOTIFICATION_NOT_LOGIN_TITLE, NOTIFICATION_PROJECT_START_TEXT, NOTIFICATION_PROJECT_START_TTITLE,
    NOTIFICATION_TIME
} from '../../../Data/Constants';
import {actionLogout} from "../../../reducer/login/actions";

class MyProjectsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingCreate: false,
            redirect: false,
            redirectTo: '',
            loadingProjects: false,
            id: 0
        }
    }

    componentDidMount(){
        this.setState({
            loadingProjects: true
        });
        this.props.getAllUserProjects().then(() => {
            switch (this.props.statusProjects) {
                case 200:
                    this.setState({ loadingProjects: false });
                    break;
                case 401:
                    this.props.actionLogout();
                    Notifications.createNotification('error', NOTIFICATION_NOT_LOGIN_TITLE, NOTIFICATION_NOT_LOGIN_TEXT, NOTIFICATION_TIME);
                    this.setState({ loadingProjects: false, redirect: true, redirectTo:LOGIN_PAGE });
                    break;
                case 500:
                    Notifications.createNotification('error', NOTIFICATION_500_TITLE, NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({ loadingProjects: false, redirect: true, redirectTo: HOME_PAGE});
                    break;
                default:
                    Notifications.createNotification('error', NOTIFICATION_500_TITLE, NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({ loadingProjects: false, redirect: true, redirectTo: HOME_PAGE});
            }
        });
        if(localStorage.getItem('token') && this.props.User.dataReceived === false && this.props.User.loading === false)
        {
            this.props.onGetUserInfo();
        }
    }

    createEmptyProject() {
        this.setState({ loadingCreate: true });
        this.props.createEmptyProject().then(() =>{
            switch (this.props.statusCreate){
                case 200:
                    this.setState({ loadingCreate: false, redirect: true, redirectTo:'/kurti/'+this.props.id});
                    Notifications.createNotification('success', NOTIFICATION_PROJECT_START_TTITLE, NOTIFICATION_PROJECT_START_TEXT, NOTIFICATION_TIME);
                    break;
                case 401:
                    this.props.actionLogout();
                    Notifications.createNotification('error', NOTIFICATION_NOT_LOGIN_TITLE, NOTIFICATION_NOT_LOGIN_TEXT, NOTIFICATION_TIME);
                    this.setState({ loadingCreate: false, redirect: true, redirectTo:LOGIN_PAGE });
                    break;
                case 500:
                    Notifications.createNotification('error', NOTIFICATION_500_TITLE,NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({ loadingCreate: false});
                    break;
                default:
                    Notifications.createNotification('error', NOTIFICATION_500_TITLE,NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({ loadingCreate: false});
            }
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirectTo}/>
        }

        if(!this.props.Login.login) {
            Notifications.createNotification(this.props.errorType,this.props.error, '', 5000);
            return <Redirect to={{
                pathname: LOGIN_PAGE,
                state: { from: this.props.location }
            }}/>
        }

        const content = (
            <div className="container">
                <div className="col-md-12 user-project-list-intro">
                    <h1><strong>Jūsų projektų sąrašas</strong></h1>
                    <h3>Vieta kur galite matyti visus savo projektus</h3>
                </div>
                <div className="col-md-12 user-project-list-create-project-button">
                    <h4><button onClick={() => { this.createEmptyProject() }} className="button-start-new-project">Pradėti naują projektą</button></h4>
                </div>
                {
                    this.props.allUserProjects.map(project => {
                        return (
                            project.flag_create ? (
                                <div key={project.id} className="col-md-12 user-project-list-item">
                                    <div className="col-md-2 user-project-list-image-wraper">
                                        <img src={project.image} className="user-project-list-image" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <div>{project.title}</div>
                                        <div>{project.description}</div>
                                    </div>
                                    <div className="col-md-2 user-project-list-button-wraper">
                                        <Link to={'/kurti/'+project.id}>
                                            <button className="blue-button">Redaguoti</button>
                                        </Link>
                                    </div>
                                <div/>
                            </div>) : (
                                <div key={project.id} className="col-md-12 user-project-list-item">
                                    <Link to={'/projektas/'+project.id}>
                                        <div className="col-md-2 user-project-list-image-wraper">
                                            <img src={project.image} className="user-project-list-image" alt=""/>
                                        </div>
                                    </Link>
                                    <Link to={'/projektas/'+project.id}>
                                        <div className="col-md-8">
                                            <div>{project.title}</div>
                                            <div>{project.description}</div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )}
                    )}
            </div>
        );

        if (this.state.loadingProjects) {
            return (
                <div>
                    <div id="clearBtn2" className="clearBtn2 project-create-loader"/>
                    <div className="project-create-saving"/>
                </div>);
        } else if (this.state.loadingCreate) {
            return (
                <div>
                    <div id="clearBtn2" className="clearBtn2 project-create-loader"/>
                    <div className="project-create-saving">
                        {content}
                    </div>
                </div>);
        } else {
            return (
            <div>
                {content}
            </div>);
        }
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllUserProjects: getAllUserProjects,
        createEmptyProject: createEmptyProject,
        onGetUserInfo: getUserInfo,
        actionLogout: actionLogout
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        User: state.User,
        Login: state.Login,
        allUserProjects: state.UserProjects.allUserProjects,
        statusProjects: state.UserProjects.status,
        id: state.projectCreate.id,
        statusCreate: state.projectCreate.status,

    };
}

export default connect(mapStateToProps, matchDispatchToProps)(MyProjectsList);