import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {getUserInfo} from "../../reducer/user/actions";
import SliderContent from "./SliderContent";
import RenderProjects from '../projects/viewProjects/RenderProjects';
import DonateModal from "../DonateModal";


const IMG_URL = "images/carouselImages/";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const tok = localStorage.getItem('token');
        if(tok && this.props.User.dataReceived === false && this.props.User.loading === false)
        {
            this.props.onGetUserInfo();
        }
    }

    render() {
        const carouselItems = [
            '1.png',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpeg'
        ];
        const modalProps = {
          title: "Pavadinimas"
        };
        return (
            <div>
                <DonateModal modalProps={modalProps}/>
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

                <RenderProjects category="Favorite" title="Mėgstamiausi"/>

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
