import React  from 'react';
import {projectCreateInputChange} from "../../../reducer/projectCreate/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ReactS3 from "../../ReactS3/ReactS3";
import Notifications from "../../Notifications";
import Dropzone from 'react-dropzone'
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/entry.webpack';

class Story extends React.Component {
    constructor(props) {
        super(props);
    }

    onDrop(acceptedFiles, rejectedFiles) {
        if (acceptedFiles.length + rejectedFiles.length > 1) {
            Notifications.createNotification('error', 'Nepavyko išsaugoti failo', 'Prašome įkelti tik vieną failą.', 3000);
            return;
        }
        acceptedFiles.forEach(file => {
            Object.defineProperty(file, 'name', {
                writable: true,
                value: '_depocare_pdf_' + file.name + '_depocare_pdf_' + Date.now()
            });
            ReactS3.upload(file, {
                bucketName: 'haroldas-depocare',
                region: 'eu-central-1',
                albumName: 'pdf',
                accessKeyId: 'AKIAJHHG2MAQQW43W2QQ',
                secretAccessKey: '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',
            })
                .then((data) => {
                    if (data.result.status === 204) {
                        Notifications.createNotification('success', 'Failas įkeltas', '');
                        this.changeLongDescription(data.location);
                    } else {
                        Notifications.createNotification('error', 'Nepavyko išsaugoti failo', 'Įvyko klaida, nepavyko išsaugoti failo, prašome pamėginti dar kartą');
                    }
                })
        });
    }

    changeLongDescription(value) {
        this.props.projectCreateInputChange({type: 'LONG_DESCRIPTION_CHANGE','long_description': value});
    };

    changeYoutube(e) {
        this.props.projectCreateInputChange({type: 'YOUTUBE_CHANGE','youtube': e.target.value});
    }

    render() {
        const page = 1;
        return (
            <div>
                <div className="project-create-intro">
                    <h1><strong>Plačiau pristatykite savo projekto idėją, bei tikslą.</strong></h1>
                    <h3>Ši skiltis yra kuriama klientui, norinčiam aiškiau suprasti jūsų tikslus bei kiek jūs pajėgus įgyvendinti idėją, tad naudokite pavyzdinę medžiagą, kaip potencialiai atrodys jūsų įgyvendintas projektas. Tai gali būti, nuotraukos, filmuota medžiagą, “sketchai” bei platus projekto aprašymas. </h3>
                </div>

                <div className="project-create-body">
                    <div className="col-xs-8 project-create-input">
                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Projekto video
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <textarea className="form-control project-create-input-field" rows="1"
                                        value={this.props.youtube}
                                        onChange={this.changeYoutube.bind(this)}
                                    />
                                    <div className="project-create-comment">
                                        <p>
                                            <strong>Youtube nuoroda.</strong>
                                        </p>
                                        <p>
                                            Filmuota medžiaga netik yra smagi akiai, bet ir tikslinė forma tiesioginio kontakto su klientu užmezgimui, nebijokite būti įdomus, kitokie, tačiau smagūs ir galintys įsipareigoti įgyvendinti savo projektą.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Projekto išsamus aprašymas
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="form-group">
                                    <div className="project-create-comment">
                                        <p>
                                            Šioje skiltyje pristatykite šplėstinį projekto aprašymą – kaip jums kilo tokia idėja, kodėl manote, kad jūsų projektas yra svarbus, ką bandote pakeisti, na ir kaip ketinate įgyvenditi projektą surinkę reikalingą sumą.
                                        </p>
                                    </div>
                                    <div className="dropzone">
                                        <Dropzone className="drop-down" onDrop={this.onDrop.bind(this)} accept=".pdf">
                                            {this.props.long_description === "" ?
                                                <span className="drop-down-text">Įkelkite PDF failą.</span> :
                                                <span>{this.props.long_description.split("_depocare_pdf_")[1]}</span>}
                                        </Dropzone>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row project-create-border">
                            <div className="col-xs-3 project-create-title">
                                Projekto D.U.K.
                            </div>
                            <div className="col-xs-9 project-create-content">
                                <div className="project-create-comment">
                                    <p>
                                        Galėsite pridėti dažniausiai užduodamus klausimus, kai projektas bus paleistas. <strong>Sužinokite daugiau.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-4">
                        <Document file={this.props.long_description}
                            loading={
                                <div className="project-view-info-pdf-loading">
                                    <div id="clearBtn2" className="clearBtn2 project-create-loader"/>
                                    <div className="project-create-saving"/>
                                </div>}
                            onLoadError={() => {return <div/>}}
                            onSourceError={() => {return <div/>}}
                            error={<div/>}
                            noData={<div/>}>
                            <Page pageNumber={page} />
                        </Document>
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
        youtube: state.projectCreate.youtube,
        long_description: state.projectCreate.long_description
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Story);