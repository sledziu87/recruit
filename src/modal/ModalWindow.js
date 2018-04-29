import React from 'react';
import {Component} from 'react';
import './ModalWindow.css';
import ModalBody from "./ModalBody";
import Modal from 'react-modal';

Modal.setAppElement('body');

class ModalWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };
    }

    openModal=() => {
        this.setState({modalIsOpen: true});
    };

    closeModal=() => {
        this.setState({modalIsOpen: false});
    };

    resetMemory =() => {
        localStorage.removeItem('item');
    };

    render() {
        return (

            <div>
                <button onClick={this.openModal}>OPEN MODAL</button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="content min_size"
                    contentLabel="Archive of requests "
                >

                    <button onClick={this.closeModal} className="close_archive_btn"> x </button>
                    <h2 className="archive_title">ARCHIVE</h2>

                   <ModalBody/>

                </Modal>
                <div>
                    <button onClick={this.resetMemory}>Reset memory</button>
                </div>

            </div>
        );
    }
}

export default ModalWindow;