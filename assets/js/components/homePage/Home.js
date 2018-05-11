import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {getUserInfo} from "../../reducer/user/actions";
import SliderContent from "./SliderContent";
import RenderProjects from '../projects/viewProjects/RenderProjects';

const IMG_URL = "../../Data/images/";

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
        return (
            <div>
                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">

                        <div className="item active">
                            <img className="carousel-img" src={IMG_URL+"beach.jpg"} alt="forest"/>
                        </div>

                        <div className="item">
                            <img className="carousel-img" src={IMG_URL+"oak.jpg"} alt="park"/>
                        </div>

                        <div className="item">
                            <img className="carousel-img" src={IMG_URL+"walkaway.jpg"} alt="IMAGE"/>
                        </div>
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
