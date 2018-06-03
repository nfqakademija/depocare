import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

class SliderContent extends React.Component {

    constructor(props) {
        super(props);
        this.rightButtons = this.rightButtons.bind(this);
    }

    rightButtons() {
        const done = this.props.User.dataReceived;
        if (done) {
            return (
                <div className="home-inline-buttons center-block">
                    <Link to='/projektai' className="btn btn-primary-slider-content btn-lg">Projektai</Link>
                </div>
            );
        }
        else {
            return (
                <div className="home-inline-buttons center-block">
                    <Link to='/prisijungti' className="btn btn-primary-slider-content btn-lg">Prisijungti</Link>
                    <Link to='/'  className="btn btn-primary-slider-content btn-lg">Sužinok daugiau</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="carousel-caption carousel-caption-left">
                    <b>"Mes gyvename iš to, ką gauname, bet kuriame gyvenimą iš to, ką duodame." (Vinstonas Čerčilis)</b>
                </div>
                <div className="carousel-caption carousel-caption-right center-block">
                    <h1>Padėk!</h1>
                    <div >
                        Įgyvendink tikslinius projektus rūšiavimo pagalba
                    </div>

                    {this.rightButtons()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ User }) => ({
    User,
});

export default connect(mapStateToProps)(SliderContent);

