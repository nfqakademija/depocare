import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import {debounce} from "throttle-debounce";
import {bindActionCreators} from "redux";
import {actionLogin} from '../reducer/login/actions';
import {connect} from "react-redux";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            email: '', emailError: '', emailClass: '', emailValid: false,
            password: '', passwordError: '', passwordClass: '', passwordValid: false,
        };
        this.handleEmailChange = debounce(500, this.handleEmailChange);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
    }

    componentWillUnmount() {
        this.setState({password: '', passwordConfirm: ''});
    }

    componentDidMount(){
        const token = localStorage.getItem("token");
        if(token){
            this.setState({
                redirect: true
            })
        }
    }

    delayEmail(e) {
        this.setState({email: e.target.value, emailValid: false});
        this.handleEmailChange(e.target.value);
    }

    handleEmailChange(value){
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? this.setState({ emailError: "",  emailClass: "", emailValid: true}) : this.setState({ emailError: 'Netinkamas el. paštas', emailClass: "input-error", emailValid: false });
        if(value === '') {
            this.setState({
                emailError: '',
                emailClass: ''
            })
        }
        this.setState({email: value });
    };

    onSubmit(e){
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        this.props.onLogin(email, password);
                /*this.setState({
                    redirect: true
                })*/
    }

    handlePasswordChange(e){
        if(e.target.value === '') {
            this.setState({
                password: e.target.value,
                passwordError: '',
                passwordClass: '',
                passwordValid: false
            })
        } else {
            this.setState({password: e.target.value, passwordValid: true});
        }
    };

    checkStatus(){
        const loggedIn = this.props.userLogin.login;
        const error = this.props.userLogin.error;
        if(loggedIn){
            this.setState({
                redirect: true
            })
        }
        if(error){
            switch (error.status){
                case 401:
                    return <h4>Vartotojo su tokiu el. paštu ir/ar slaptažodžiu nėra</h4>;
                case 404:
                    return <h4>Atsiprašome, įvyko klaida</h4>;
                case 500:
                    return <h4>Atsiprašome, įvyko klaida</h4>;
            }
        }
    }

    render() {
        const button = this.props.userLogin.loading ? (
                <button disabled type="submit" id="contact-submit">
                    <i className="fa fa-circle-o-notch fa-spin button-loading-spinner"/>Prisijungti
                </button>
            ) : this.state.emailValid && this.state.passwordValid ? (
                <button type="submit" id="contact-submit">Prisijungti</button>
            ) : (
                <button disabled type="submit" id="contact-submit">Prisijungti</button>
            );
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        if (this.state.redirect){
            return  (<Redirect to={from}/>)
        }

        return (
            <div className="container-register">

                <form id="contact" onSubmit={this.onSubmit}>
                    <h3>Prisijungti </h3>
                    {this.checkStatus()}
                    <fieldset>
                        <input className={this.state.emailClass} placeholder="El. paštas" type="text" autoFocus
                           value={this.state.email}
                           onChange={this.delayEmail.bind(this)}
                        />
                    </fieldset>
                    <fieldset>
                        <input className={this.state.passwordClass} placeholder="Slaptažodis" type="password"
                               value={this.state.password}
                               onChange={this.handlePasswordChange.bind(this)}
                        />
                    </fieldset>
                    <Link className="blue" to='/'><h5>Pamiršai slaptažodį?</h5></Link>
                    <fieldset>
                        {button}
                    </fieldset>
                    <div className="form-check">
                        <input style={{marginRight: '5px'}} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <h5 style={{display: 'inline'}}  >Prisiminti mane</h5>
                    </div>
                    <hr/>
                    <h5 className="textCenter">Neturi paskyros? <Link className="blue" to="/registruotis">Registruokis!</Link></h5>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ Login }) => ({
    userLogin: Login,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onLogin: actionLogin
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
