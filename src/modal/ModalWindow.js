import React from 'react';
import {Component} from 'react';
import './ModalWindow.css';
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

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="content size-test"
                    contentLabel="Archive of requests "
                >
                    {/*// TODO: suit it up*/}
                    <h2>ARCHIVE</h2>
                    <button onClick={this.closeModal}>close</button>
                    {/*// TODO: add button to clear L.S. !!*/}
                    <div>
                        <p>I am a modal</p>
                        <p>Lorem ipsum </p>
                        <p>Lorem ipsum </p>
                        <p>Lorem ipsum </p>
                        <p>Lorem ipsum </p>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalWindow;