import React from 'react';
import { Link } from 'react-router-dom';
import {debounce} from 'throttle-debounce';
import {actionRegister} from "../reducer/register/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Redirect } from 'react-router';

class UserRegister extends React.Component {
    componentWillUnmount(){
        this.setState({password: '', passwordConfirm: ''});
    }

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            firstName: '', firstNameError: '', firstNameClass: '', firstNameValid: false, firstNameIsLoading: false,
            lastName: '', lastNameError: '', lastNameClass: '', lastNameValid: false, lastNameIsLoading: false,
            email: '', emailError: '', emailClass: '', emailValid: false, emailIsLoading: false,
            emailConfirm: '', emailConfirmError: '', emailConfirmClass: '', emailConfirmValid: false, emailConfirmIsLoading: false,
            password: '', passwordError: '', passwordClass: '', passwordValid: false, passwordIsLoading: false,
            passwordConfirm: '', passwordConfirmError: '', passwordConfirmClass: '', passwordConfirmValid: false, passwordConfirmIsLoading: false,
        };
        this.handleFirstNameChange = debounce(500, this.handleFirstNameChange);
        this.handleLastNameChange = debounce(500, this.handleLastNameChange);
        this.handleEmailChange = debounce(500, this.handleEmailChange);
        this.handleEmailConfirmationChange = debounce(500, this.handleEmailConfirmationChange);
        this.handlePasswordChange = debounce(500, this.handlePasswordChange);
        this.handlePasswordConfirmationChange = debounce(500, this.handlePasswordConfirmationChange);
        this.onSubmit= this.onSubmit.bind(this);
        this.checkStatus= this.checkStatus.bind(this);
    }
    delayFirstName(e) {
        if(e.target.value !== "") {
            this.setState({firstName: e.target.value, firstNameIsLoading: true,firstNameValid: false, firstNameError: '', firstNameClass: '' });
        } else {
            this.setState({firstName: e.target.value, firstNameIsLoading: false, firstNameValid: false, firstNameError: '', firstNameClass: '' });
        }
        this.handleFirstNameChange(e.target.value);
    }
    handleFirstNameChange(value){
        /^[a-z ,.'-]{2,}$/i.test(value) ? this.setState({ firstNameError: "", firstNameClass: "", firstNameValid: true, firstNameIsLoading: false }) : this.setState({ firstNameError: 'Netinkamas vardas', firstNameClass: 'input-error', firstNameValid: false, firstNameIsLoading: false});
        if(value === '') {
            this.setState({
                firstNameError: '',
                firstNameClass: ''
            })
        }
    };

    delayLastName(e) {
        if(e.target.value !== "") {
            this.setState({lastName: e.target.value, lastNameIsLoading: true, lastNameValid: false, lastNameError: '', lastNameClass: ''});
        } else {
            this.setState({lastName: e.target.value, lastNameIsLoading: false, lastNameValid: false, lastNameError: '', lastNameClass: ''});
        }
        this.handleLastNameChange(e.target.value);
    }
    handleLastNameChange(value){
        /^[a-z ,.'-]{2,}$/i.test(value) && value.length > 1 ? this.setState({ lastNameError: "",  lastNameClass: "", lastNameValid: true, lastNameIsLoading: false}) : this.setState({ lastNameError: 'Netinkama pavardė', lastNameClass: 'input-error', lastNameValid: false, lastNameIsLoading: false });
        if(value === '') {
            this.setState({
                lastNameError: '',
                lastNameClass: ''
            })
        }
        this.setState({lastName: value })

    };

    delayEmail(e) {
        if(e.target.value !== "") {
            this.setState({email: e.target.value, emailIsLoading: true, emailValid: false, emailError: '', emailClass: ''});
        } else {
            this.setState({email: e.target.value, emailIsLoading: false, emailValid: false, emailError: '', emailClass: ''});
        }

        this.handleEmailChange(e.target.value);
    }
    handleEmailChange(value){
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? this.setState({ emailError: "",  emailClass: "", emailValid: true, emailIsLoading: false}) : this.setState({ emailError: 'Netinkamas el. paštas', emailClass: "input-error", emailValid: false, emailIsLoading: false });
        if(value === '') {
            this.setState({
                emailError: '',
                emailClass: ''
            })
        }
        this.setState({email: value });
        if(this.state.emailConfirm !== "") {
            this.state.emailConfirm.toLowerCase() === value.toLowerCase()   ? this.setState({ emailConfirmError: "",  emailConfirmClass: "", emailConfirmValid: true, isLoading: false}) : this.setState({ emailConfirmError: 'Nesutampa slaptažodžiai', emailConfirmClass: "input-error", emailConfirmValid: false, isLoading: false });
        }
    };

    delayEmailConfirmation(e) {
        if(e.target.value !== "") {
            this.setState({emailConfirm: e.target.value, emailConfirmIsLoading: true, emailConfirmValid: false, emailConfirmError: '', emailConfirmClass: ''});
        }
        else {
            this.setState({emailConfirm: e.target.value, emailConfirmIsLoading: false, emailConfirmValid: false, emailConfirmError: '', emailConfirmClass: ''});
        }
        this.handleEmailConfirmationChange(e.target.value);
    }
    handleEmailConfirmationChange(value){
        this.state.email.toLowerCase() === value.toLowerCase() ? this.setState({ emailConfirmError: "",  emailConfirmClass: "", emailConfirmValid: true, emailConfirmIsLoading: false}) : this.setState({ emailConfirmError: 'Nesutampa el. paštas', emailConfirmClass: "input-error", emailConfirmValid: false, emailConfirmIsLoading: false });
        if(value === '') {
            this.setState({
                emailConfirmError: '',
                emailConfirmClass: ''
            })
        }
        this.setState({emailConfirm: value })
    };

    delayPassword(e) {
        if(e.target.value !== "") {
            this.setState({password: e.target.value, passwordIsLoading: true, passwordValid: false, passwordError: '', passwordClass: ''});
        }
        else {
            this.setState({password: e.target.value, passwordIsLoading: false, passwordValid: false, passwordError: '', passwordClass: ''});
        }
        this.handlePasswordChange(e.target.value);
    }
    handlePasswordChange(value){
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^.{8,}$/.test(value) ? this.setState({ passwordError: "",  passwordClass: "", passwordValid: true, passwordIsLoading: false}) : this.setState({ passwordError: 'Slaptažodį sudaro 8 simboliai, bent vienas skaičius, viena didžioji ir viena mažoji raidė', passwordClass: "input-error", passwordValid: false, passwordIsLoading: false });
        this.setState({password: value });
        if(value === '') {
            this.setState({
                passwordError: '',
                passwordClass: ''
            })
        }
        if(this.state.passwordConfirm !== "") {
            this.state.passwordConfirm === value ? this.setState({ passwordConfirmError: "",  passwordConfirmClass: "", passwordConfirmValid: true, passwordIsLoading: false}) : this.setState({ passwordConfirmError: 'Nesutampa slaptažodžiai', passwordConfirmClass: "input-error", passwordConfirmValid: false, passwordIsLoading: false });
        }
    };

    delayPasswordConfirmation(e) {
        if(e.target.value !== "") {
            this.setState({passwordConfirm: e.target.value, passwordConfirmIsLoading: true, passwordConfirmValid: false, passwordConfirmError: '', passwordConfirmClass: ''});
        }
        else {
            this.setState({passwordConfirm: e.target.value, passwordConfirmIsLoading: false, passwordConfirmValid: false, passwordConfirmError: '', passwordConfirmClass: ''});
        }
        this.handlePasswordConfirmationChange(e.target.value);
    }
    handlePasswordConfirmationChange(value){
        this.state.password === value ? this.setState({ passwordConfirmError: "",  passwordConfirmClass: "", passwordConfirmValid: true, passwordConfirmIsLoading: false}) : this.setState({ passwordConfirmError: 'Nesutampa slaptažodžiai', passwordConfirmClass: "input-error", passwordConfirmValid: false, passwordConfirmIsLoading: false });
        if(value === '') {
            this.setState({
                passwordConfirmError: '',
                passwordConfirmClass: ''
            })
        }
        this.setState({passwordConfirm: value })
    };

    onSubmit(e){

        e.preventDefault();
        const email = this.state.email;
        const name = this.state.firstName;
        const lastname = this.state.lastName;
        const password = this.state.password;
        const re_password = this.state.passwordConfirm;
        this.props.onRegister(email, name, lastname, password, re_password);

    }

    checkStatus(){
        const reg = this.props.Register;
        if(reg.registered){
            this.setState({redirect: true});
        }
        if(reg.error){
            switch (reg.error.status){
                case 400:
                    return <h4>Vartotojas su šiuo el. pašto adresu jau yra!</h4>;
                case 404:
                    return <h4>Atsiprašome, įvyko klaida</h4>;
            }
        }
    }

    render() {
        const button = this.props.Register.loading ? (
                <button disabled type="submit" id="contact-submit">
                    <i className="fa fa-circle-o-notch fa-spin button-loading-spinner"/>Registruotis
                </button>
            ) :
                this.state.firstNameValid && this.state.lastNameValid && this.state.emailConfirmValid && this.state.emailValid && this.state.passwordValid && this.state.passwordConfirmValid ? (
                    <button name="submit" type="submit" id="contact-submit">Registruotis</button>
            ) : (
                    <button disabled name="submit" type="submit" id="contact-submit">Registruotis</button>
            );
        const { redirect } = this.state;

        if (redirect){
            return  <Redirect to='/prisijungti'/>;
        }
        return (
            <div className="container-register">
                <form id="contact" onSubmit={this.onSubmit}>
                    <h4 style={{
                        width: '50%',
                        margin: '0 auto'
                    }}>Turi paskyrą? <Link className="blue" to='/prisijungti'>Prisijunk</Link></h4>
                    <hr />
                    <h3>Registracija</h3>
                    {this.checkStatus()}
                    <fieldset>
                        <input className={this.state.firstNameClass} placeholder="Vardas" type="text" autoFocus
                               value={this.state.firstName}
                               onChange={this.delayFirstName.bind(this)}/>
                        <label>{this.state.firstNameError} </label>
                        {this.state.firstNameIsLoading ? (<div id="clearBtn2" className="clearBtn2 loader"/>): (<div/>)}
                    </fieldset>
                    <fieldset>
                        <input className={this.state.lastNameClass} placeholder="Pavardė" type="text"
                               value={this.state.lastName}
                               onChange={this.delayLastName.bind(this)}/>
                        <label>{this.state.lastNameError} </label>
                        {this.state.lastNameIsLoading ? (<div id="clearBtn2" className="clearBtn2 loader"/>) : (<div/>)}
                    </fieldset>
                    <fieldset>
                        <input className={this.state.emailClass} placeholder="El. paštas" type="text"
                               value={this.state.email}
                               onChange={this.delayEmail.bind(this)}/>
                        <label>{this.state.emailError} </label>
                        {this.state.emailIsLoading ?  (<div id="clearBtn2" className="clearBtn2 loader"/>) : (<div/>)}
                    </fieldset>
                    <fieldset>
                        <input className={this.state.emailConfirmClass} placeholder="Pakartoti el. paštą" type="text"
                               value={this.state.emailConfirm}
                               onChange={this.delayEmailConfirmation.bind(this)}/>
                        <label>{this.state.emailConfirmError} </label>
                        {this.state.emailConfirmIsLoading ?  (<div id="clearBtn2" className="clearBtn2 loader"/>) : (<div/>)}
                    </fieldset>
                    <fieldset>
                        <input className={this.state.passwordClass} placeholder="Slaptažodis" type="password"
                               value={this.state.password}
                               onChange={this.delayPassword.bind(this)}/>
                        <label>{this.state.passwordError} </label>
                        {this.state.passwordIsLoading ?  (<div id="clearBtn2" className="clearBtn2 loader"/>) : (<div/>)}
                    </fieldset>
                    <fieldset>
                        <input className={this.state.passwordConfirmClass} placeholder="Pakartoti slaptažodį" type="password"
                               value={this.state.passwordConfirm}
                               onChange={this.delayPasswordConfirmation.bind(this)}/>
                        <label>{this.state.passwordConfirmError} </label>
                        {this.state.passwordConfirmIsLoading ?  (<div id="clearBtn2" className="clearBtn2 loader"/>) : (<div/>)}
                    </fieldset>
                    <fieldset>
                        {button}
                    </fieldset>
                    <hr/>
                    <h5>Susikurdamas paskyrą sutinkate su <Link className="blue" to="/">taisyklėmis</Link></h5>
                    <div style={{
                        width: '100%',
                        height: '20px',
                        borderBottom: '1px solid black',
                        textAlign: 'center',
                    }}>
                        <span style={{
                            fontSize: '12px',
                            backgroundColor: '#F9F9F9',
                            padding: '0 10px'}}>Arba
                        </span>
                    </div>
                    <div style={{marginTop: '20px',textAlign:'center',display:'block'}}>
                        <a style={{paddingTop: '13px'}} href="#" className="btn btn-default btn-circle btn-lg fa fa-facebook"/>
                        <a style={{paddingTop: '13px'}} href="#" className="btn btn-default btn-circle btn-lg fa fa-google"/>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = ({ Register }) => ({
    Register
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onRegister: actionRegister
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
