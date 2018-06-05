import React  from 'react';
import Dropzone from 'react-dropzone'
import {projectCreateInputChange} from "../../../reducer/projectCreate/actions";
import {connect} from "react-redux";
import { uploadAvatar } from "../../../reducer/updateProject/actions";
import {bindActionCreators} from "redux";
import Notifications from "../../Notifications";
import {BIOGRAPHY_CHANGE, FIRST_NAME_CHANGE, LAST_NAME_CHANGE}from "../../../reducer/projectCreate/actions"
const AVATAR_PATH = "/avatars/";
class AboutYou extends React.Component {
    constructor(props) {
        super(props);
    }

    onDrop(acceptedFiles, rejectedFiles) {
        if(acceptedFiles.length + rejectedFiles.length > 1) {
            Notifications.createNotification('error','Nepavyko išsaugoti nuotrakos','Prašome įkelti tik vieną nuotrauką.', 3000);
            return;
        }
        acceptedFiles.forEach(file => {
            let formData = new FormData();
            formData.append('file', file);
            this.props.uploadAvatar(
                formData
            ).then(() => {
                if (this.props.avatar_status === 200) {
                    Notifications.createNotification('success','Nuotrauka įkelta', '');
                } else {
                    Notifications.createNotification('error','Nepavyko išsaugoti nuotrakos','Įvyko klaida, nepavyko išsaugoti nuotraukos, prašome pamėginti dar kartą');
                }
            })
        });
    }

    changeBiography(e) {
        this.props.projectCreateInputChange({type:BIOGRAPHY_CHANGE, 'biography': e.target.value });
    }
    changeFirstName(e) {
        this.props.projectCreateInputChange({type:FIRST_NAME_CHANGE, 'first_name': e.target.value });
    }
    changeLastName(e) {
        this.props.projectCreateInputChange({type:LAST_NAME_CHANGE, 'last_name': e.target.value });
    }

    render() {
        return (
            <div>
                <div className="project-create-intro">
                    <h1><strong>Papasakokite plačiau apie save.</strong></h1>
                </div>
                <div className="project-create-body">
                    <div className="col-xs-8 project-create-input">
                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Profilio nuotrauka
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="dropzone">
                                    <Dropzone className="drop-down" onDrop={this.onDrop.bind(this)} accept="image/jpeg, image/png">
                                        <span style={{float: 'left'}} className="drop-down-text"><img style={{borderRadius: '50%', width: '94px', height: '94px'}} src={AVATAR_PATH + this.props.profile_image}/></span>
                                        <span className="drop-down-text">Įkelkite profilio nuotrauką.</span>
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
                                Jūsų vardas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <textarea
                                    className="form-control project-create-input-field"
                                    rows="1"
                                    placeholder="Jonas"
                                    disabled={this.props.flagHasActiveProject}
                                    value={this.props.firstName}
                                    onChange={this.changeFirstName.bind(this)}
                                />
                                <div className="project-create-comment">
                                    <p>
                                        Paleidę projektą, šios skilties keisti negalėsite
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Jūsų pavardė
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <textarea
                                    className="form-control project-create-input-field"
                                    rows="1"
                                    placeholder="Kazlauskas"
                                    disabled={this.props.flagHasActiveProject}
                                    value={this.props.lastName}
                                    onChange={this.changeLastName.bind(this)}
                                />
                                <div className="project-create-comment">
                                    <p>
                                        Paleidę projektą, šios skilties keisti negalėsite
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Trumpas jūsų darbo patirties aprašymas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <div className="project-create-counter-wrap">
                                        <textarea
                                            className="form-control project-create-input-field"
                                            rows="4"
                                            value={this.props.biography}
                                            onChange={this.changeBiography.bind(this)}
                                        />
                                    </div>
                                    <div className="project-create-comment">
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row project-create-border">*/}
                            {/*<div className="col-xs-3 project-create-title">*/}
                                {/*Google Analytics*/}
                            {/*</div>*/}
                            {/*<div className="col-xs-9 project-create-content">*/}
                                {/*<div className="form-group">*/}
                                    {/*<textarea placeholder="UA-XXXXXXXX-X" className="form-control project-create-input-field" rows="1"*/}
                                    {/*/>*/}
                                    {/*<div className="project-create-comment">*/}
                                        {/*<p>*/}
                                        {/*Pridėkite savo sekimo numerį, kad galėtumėte stebėti, kaip sekasi jūsų projektui mūsų paieškoje*/}
                                        {/*</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-xs-4">
                        <p>
                            <strong>Klientų pasitikėjimas</strong>
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
        uploadAvatar: uploadAvatar
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        firstName: state.projectCreate.first_name,
        lastName: state.projectCreate.last_name,
        flagHasActiveProject: state.User.userData.flag_has_active_project,
        biography: state.projectCreate.biography,
        profile_image: state.projectCreate.profile_image,
        avatar_status: state.updateProjectCreate.avatar_status
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(AboutYou);
