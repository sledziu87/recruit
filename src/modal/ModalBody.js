import React from 'react';
import {Component} from 'react';
import './ModalWindow.css';

class ModalBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const retrieval = JSON.parse(localStorage.getItem("item"));
        this.setState({data: retrieval})
    }


    storageStuff = (arg, index) => {
        return (
            <ul>
                <li>NIP</li>
                <li> {} </li>
                <li> COMPANY </li>
                <li> {} </li>
                <li> ADDRESS </li>
                <li> {} </li>
            </ul>
        )
    };

    render() {
        const {data} = this.state;
        console.log(data, " dat");

        return (
            <div>
         
                {Object.keys(data).map((arg, index) => (
                    <li key={index}>
                        key: {index} Name: {data[arg]}
                    </li>

                    )
                )}

            </div>
        )


    }
}

    export default ModalBody;
