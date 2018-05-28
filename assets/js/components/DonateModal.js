import React from 'react';
import Modal from 'react-modal';
import Notifications from './Notifications';
import { Redirect } from 'react-router';
import {
    LOGIN_PAGE,
    NOTIFICATION_TIME
} from "../Data/Constants";



const customStyles = {
    content : {
        padding: 0,
        top: '60%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '320px',
        heigth: '568px',
        overlfow: 'scroll'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#app-container');

class DonateModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            donateAmount: 0,
            redirect: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeDonateAmount = this.changeDonateAmount.bind(this);
        this.setDonateAmount = this.setDonateAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    openModal() {
        if(this.props.modalProps.balance)
        {
            this.setState({modalIsOpen: true});
        }
        else{
            this.setState({
                redirect: true,
            });
        }
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }

    changeDonateAmount(e){
        this.setState({
            donateAmount: e.target.value
        });
    }
    setDonateAmount(value){
        if(this.props.modalProps.balance*value > 0){
            this.setState({
                donateAmount: (Math.round(this.props.modalProps.balance*value)),
            });
        }
    }

    onSubmit(e){
        e.preventDefault();
        this.props.modalProps.addNewUserProjectTransaction(
            this.props.modalProps.projectId,
            this.state.donateAmount/10).then(() => {
            switch (this.props.modalProps.status) {
                case 200:
                    Notifications.createNotification('success', 'Sėkmingai parėmete', "Ačiū! Jūsų dėka, šis projektas priartėjo arčiau tikslo!", NOTIFICATION_TIME);
                    this.setState({
                        modalIsOpen: false,
                        donateAmount: ''
                    });
                    break;

                default:
                    Notifications.createNotification('error', "Klaida", "Patikrinkite ar teisingai įvedėte sumą!", NOTIFICATION_TIME);
                    this.setState({loading: false});
            }
        });

    }


    render() {

        if (this.state.redirect){
            return  (<Redirect to={LOGIN_PAGE}/>)
        }
        return (
            <div>
                <button className="blue-button" onClick={this.openModal}>Prisidėti</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="donate-modal-header">

                        <h3 className="donate-modal-header-title">Paremk projektą!
                            <span className="glyphicon glyphicon-remove donate-modal-header-close" onClick={this.closeModal}/></h3>
                    </div>

                    <div className="donate-modal-content text-center">
                        <h1 >{this.props.modalProps.title}</h1>
                        <button className="blue-button donate-modal-button-value" onClick={()=>{this.setDonateAmount(0.10)}}>10%</button>
                        <button className="blue-button donate-modal-button-value" onClick={()=>{this.setDonateAmount(0.25)}}>25%</button>
                        <button className="blue-button donate-modal-button-value" onClick={()=>{this.setDonateAmount(0.5)}}>50%</button>
                        <button className="blue-button donate-modal-button-value" onClick={()=>{this.setDonateAmount(1)}}>100%</button>
                        <br/>
                        <form onSubmit={(e)=>{this.onSubmit(e)}}>
                            <input
                                className="blue-button donate-modal-button-donate donate-modal-button-donate-input"
                                type="number"
                                min="1"
                                max={this.props.modalProps.balance}
                                value = {this.state.donateAmount}
                                placeholder="Įveskite kiekį"
                                onChange={this.changeDonateAmount}
                                />
                            <button className="blue-button donate-modal-button-donate"
                                    type='submit'
                            >Paremk!</button>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default DonateModal;
