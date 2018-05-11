import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {handleFavoriteProjectsChange} from '../../../reducer/projects/actions';


class SingleProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorite: false
        };

        this.procent = this.props.project.reached / this.props.project.goal * 100 + '%';
        this.handleFavoriteClick=this.handleFavoriteClick.bind(this);
        this.checkIfFavorite=this.checkIfFavorite.bind(this);
    }

    checkIfFavorite(){
        let currentId = this.props.project.id;
        let favorite = false;
        this.props.User.userData.favorite_projects.forEach(function(item) {
            if(currentId === item.id && favorite === false){
                favorite = true;
            }
        });
        if(this.state.favorite !== favorite){
            this.setState({
                favorite
            });
        }
    }

    handleFavoriteClick()
    {
        console.log("HANDLING");
        let action;
        if(this.state.favorite){
            action = "delete";
        } else  {
            action = "add";
        }
        this.props.onHandleFavoriteProjectsChange(this.props.project, action)

    }

    render() {
        this.checkIfFavorite();
        return (
            <div className="projects-view-grid">
                <img src={this.props.project.image} className="projects-view-img"/>
                    <div className="projects-view-title-by d-inline">
                        <span
                            onClick={this.handleFavoriteClick}
                            className={
                            (this.state.favorite)
                            ? "projects-view-single-favorite glyphicon glyphicon-heart"
                            : "projects-view-single-favorite glyphicon glyphicon-heart-empty "
                        }
                        />
                        <h5 className="projects-view-h5">{this.props.project.title}</h5>
                        <h5 className="projects-view-h5-small">{this.props.project.charity_fund}</h5>
                    </div>
                <div className="w3-light-grey w3-light-grey w3-tiny"
                     style={{marginBottom: '15px', marginRight: '20px', marginLeft: '20px', height: '8px', borderRadius: '10px' }}>
                    <div className="w3-blue" style={{width: this.procent, height: '8px', borderRadius: '10px'}}/>
                </div>


                <h5 className="projects-view-h5-small">Tikslas:      {this.props.project.goal} &euro;</h5>
                <h5 className="projects-view-h5-small">Surinkta:    {this.props.project.reached} &euro;</h5>
                <div className="wrapper">
                    <Link style={{ textDecoration: 'none' }} to={'/projektas/'+this.props.project.id}><input type="submit" className="btn-submit blue-button" value="Prisidėk"/></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ projects, User }) => ({
    projects,
    User
});

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        onHandleFavoriteProjectsChange: handleFavoriteProjectsChange
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject);
