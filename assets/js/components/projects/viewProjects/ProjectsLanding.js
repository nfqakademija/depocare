import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderProjects from './RenderProjects';
import {getCategories, loadMoreProjects} from '../../../reducer/projects/actions';

const IMG_URL = "../../Data/images/categorysGlyphs/";

class ProjectsLanding extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            currentCategory: "",
            currentTitle: "Arti tikslo!"
        };

        this.renderCategories=this.renderCategories.bind(this);
        this.renderSingleCategory=this.renderSingleCategory.bind(this);
    }

    componentDidMount(){

        this.props.onGetCategories();

    }

    changeActive(param, e){
        if(this.state.currentCategory === e.target.id)
        {
            this.setState({
                currentCategory: "",
                currentTitle: "Arti tikslo!"
            });
        }
        else{
            this.setState({
                currentCategory: e.target.id,
                currentTitle: param
            });
        }
    }

    renderCategories(){
        const $data = this.props.projects.categoriesData;
        if($data && $data !== undefined){
            return $data.map(category => {
                return (
                    this.renderSingleCategory(category.id, category.title, category.glyph)
                );
            })
        }
    }

    renderSingleCategory(id, title, img){
        return (
            <div
                key = {id}
                id={id}
                onClick={this.changeActive.bind(this, title)}
                className={
                    this.state.currentCategory == id ?
                        'col-lg-2 col-md-2 text-center category-button active-category' :
                        'col-lg-2 col-md-2 text-center category-button'
                }
            >
                <img id={id} className="category-glyph" src={IMG_URL+img}/>
                <p id={id} className="category-text">{title}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-md-1"/>
                    {this.renderCategories()}
                </div>
                <RenderProjects category={this.state.currentCategory} title={this.state.currentTitle}/>
             </div>
        );
    }
}

const mapStateToProps = ({ projects }) => ({
    projects
});

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({

        onGetCategories: getCategories,
        onLoadMoreProjects: loadMoreProjects


    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsLanding);
