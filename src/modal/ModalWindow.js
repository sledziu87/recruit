import React from 'react';
import {Component} from 'react';
import './ModalWindow.css';
import ModalBody from "./ModalBody";
import Modal from 'react-modal';

Modal.setAppElement('#root');

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
                <button onClick={this.openModal}>Open Modal</button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="content size-test"
                    contentLabel="Archive of requests "
                >

                    <button onClick={this.closeModal}>close</button>
                    <h2>ARCHIVE</h2>

                   <ModalBody/>

                </Modal>
                <div>
                    <button onClick={this.resetMemory}>RESET MEMORY</button>
                </div>

            </div>
        );
    }
}

export default ModalWindow;