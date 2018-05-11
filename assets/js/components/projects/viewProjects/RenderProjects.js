import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadMoreProjects, getFavoriteProjects} from '../../../reducer/projects/actions';
import SingleProject from './SingleProject';
import Waypoint from 'react-waypoint';

class RenderProjects extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            currentCategory: -1,
            gotProjectsTo: -1
        };

        this.getProjects=this.getProjects.bind(this);
        this.loadMoreItems=this.loadMoreItems.bind(this);
        this.renderItems=this.renderItems.bind(this);
        this.message=this.message.bind(this);
    }

    componentDidMount(){
        if(this.props.category === "Favorite"){
            this.props.onGetFavoriteProjects(this.props.User.userData.favorite_projects);
        }
    }

    renderItems() {
        const $data = this.props.projects.projectsData;
        if($data && $data !== undefined){
            return $data.map((project, index) => {
                return (
                    <div key = {index} className="col-xs-12 col-md-4 col-sm-6 product-grid">
                        <SingleProject project={project}/>
                    </div>
                );
            })
        }
    }

    getProjects(){
        if(this.state.currentCategory !== this.props.category){
            this.props.projects.projectsData = [];
            this.props.projects.isMore = true;

            this.setState({
                currentCategory: this.props.category,
                gotProjectsTo: -1
            });
        }

        if(this.props.category !== -1 && this.props.category !== "Favorite" && this.props.projects.projectsData.length === 0 && !this.props.projects.loadingProjects)
        {
            if(this.props.category){
                this.props.onLoadMoreProjects("/"+this.props.category, 0, 6);
            }
            else{
                this.props.onLoadMoreProjects("", 0, 6);
            }

            this.setState({
                gotProjectsTo: 5
            });
        }
    }

    loadMoreItems(){
        if(!this.props.projects.loadingProjects && this.state.gotProjectsTo > 0)
        {
            let itemsToAdd = 3;
            let getFrom = this.state.gotProjectsTo+1;

            if(this.props.category === "Favorite"){
                return;
            }
            else if(this.props.category){
                this.props.onLoadMoreProjects("/"+this.props.category, getFrom, itemsToAdd);
            }
            else{
                this.props.onLoadMoreProjects("", getFrom, itemsToAdd);
            }

            this.setState({
                gotProjectsTo: this.state.gotProjectsTo+itemsToAdd
            });
        }
    }

    renderWaypoint() {

        if (!this.state.isLoading) {
            return (
                <Waypoint
                    onEnter={this.loadMoreItems}
                />
            );
        }
    }

    message(){
        if(!this.props.projects.isMore){
            return <h5>Daugiau projektų nėra</h5>
        }
    }

    render() {
        this.getProjects();
        return (
           <div>
               <div className="container">
                   {/*<h1 className="text-center">{this.props.title}</h1>*/}
                   <div className="row">
                       {this.renderItems()}
                   </div>
                   <div className="text-center">
                       {this.renderWaypoint()}
                       {this.message()}
                   </div>
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

        onLoadMoreProjects: loadMoreProjects,
        onGetFavoriteProjects: getFavoriteProjects

    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderProjects);
