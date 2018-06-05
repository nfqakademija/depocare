import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getProject} from  '../../reducer/projects/actions';
import {addNewUserProjectTransaction} from  '../../reducer/transaction/actions';
import {Redirect} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import YouTube from 'react-youtube';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import throttle from "lodash.throttle";
import {HOME_PAGE} from '../../Data/Constants';
import DonateModal from "../DonateModal";
import {getUserInfo} from "../../reducer/user/actions";



const IMG_URL = "/projects_files/";


class SingleProjectView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {},
            loading: false,
            numPages: null,
            numbers: [],
            pageNumber: 1,
            width: 1200,
            redirect: false,
            redirectTo: '',
            showPDF: false,
            showYoutube: false,
            notExist: false
        };

        this.setDivSize = this.setDivSize.bind(this);
    }

    componentWillMount(){
        if(this.props.project) {
            this.props.project.long_description === "" && this.props.project.youtube === "" ?
                this.setState({project: this.props.project, showPDF: false, showYoutube: false}) :
            this.props.project.long_description === "" && this.props.project.youtube !== "" ?
                this.setState({project: this.props.project, showPDF: false, showYoutube: true}) :
            this.props.project.long_description !== "" && this.props.project.youtube === "" ?
                this.setState({project: this.props.project, showPDF: true, showYoutube: false}) :
                this.setState({project: this.props.project, showPDF: true, showYoutube: true});
        } else {
            this.setState({
                loading: true
            });
            this.props.getProject(this.props.match.params.project_id).then(() => {
                switch (this.props.status) {
                    case 200:
                        this.props.projectRedux.long_description === "" && this.props.projectRedux.youtube === "" ?
                            this.setState({loading: false, project: this.props.projectRedux, showPDF: false, showYoutube: false}) :
                        this.props.projectRedux.long_description === "" && this.props.projectRedux.youtube !== "" ?
                            this.setState({loading: false, project: this.props.projectRedux, showPDF: false, showYoutube: true}) :
                        this.props.projectRedux.long_description !== "" && this.props.projectRedux.youtube === "" ?
                            this.setState({loading: false, project: this.props.projectRedux, showPDF: true, showYoutube: false}) :
                            this.setState({loading: false, project: this.props.projectRedux, showPDF: true, showYoutube: true});
                        break;
                    case 204:
                        this.setState({
                            notExist: true
                        });
                        break;
                    default:
                        this.setState({loading: false, redirect: true, redirectTo: HOME_PAGE});
                        break;
                }
            });
        }
    }
    componentDidMount() {
        this.setDivSize();
        window.addEventListener("resize", throttle( () => this.setDivSize()));
    }
    componentWillUnmount () {
        window.removeEventListener("resize", throttle( () => this.setDivSize()));
    }
    setDivSize () {
        if(typeof this.pdfWrapper !== 'undefined' && this.pdfWrapper !== null) {
            this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
        }
    }
    onDocumentLoad(numPages){
        let numbers = [];
        for (let i = 1; i < numPages.pdfInfo.numPages+1; i++) {
            numbers[i] = i;
        }

        this.setState({
            showPDF: true,
            numbers: numbers
        });
    };
    static youTubeGetID(url){
        let ID = '';
        url = url + "";
        url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if(url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    }

    render() {
        if(this.state.notExist) {
            return <Redirect to='/projektai'/>
        }
        if(this.state.project.flag_create === 1) {
            return <Redirect to={HOME_PAGE}/>
        }
        if(this.state.redirect) {
            return <Redirect to={this.state.redirectTo}/>
        }
        if(localStorage.getItem('token') && this.props.User.dataReceived === false && this.props.User.loading === false)
        {
            this.props.onGetUserInfo();
        }
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        if(!this.state.loading) {
            return (
                <div>
                    <div className="container container-project-view-info project-info-view">
                        <div className="col-md-12 project-view-info-wrapper">
                            <div className="row">
                                <div className="col-md-2 col-sm-12 project-view-charity-fund">
                                    <h5>{this.state.project.charity_fund}</h5>
                                    <h5>{this.state.project.city.city}</h5>
                                </div>
                                <div className="col-md-10 col-sm-12 project-view-top-info">
                                    <div className="project-view-info-title-wrapper">
                                        <h1 className="project-view-info-title">
                                            {this.state.project.title}
                                        </h1>
                                    </div>
                                    <div className="project-view-info-description-wrapper">
                                        <p className="project-view-info-description">
                                            {this.state.project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-view-image-bundle-wrapper">
                                <div className="col-md-9 col-sm-12 project-view-image-wrapper">
                                    <img src={IMG_URL+this.state.project.image} className="project-view-image"/>
                                </div>
                                <div className="col-md-3 col-sm-12 project-view-bundle">
                                    <div className="project-view-goal-wrapper">
                                        <div className="project-view-goal-inline">
                                            <div className="project-view-goal-text">Reikia <img className="project-view-bottle-image" src="https://d30y9cdsu7xlg0.cloudfront.net/png/100145-200.png"/></div>
                                            <div className="project-view-blue-text"><b>{this.state.project.goal*10}</b></div>
                                        </div>
                                        <div className="project-view-goal-inline project-view-goal-inline-right">
                                            <div className="project-view-goal-text">Surinkta</div>
                                            <div className="project-view-blue-text"><b>{Math.round(
                                                !this.state.project.reached || this.state.project.reached <= 0
                                                ? 0
                                                :this.state.project.reached / this.state.project.goal * 100) + '%'}
                                                </b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w3-light-grey w3-light-grey w3-tiny project-view-progress-bar">
                                        <div className="w3-blue project-view-progress-bar-inside" style={{
                                            width:
                                                !this.state.project.reached || this.state.project.reached <= 0
                                                ? 0
                                                : this.state.project.reached / this.state.project.goal * 100 > 100
                                                    ? 100
                                                    :this.state.project.reached / this.state.project.goal * 100
                                                    + '%',
                                            height: '8px'}}/>
                                    </div>
                                    <div className="project-view-goal-text">Liko dienų</div>
                                    <div className="project-view-blue-text"><b>{this.state.project.duration}</b></div>
                                    <div className="project-view-button-wrapper">
                                        <DonateModal  modalProps={{
                                            url: this.props.location,
                                            title: this.state.project.title,
                                            balance: this.props.userBalance*10,
                                            projectId: this.state.project.id,
                                            status: this.props.statusTransaction,
                                            addNewUserProjectTransaction: this.props.onAddNewUserProjectTransaction
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 project-view-info-tab-buttons">
                                <Tabs forceRenderTabPanel={true}>
                                    <TabList>
                                        {this.state.showPDF ? <Tab className="react-tabs__tab">Istorija</Tab> : ''}
                                        {this.state.showYoutube ? <Tab className="react-tabs__tab">Video</Tab> : ''}
                                        <Tab className="react-tabs__tab">Organizacija</Tab>
                                    </TabList>

                                    <div className="col-md-12 project-view-info-description-wrapper">
                                        {this.state.showPDF ?
                                            <TabPanel>
                                                <div id="row" style={{height: "auto", display: "flex"}}>
                                                    <div id="placeholderWrapper" style={{height: "auto"}}/>
                                                    <div style={{width: "100%"}} id="pdfWrapper" ref={(ref) => this.pdfWrapper = ref}>
                                                        <div>
                                                            <Document
                                                                file={this.state.project.long_description}
                                                                onLoadSuccess={this.onDocumentLoad.bind(this)}
                                                                loading={
                                                                  <div className="project-view-info-pdf-loading">
                                                                      <div id="clearBtn2" className="clearBtn2 project-create-loader"/>
                                                                      <div className="project-create-saving"/>
                                                                  </div>}
                                                                onLoadError={() => {this.setState({showPDF: false})}}
                                                                onSourceError={() => {this.setState({showPDF: false})}}
                                                                error={<div/>}
                                                                noData={<div/>}>
                                                                {
                                                                    this.state.numbers.map(page => (
                                                                        <Page key={page} pageNumber={page} width={this.state.width}/>))
                                                                }
                                                            </Document>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel> : ''
                                        }
                                        {this.state.showYoutube ?
                                            <TabPanel>
                                                <div className="embed-responsive embed-responsive-16by9">
                                                    <YouTube className="embed-responsive-item" id="ytplayer" videoId={SingleProjectView.youTubeGetID(this.state.project.youtube).toString()} opts={opts}/>
                                                </div>
                                            </TabPanel> : ''
                                        }
                                        <TabPanel>
                                            <div className="project-view-info-organization-wrapper">
                                                <h1 className="project-view-info-organization-big-text">{typeof(this.state.project.organization) === 'undefined' ? this.state.project.organization_name : this.state.project.organization.organization_name}</h1>
                                                <h2 className="project-view-info-organization-small-text">{typeof(this.state.project.organization) === 'undefined' ? this.state.project.organization_web_address : this.state.project.organization.organization_web_address}</h2>
                                                <h2 className="project-view-info-organization-small-text">{typeof(this.state.project.organization) === 'undefined' ? this.state.project.organization_email_address : this.state.project.organization.organization_email_address}</h2>
                                                <h2 className="project-view-info-organization-small-text">{typeof(this.state.project.organization) === 'undefined' ? this.state.project.organization_phone_number : this.state.project.organization.organization_phone_number}</h2>
                                                <h2 className="project-view-info-organization-small-text">{typeof(this.state.project.organization) === 'undefined' ? this.state.project.organization_street_address : this.state.project.organization.organization_street_address}</h2>
                                                <h2 className="project-view-info-organization-small-text">{typeof(this.state.project.organization) === 'undefined' ? this.state.project.organization_iban : this.state.project.organization.organization_iban}</h2>
                                            </div>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>);
        } else {
            return (
                <div>
                    <div id="clearBtn2" className="clearBtn2 project-create-loader"/>
                    <div className="project-create-saving"/>
                </div>);
        }
    }
}

const mapStateToProps = (state) => ({
    User:state.User,
    projectRedux: state.projects.project,
    status: state.projects.status,
    userBalance: state.User.userData.balance,
    statusTransaction: state.Transaction.status,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onGetUserInfo: getUserInfo,
        getProject: getProject,
        onAddNewUserProjectTransaction: addNewUserProjectTransaction
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProjectView);
