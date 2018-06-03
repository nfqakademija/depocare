import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import Notifications from '../Notifications';

class TopNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.rightNavContent = this.rightNavContent.bind(this);
    }

    rightNavContent() {
        const loading = this.props.User.loading;
        const done = this.props.User.dataReceived;
        if (loading) {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>Kraunama...</li>
                </ul>
            );
        }
        else {
            if (done) {
                return (
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden-xs"><Link to="">
                            <img className="project-view-bottle-image project-view-bottle-image-nav" src="https://d30y9cdsu7xlg0.cloudfront.net/png/100145-200.png"/>
                            {this.props.User.userData.balance*10}</Link></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" style={{paddingLeft: '0px'}} data-toggle="dropdown" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                               <div className="navbar-profile-image-wraper">    {this.props.User.userData.firstname}<img className="navbar-profile-image" src={'/avatars/' + this.props.User.userData.image}/></div>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><Link to='/profilis'>Mano paskyra</Link></li>
                                <li className="dropdown-item"><Link to='/mano_projektai'>Kurti projektą</Link></li>
                                <li className="dropdown-item"><Link to='/atsijungti'><span className="glyphicon glyphicon-log-out"/> Atsijungti</Link></li>
                            </ul>
                        </li>
                    </ul>
                );
            }
            else {
                return (
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to='/registruotis'><span className="glyphicon glyphicon-user"/> Registruotis</Link></li>
                        <li><Link to='/prisijungti'><span className="glyphicon glyphicon-log-in"/> Prisijungti</Link></li>
                    </ul>
                );
            }
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-main">
                <div className="container-fluid navbar-margin-fix">
                    <div className="navbar-header navbar-margin-fix">
                        <button type="button" className="navbar-toggle collapsed btn btn-primary btn-circle btn-xl navbar-collapse-button"
                                data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false"><i className="fa fa-list"/></button>
                        <Link to="" className="navbar-brand navbar-brand-style"><b style={{color: '#07418a'}}>DepoCare</b></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to='/projektai'>Projektai</Link></li>
                            <li><Link to='/'>Apie</Link></li>
                        </ul>
                        {this.rightNavContent()}
                    </div>
                </div>
                <Notifications/>
            </nav>
        )
    }
}

const mapStateToProps = ({ User }) => ({
    User,
});


export default connect(mapStateToProps)(TopNavigation);

