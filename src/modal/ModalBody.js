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
        const respond = JSON.parse(localStorage.getItem("item"));
        respond === null
            ? this.setState({data: [[["No result"],["No result"],["No result"]]]})
            : this.setState({data: respond})
    }

    storageStuff = (arg, index) => {
        return (
            <ul key={index}>
                <li>NIP</li>
                <li> {arg[0]} </li>
                <li> COMPANY </li>
                <li> {arg[1]} </li>
                <li> ADDRESS </li>
                <li> {arg[2]} </li>
            </ul>
        )
    };

    render() {
        const {data} = this.state;
        console.log(data, " data");

        return (
            <div>
                {this.state.data.map((item, index) => this.storageStuff(item, index))}
            </div>
        )
    }
}

    export default ModalBody;
