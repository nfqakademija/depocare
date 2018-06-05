import React  from 'react';
import {projectCreateInputChange} from "../../../reducer/projectCreate/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    ORGANIZATION_WEB_ADDRESS_CHANGE,
    ORGANIZATION_CODE_CHANGE,
    ORGANIZATION_PHONE_NUMBER_CHANGE,
    ORGANIZATION_STREET_ADDRESS_CHANGE,
    ORGANIZATION_NAME_CHANGE,
    ORGANIZATION_OWNER_PHONE_NUMBER_CHANGE,
    ORGANIZATION_OWNER_LAST_NAME_CHANGE,
    ORGANIZATION_OWNER_FIRST_NAME_CHANGE,
    ORGANIZATION_OWNER_EMAIL_ADDRESS_CHANGE,
    ORGANIZATION_EMAIL_ADDRESS_CHANGE,
    ORGANIZATION_IBAN_CHANGE,
    BANK_CHANGE
} from "../../../reducer/projectCreate/actions"
import Banks from '../../../Data/banks.json';

class AboutYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paysera: false,
            otherBank: false,
            otherBankSelected: false
        };
        this.selectedBank = this.selectedBank.bind(this);
    }
    componentDidMount() {
        if(this.props.bank === 1) {
            this.setState({
                paysera: true,
                otherBank: false
            });
        } else if (this.props.bank > 1) {
            this.setState({
                paysera: false,
                otherBank: true
            });
        }
    }
    changeOrganizationName(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_NAME_CHANGE, 'organization_name': e.target.value });
    }
    changeOrganizationIban(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_IBAN_CHANGE, 'organization_iban': e.target.value });
    }
    changeStreetAddress(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_STREET_ADDRESS_CHANGE, 'organization_street_address': e.target.value });
    }
    changePhoneNumber(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_PHONE_NUMBER_CHANGE, 'organization_phone_number': e.target.value });
    }
    changeEmailAddress(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_EMAIL_ADDRESS_CHANGE, 'organization_email_address': e.target.value });
    }
    changeCode(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_CODE_CHANGE, 'organization_code': e.target.value });
    }
    changeWebAddress(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_WEB_ADDRESS_CHANGE, 'organization_web_address': e.target.value });
    }
    changeFirstName(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_OWNER_FIRST_NAME_CHANGE, 'organization_owner_first_name': e.target.value });
    }
    changeLastName(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_OWNER_LAST_NAME_CHANGE, 'organization_owner_last_name': e.target.value });
    }
    changeOwnerPhoneNumber(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_OWNER_PHONE_NUMBER_CHANGE, 'organization_owner_phone_number': e.target.value });
    }
    changeOwnerEmailAddress(e) {
        this.props.projectCreateInputChange({type:ORGANIZATION_OWNER_EMAIL_ADDRESS_CHANGE, 'organization_owner_email_address': e.target.value });
    }
    selectedBank() {
        if (this.state.paysera) {
            return (
                <div className="col-xs-12 project-create-organization-input-fields">
                    <div className="col-xs-3 project-create-title">
                        Banko sąskaitos numeris:
                    </div>
                    <div className="col-xs-9 project-create-content">
                        <textarea className="form-control project-create-input-field" rows="1"
                              value={this.props.organization_iban}
                              onChange={this.changeOrganizationIban.bind(this)}
                        />
                    </div>
                </div>
            );
        } else if (this.state.otherBank) {
            return (
                <div>
                    <div className="col-xs-3 project-create-title">
                        Pasirinkite banką
                    </div>
                    <div className="col-xs-9 project-create-content">
                        <div className="form-group">
                            <select defaultValue={this.props.bank} className="form-control project-create-select" onChange={(e) => {this.props.projectCreateInputChange({type:BANK_CHANGE, 'bank': e.target.value });}}>
                                () => {
                                    Banks.map(function (item) {
                                        return <option key={item.id} value={item.id}>{item.bank_name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-12 project-create-organization-input-fields">
                        <div className="col-xs-3 project-create-title">
                        Banko sąskaitos numeris:
                        </div>
                        <div className="col-xs-9 project-create-content">
                            <textarea
                                className="form-control project-create-input-field"
                                rows="1"
                                value={this.props.organization_iban}
                                onChange={this.changeOrganizationIban.bind(this)}
                                required
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="project-create-intro">
                    <h1><strong>Paskyra</strong></h1>
                    <h3><p><strong>Identifikuokite jūsų NPO(NVO) kompanijos paskyrą bei susiekite su banko sąskaita.</strong></p>
                        <p>Pridėkite papildomą informaciją apie kompaniją bei banko sąskaitą į kurią bus siunčiama parama.</p></h3>
                </div>
                <div className="project-create-body">
                    <div className="col-xs-8 project-create-input">
                        <div className="row project-create-border">
                            <div className="project-create-organization-info">
                                <h3><strong>Organizacijos duomenys</strong></h3>
                            </div>
                            <div className="col-xs-12 project-create-organization-input-fields">
                                <div className="col-xs-3 project-create-title">
                                    Pavadimas:
                                </div>
                                <div className="col-xs-9 project-create-content">
                                    <textarea
                                        className="form-control project-create-input-field"
                                        rows="1"
                                        placeholder="“Maisto Bankas“"
                                        value={this.props.organization_name}
                                        onChange={this.changeOrganizationName.bind(this)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-xs-12 project-create-organization-input-fields">
                                <div className="col-xs-3 project-create-title">
                                    Adresas
                                </div>
                                <div className="col-xs-9 project-create-content">
                                    <textarea
                                        className="form-control project-create-input-field"
                                        rows="4"
                                        placeholder="Vytenio g. 54, LT-03229 Vilnius"
                                        value={this.props.organization_street_address}
                                        onChange={this.changeStreetAddress.bind(this)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-xs-12 project-create-organization-input-fields">
                                <div className="col-xs-3 project-create-title">
                                    Telefonas
                                </div>
                                <div className="col-xs-9 project-create-content">
                                    <div className="form-group">
                                        <div className="project-create-counter-wrap">
                                            <textarea
                                                className="form-control project-create-input-field"
                                                rows="1"
                                                maxLength='15'
                                                placeholder="+37011111111"
                                                value={this.props.organization_phone_number}
                                                onChange={this.changePhoneNumber.bind(this)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 project-create-organization-input-fields">
                                <div className="col-xs-3 project-create-title">
                                    El. Paštas:
                                </div>
                                <div className="col-xs-9 project-create-content">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control project-create-input-field"
                                            rows="1"
                                            maxLength='50'
                                            placeholder="pavyzdys@gmail.com"
                                            value={this.props.organization_email_address}
                                            onChange={this.changeEmailAddress.bind(this)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 project-create-organization-input-fields">
                                <div className="col-xs-3 project-create-title">
                                    Įmonės kodas
                                </div>
                                <div className="col-xs-9 project-create-content">
                                    <div className="form-group">
                                        <textarea
                                            className="form-control project-create-input-field"
                                            rows="1"
                                            maxLength='50'
                                            placeholder="192015172"
                                            value={this.props.organization_code}
                                            onChange={this.changeCode.bind(this)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 project-create-organization-input-fields">
                                <div className="col-xs-3 project-create-title">
                                     Svetainės adresas:
                                </div>
                                <div className="col-xs-9 project-create-content">
                                    <div className="form-group">
                                        <textarea className="form-control project-create-input-field" rows="1" maxLength='50'
                                            placeholder="http://www.maistobankas.lt"
                                            value={this.props.organization_web_address}
                                            onChange={this.changeWebAddress.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row project-create-border">
                            <div className="project-create-organization-info">
                                <h3><strong>Organizacijos vadovo duomenys</strong></h3>
                            </div>
                            <div className="col-xs-3 project-create-title">
                                Vardas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <textarea
                                        className="form-control project-create-input-field"
                                        rows="1"
                                        maxLength='50'
                                        placeholder="Jonas"
                                        value={this.props.organization_owner_first_name}
                                        onChange={this.changeFirstName.bind(this)}
                                        required

                                    />
                                </div>
                            </div>
                            <div className="col-xs-3 project-create-title">
                                Pavardė
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <textarea
                                        className="form-control project-create-input-field"
                                        rows="1"
                                        maxLength='50'
                                        placeholder="Kazlauskas"
                                        value={this.props.organization_owner_last_name}
                                        onChange={this.changeLastName.bind(this)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-xs-3 project-create-title">
                                Telefonas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <textarea
                                        className="form-control project-create-input-field"
                                        rows="1"
                                        maxLength='50'
                                        placeholder="+37011111111"
                                        value={this.props.organization_owner_phone_number}
                                        onChange={this.changeOwnerPhoneNumber.bind(this)}
                                        required

                                    />
                                </div>
                            </div>
                            <div className="col-xs-3 project-create-title">
                                El.Paštas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <textarea
                                        className="form-control project-create-input-field"
                                        rows="1"
                                        maxLength='50'
                                        placeholder="pavyzdys@gmail.com"
                                        value={this.props.organization_owner_email_address}
                                        onChange={this.changeOwnerEmailAddress.bind(this)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row project-create-border">
                            <div className="project-create-organization-info">
                                <h3><strong>Pasirinkite gavėjo sąskaitą</strong></h3>
                            </div>
                            <div className="project-create-organization-radio-button-list">
                                <label className="container-radio-buttons">
                                    <input type="radio" checked={this.state.paysera ? 'checked' : ''} name="radio"
                                        onChange={() => {
                                            this.setState({ paysera: true, otherBank:false});
                                            this.props.projectCreateInputChange({type:BANK_CHANGE, 'bank': 1 });
                                        }}
                                    />
                                    <strong>Paysera</strong>
                                    <span className="checkmark"/>
                                </label>
                                <label className="container-radio-buttons">
                                    <input type="radio" name="radio"
                                        checked={this.state.otherBank ? 'checked' : ''}
                                        onChange={() => {
                                            this.setState({ paysera: false, otherBank:true});
                                            this.props.projectCreateInputChange({type:BANK_CHANGE, 'bank': 2 });
                                        }}
                                    />
                                    <strong>Kiti bankai</strong> <span className="project-create-organization-bank-select-note">(Jeigu naudojate kita banką peržiūrėkite jums taikomus mokęsčius)</span>
                                    <span className="checkmark"/>
                                </label>
                            </div>
                            <div>
                                {this.selectedBank()}
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <p>
                            <strong>INFO</strong>
                        </p>
                        <p>
                            Visi projektų kūrėjai turi jausti didelę atsakomybę prieš savo klientą ir užsitarnauti jų pasitikėjimą, ypatingai tų, kurie dar nėra nieko girdėją apie jūsų labdaros fondą. Jūsų darbas užtikrinti, kad visa informacija, kurią suteikiate klientui yra tiksli bei teisinga ir tik nuo to priklausys ar jūsų projektas bus sėkmingas.
                        </p>

                        <p>
                            <strong>Ar kuriate projektą jau ne pirmą kartą?</strong>
                        </p>
                        <p>
                            Džiaugiamės, kad sugrįžote! Norėdami užtikrinti skaidrumą, kurdami naują projektą prisijunkite su jau naudotu profiliu, taip užtikrinsite didesnį klientų pasitikėjimą. Taip pat, nepamirškite įkelti nuorodų iš jau įgyvendintų projektų mūsų platformoje, klientas jausis labiau saugus padėdamas fondui, kuris gali įgyvendinti savo pažadus.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        projectCreateInputChange: projectCreateInputChange,
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        organization_name: state.projectCreate.organization_name,
        organization_street_address: state.projectCreate.organization_street_address,
        organization_phone_number: state.projectCreate.organization_phone_number,
        organization_email_address: state.projectCreate.organization_email_address,
        organization_code: state.projectCreate.organization_code,
        organization_web_address: state.projectCreate.organization_web_address,
        organization_owner_first_name: state.projectCreate.organization_owner_first_name,
        organization_owner_last_name: state.projectCreate.organization_owner_last_name,
        organization_owner_phone_number: state.projectCreate.organization_owner_phone_number,
        organization_owner_email_address: state.projectCreate.organization_owner_email_address,
        organization_iban: state.projectCreate.organization_iban,
        bank: state.projectCreate.bank
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(AboutYou);
