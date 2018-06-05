import React from 'react';
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';
import SingleProject from '../viewProjects/SingleProject';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { projectCreateInputChange } from '../../../reducer/projectCreate/actions';
import { uploadPhoto } from "../../../reducer/updateProject/actions";
import {END_DATE_CHANGE, TITLE_CHANGE, CHARITY_FUND_CHANGE, DESCRIPTION_CHANGE, GOAL_CHANGE, CATEGORY_CHANGE, CITY_CHANGE} from "../../../reducer/projectCreate/actions";
import Cities from '../../../Data/cities.json'
import Categories from '../../../Data/categories.json'
import * as Constants from '../../../Data/Constants.js'
import Notifications from "../../Notifications";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charsLeftTitle: Constants.MAX_CHARS_TITLE-this.props.title.length,
            charsLeftShortBlurb: Constants.MAX_CHARS_SHORT_BLURB-this.props.description.length,
            date: this.createDate(this.props.end_date)
        }
    }

    onDrop(acceptedFiles, rejectedFiles) {
        if(acceptedFiles.length + rejectedFiles.length > 1) {
            Notifications.createNotification('error','Nepavyko išsaugoti nuotrakos','Prašome įkelti tik vieną nuotrauką.', 3000);
            return;
        }
        acceptedFiles.forEach(file => {
            let formData = new FormData();
            formData.append('file', file);
            this.props.uploadPhoto(
                formData
            ).then(() => {
                if (this.props.photo_status === 200) {
                    Notifications.createNotification('success','Nuotrauka įkelta', '');
                } else {
                    Notifications.createNotification('error','Nepavyko išsaugoti nuotrakos','Įvyko klaida, nepavyko išsaugoti nuotraukos, prašome pamėginti dar kartą');
                }

            })
        });
    }

    createDate(date) {
        if(date !== "") {
            let res = date.split('/');
            return moment(new Date(res[0], res[1] - 1, res[2]))
        } else {
            return moment(new Date());
        }
    }

    dateChange(date) {
        this.props.projectCreateInputChange({type: END_DATE_CHANGE,'end_date': date.format('l').replace(/-/gi,'/')});
        this.setState({
            date: date
        })
    }

    changeTitle(e) {
        this.props.projectCreateInputChange({type: TITLE_CHANGE,'title': e.target.value});
        this.setState({
            charsLeftTitle: Constants.MAX_CHARS_TITLE - e.target.value.length
        });
    }

    changeCharityFund(e) {
        this.props.projectCreateInputChange({type: CHARITY_FUND_CHANGE,'charity_fund': e.target.value});
    }

    changeDescription(e) {
        this.props.projectCreateInputChange({type:DESCRIPTION_CHANGE, 'description': e.target.value });
        this.setState({
            charsLeftShortBlurb: Constants.MAX_CHARS_SHORT_BLURB - e.target.value.length
        });
    }

    changeGoal(e) {
        this.props.projectCreateInputChange({type:GOAL_CHANGE, 'goal': e.target.value });
    }

    changeCategory(e) {
        this.props.projectCreateInputChange({type:CATEGORY_CHANGE, 'category': e.target.value });
    }

    changeCity(e) {
        this.props.projectCreateInputChange({type:CITY_CHANGE, 'city': e.target.value });
    }

    render() {
        return (
            <div>
                <div className="project-create-intro">
                    <h1><strong>Pradėkime!</strong></h1>
                    <h3>Sukurkite unikalų bei akiai patrauklų projektą jūsų nuotraukos, pavadinimo, aiškios projekto trukmės bei tikslo pagalba!</h3>
                </div>

                <div className="project-create-body">
                    <div className="col-xs-8 project-create-input">
                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Projekto nuotrauka
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="dropzone">
                                    <Dropzone className="drop-down" onDrop={this.onDrop.bind(this)} accept=".jpg,.png">
                                        <span className="drop-down-text">Įkelkite pagrindinę projekto nuotrauką.</span>
                                    </Dropzone>
                                </div>
                                <div className="project-create-comment">
                                    <p>
                                        Tai pirmas dalykas ką pamato jūsų projekto remėjai, tad pasirinkite “akiai patrauklią/užkabinančią” nuotrauką. <strong>Štai keli patarimai, kaip tai padaryti.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Projekto pavadimas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <div className="project-create-counter-wrap">
                                        <textarea
                                            className="form-control project-create-input-field"
                                            rows="1"
                                            maxLength={Constants.MAX_CHARS_TITLE}
                                            placeholder="“Darom 2018“"
                                            value={this.props.title}
                                            onChange={this.changeTitle.bind(this)}
                                            required
                                        />
                                        <span>{this.state.charsLeftTitle}</span>
                                    </div>
                                    <div className="project-create-comment">
                                        <p>
                                            Mūsų puslapio/ aplikacijos turėtojai galės rasti jūsų projektą tiesiogiai, raktinių žodžių paieškoje, tad sukurę trumpą, įsimintiną bei aiškų pavadinimą netik sutrumpinsite remėjų paiešką, bet ir galiausiai pasieksite savo projekto tikslą greičiau.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Labdaros fondas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <textarea
                                        className="form-control project-create-input-field"
                                        rows="1"
                                        placeholder="“Maisto Bankas“"
                                        value={this.props.charity_fund}
                                        onChange={this.changeCharityFund.bind(this)}
                                        required
                                    />
                                    <div className="project-create-comment">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Trumpas aprašymas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <div className="project-create-counter-wrap">
                                        <textarea
                                            className="form-control project-create-input-field" rows="2" maxLength={Constants.MAX_CHARS_SHORT_BLURB}
                                            value={this.props.description}
                                            onChange={this.changeDescription.bind(this)}
                                            required
                                        />
                                        <span>{this.state.charsLeftShortBlurb}</span>
                                    </div>
                                    <div className="project-create-comment">
                                        <p>
                                            Sukurkite trumpą, bet aiškų projekto aprašymą. “Padėkite, mums reikia pagalbos” tekstas mūsų klientui neaktualus, mūsų klientas daro gerus darbus, nes tai jį skatina jaustis gerai, džiaugsmingai, tad sukurkite pozityvų projekto aprašymą.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Kategorija
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <select defaultValue={this.props.category} className="form-control project-create-select" onChange={this.changeCategory.bind(this)}>
                                        {
                                            Categories.map(function (item) {
                                                return <option key={item.id} value={item.id}>{item.category}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Projekto vieta
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <select onChange={this.changeCity.bind(this)} defaultValue={this.props.city} className="form-control project-create-select">
                                        {
                                            Cities.map(function (item) {
                                                return <option key={item.id} value={item.id}>{item.city}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border project-create-content-date">
                            <div className="col-xs-3 project-create-title">
                                Projekto trukmė mūsų puslapyje
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <DatePicker
                                    locale="lt"
                                    dateFormat="YYYY/MM/DD"
                                    selected={this.state.date}
                                    onChange={this.dateChange.bind(this)}
                                    minDate={moment()}
                                    maxDate={moment().add(3, "months")}
                                    placeholderText="Pasirinkite datą"
                                />
                                <div className="project-create-comment">
                                    <p>
                                        Projekto pabaiga nuo sukūrimo: Pasirinkite datą.
                                        (Projekto laikas yra toks pats svarbus kaip ir jo tikslas bei renkama pinigų suma. Klientai neretai linkę rinktis greičiau įgyvendinamus projektus iki kol užsitarnausite jų pasitikėjimą. Po projekto pridavimo nebegalėsite keisti datos.)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Projekto finansiniai tikslai
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <textarea
                                    className="form-control project-create-input-field"
                                    rows="1"
                                    value={this.props.goal}
                                    onChange={this.changeGoal.bind(this)}
                                    required
                                />

                                <div className="project-create-comment">
                                    <p>
                                        DepoCare yra tikslinga labdaros fondų įgyvendinimo platforma, tad užsibrėžkite realius finansinius tikslus, kuriuos galėsite pasiekti mūsų pagalba. Jei jūsų projektas dėl kažkokių priežasčių nesurinks pilnos sumos pasibaigus terminui – visą jūsų surinktą sumą po lygiai išskirstysime kitiems toje kategorijoje esantiems fondams.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row project-create-border">*/}
                            {/*<div className="col-xs-3 project-create-title">*/}
                                {/*Projekto kūrėjai*/}
                            {/*</div>*/}
                            {/*<div className="col-xs-9 project-create-content">*/}
                                {/*<div className="project-create-comment margin-none">*/}
                                    {/*<p>*/}
                                        {/*Pridėkite projekto dalyvius, kurie galėtų redaguoti ar papildyti projekto aprašymą*/}
                                    {/*</p>*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                    {/*<Link style={{ textDecoration: 'none' }} to='/'><input type="submit" className="btn-submit blue-button" value="Pridėti"/></Link>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-xs-4">
                        <SingleProject project={this.props}/>
                    </div>
                </div>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        projectCreateInputChange: projectCreateInputChange,
        uploadPhoto: uploadPhoto
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        title: state.projectCreate.title,
        charity_fund: state.projectCreate.charity_fund,
        description: state.projectCreate.description,
        goal: state.projectCreate.goal,
        category: state.projectCreate.category,
        city: state.projectCreate.city,
        image: state.projectCreate.image,
        end_date: state.projectCreate.end_date,
        photo_status: state.updateProjectCreate.photo_status,
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Basic);
