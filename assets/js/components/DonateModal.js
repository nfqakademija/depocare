import React from 'react';
import Modal from 'react-modal';

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
            modalIsOpen: true
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
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
                        <button className="blue-button donate-modal-button-value">10%</button>
                        <button className="blue-button donate-modal-button-value">25%</button>
                        <button className="blue-button donate-modal-button-value">50%</button>
                        <button className="blue-button donate-modal-button-value">100%</button>
                        <br/>
                        <button className="blue-button donate-modal-button-donate">Kita suma:</button>
                        <button className="blue-button donate-modal-button-donate">Paremk!</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default DonateModal;
