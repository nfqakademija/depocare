import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {getUserInfo} from "../../reducer/user/actions";
import SliderContent from "./SliderContent";
import RenderProjects from '../projects/viewProjects/RenderProjects';


const IMG_URL = "images/carouselImages/";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.chooseProjectsToRender=this.chooseProjectsToRender.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem('token') && this.props.User.dataReceived === false && this.props.User.loading === false)
        {
            this.props.onGetUserInfo();
        }
    }

    chooseProjectsToRender(){
        if(!this.props.User.loading)
        {
            if(this.props.User.dataReceived
                && this.props.User.userData.favorite_projects
                && this.props.User.userData.favorite_projects.length!==0)
            {
                return <RenderProjects category="Favorite" title="Mėgstamiausi"/>
            }
            else{
                return <RenderProjects title="Projektai, kuriems mažai trūksta!" />
            }
        }
    }

    render() {
        const carouselItems = [
            '0.jpg',
            '1.png',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpeg'
        ];

        return (
            <div>
                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        {  carouselItems.map((item, index) => {
                                    return (
                                        <div key = {index} className={
                                            index === 0
                                                ? 'item active'
                                                : 'item'}>
                                            <img className="carousel-img" src={IMG_URL+item} alt="forest"/>
                                        </div>
                                    );
                                })
                        }}

                    </div>
                    <SliderContent/>
                </div>
                {this.chooseProjectsToRender()}

            </div>
        )
    }
}

const mapStateToProps = ({ totalMoneyCollected, User }) => ({
    User
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onGetUserInfo: getUserInfo
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
