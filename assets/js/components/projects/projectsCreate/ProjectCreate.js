import React from 'react';
import Basic from './Basic';
import Story from './Story';
import AboutYou from './AboutYou';
import Preview from './Preview';
import Account from './Account';
import Notifications from '../../Notifications';
import {Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {PROJECT_CREATE_SAVE_CHANGE, SET_PROJECT_CREATE, projectCreateInputChange} from "../../../reducer/projectCreate/actions";
import {updateProjectCreate, submitProject} from "../../../reducer/updateProject/actions";
import {getUserInfo} from "../../../reducer/user/actions";
import {
    HOME_PAGE,
    LOGIN_PAGE,
    NOTIFICATION_500_TEXT, NOTIFICATION_500_TITLE,
    NOTIFICATION_FAILED_TO_SAVE_PROJECT,
    NOTIFICATION_NOT_LOGIN_TEXT, NOTIFICATION_NOT_LOGIN_TITLE,
    NOTIFICATION_PROJECT_UPDATE_SUCCESS_TEXT,
    NOTIFICATION_PROJECT_UPDATE_SUCCESS_TITLE,
    NOTIFICATION_TIME
} from "../../../Data/Constants";
import {actionLogout} from "../../../reducer/login/actions";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class ProjectCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            redirect: false,
            redirectTo: '',
            save: false,
            tabIndex: 0
        };
        this.submitProject = this.submitProject.bind(this);

    }
    componentDidMount(){
        this.setState({
            loading:true
        });
        this.props.projectCreateInputChange({type: SET_PROJECT_CREATE, id: this.props.match.params.project_id}).then(() => {
            switch (this.props.statusProject) {
                case 200:
                    this.setState({loading: false, redirect: false});
                    break;
                case 400:
                    this.setState({loading: false, redirect: true, redirectTo: HOME_PAGE});
                    break;
                case 401:
                    this.props.actionLogout();
                    Notifications.createNotification('error', NOTIFICATION_NOT_LOGIN_TITLE, NOTIFICATION_NOT_LOGIN_TEXT, NOTIFICATION_TIME);
                    this.setState({loading: false, redirect: true, redirectTo: LOGIN_PAGE});
                    break;
                case 403:
                    this.setState({loading: false, redirect: true, redirectTo: HOME_PAGE});
                    break;
                case 500:
                    Notifications.createNotification('error', NOTIFICATION_500_TITLE, NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({loading: false});
                    break;
                default:
                    Notifications.createNotification('error', NOTIFICATION_500_TITLE, NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({loading: false});
            }
        });
    }
    updateProject() {
        this.setState({
            loading: true
        });
        this.props.updateProjectCreate(
            this.props.project
        ).then(() => {
            switch (this.props.status) {
                case 200:
                    this.props.projectCreateInputChange({type: PROJECT_CREATE_SAVE_CHANGE, save: false});
                    Notifications.createNotification('success', NOTIFICATION_PROJECT_UPDATE_SUCCESS_TITLE, NOTIFICATION_PROJECT_UPDATE_SUCCESS_TEXT, NOTIFICATION_TIME);
                    this.setState({loading: false});
                    this.props.getUserInfo();
                    break;
                case 400:
                    Notifications.createNotification('error', NOTIFICATION_FAILED_TO_SAVE_PROJECT, NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({loading: false});
                    break;
                case 401:
                    this.props.actionLogout();
                    Notifications.createNotification('error', NOTIFICATION_FAILED_TO_SAVE_PROJECT, NOTIFICATION_NOT_LOGIN_TEXT, NOTIFICATION_TIME);
                    this.setState({loading: false, redirect: true, redirectTo: LOGIN_PAGE});
                    break;
                case 403:
                    this.setState({loading: false, redirect: true, redirectTo: HOME_PAGE});
                    break;
                case 500:
                    Notifications.createNotification('error', NOTIFICATION_FAILED_TO_SAVE_PROJECT, NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({loading: false});
                    break;
                default:
                    Notifications.createNotification('error', NOTIFICATION_FAILED_TO_SAVE_PROJECT, NOTIFICATION_500_TEXT, NOTIFICATION_TIME);
                    this.setState({loading: false});
            }
        });
    }

    submitProject(e){
        e.preventDefault();
        this.props.onSubmitProject(this.props.project);
    }

    render() {
        if (this.props.submitStatus) {
            return <Redirect to={'/projektas/' + this.props.project.id}/>
        }
        if (this.state.redirect) {
            return <Redirect to={this.state.redirectTo}/>
        }
        if (!this.props.project.flag_create) {
            return <Redirect to={HOME_PAGE}/>
        }

        const content = (
            <form onSubmit={this.submitProject}>
                <div className="project-create-save-button-content-wrapper">
                    <div className="container container-create">
                        <Tabs selectedIndex={this.state.tabIndex} onSelect={ tabIndex => this.setState({tabIndex})}>
                            <div className="col-xs-2"/>
                            <div className="project-create-button-menu-margin col-xs-8">
                                <TabList className="">
                                    <div className="btn-toolbar" role="toolbar">
                                        <div className="col-xs-12">
                                            <Tab className="project-create-tabs-tab" selectedClassName="project-create-tabs-tab-selected"><button type="button" className="blue-button project-create-blue-button">Pagrindai</button></Tab>
                                            <Tab className="project-create-tabs-tab" selectedClassName="project-create-tabs-tab-selected"><button type="button" className="blue-button project-create-blue-button">Istorija</button></Tab>
                                            <Tab className="project-create-tabs-tab" selectedClassName="project-create-tabs-tab-selected"><button type="button" className="blue-button project-create-blue-button">Apie jus</button></Tab>
                                            <Tab className="project-create-tabs-tab" selectedClassName="project-create-tabs-tab-selected"><button type="button" className="blue-button project-create-blue-button">Paskyra</button></Tab>
                                            <Tab className="project-create-tabs-tab" selectedClassName="project-create-tabs-tab-selected"><button type="button" className="blue-button project-create-blue-button">Peržiūra</button></Tab>
                                        </div>
                                    </div>
                                </TabList>
                            </div>
                            <div className="col-xs-2"/>
                                <TabPanel forceRender={true} selectedClassName="project-create-tabs-tab-selected">
                                    <Basic/>
                                </TabPanel>
                                <TabPanel forceRender={true} selectedClassName="project-create-tabs-tab-selected">
                                    <Story/>
                                </TabPanel>
                                <TabPanel forceRender={true} selectedClassName="project-create-tabs-tab-selected">
                                    <AboutYou/>
                                </TabPanel>
                                <TabPanel forceRender={true} selectedClassName="project-create-tabs-tab-selected">
                                    <Account/>
                                </TabPanel>
                                <TabPanel forceRender={false} selectedClassName="project-create-tabs-tab-selected">
                                    <Preview/>
                                </TabPanel>
                        </Tabs>
                    </div>
                    <div className="project-create-save-bar">
                        <div className="project-create-save-button-wrapper">
                            <button type="submit" className="project-create-upload-button btn-lg btn btn-success">Pateikti projektą</button>

                            {this.props.project.save ?
                        <span>
                            <button type="button" onClick={this.updateProject.bind(this)} className="project-create-save-button btn-lg btn btn-success">Išsaugoti</button>
                            <button type="button" onClick={this.componentDidMount.bind(this)} className="project-create-discard-button btn-lg btn btn-danger">Ištrinti pakeitimus</button>
                        </span>
                             : <span/>
                    }
                        </div>
                    </div>
                </div>
            </form>
        );

        if (this.state.loading) {
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
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        project: state.projectCreate,
        statusProject: state.projectCreate.status,
        status: state.updateProjectCreate.status,
        submitStatus: state.updateProjectCreate.submit_success
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        projectCreateInputChange: projectCreateInputChange,
        updateProjectCreate: updateProjectCreate,
        actionLogout: actionLogout,
        getUserInfo: getUserInfo,
        onSubmitProject: submitProject
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProjectCreate);
