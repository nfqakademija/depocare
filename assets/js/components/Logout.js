import React from 'react';
import {Redirect} from 'react-router';
import {bindActionCreators} from "redux";
import {actionLogout} from '../reducer/login/actions';
import {connect} from "react-redux";
import {clearUserData} from "../reducer/user/actions";

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return <Redirect to='/prisijungti'/>;
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onLogout: actionLogout
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
