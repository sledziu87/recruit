import React from 'react';
import {Component} from 'react';
import './Output.css';
import axios from "axios";

class Output extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            valid: "",
            address: "",
            NIP: "7272570554",
            error: "",

        }
    };

    componentDidMount() {
        axios.get("http://localhost:3300/check-vat/" + this.state.NIP)
            .then(res => {
                this.setState({
                    data: res.data,
                    name: res.data.name,
                    address: res.data.address,
                    error: res.data.error,
                })
            })
    }


    handleClick = (e) => {
        e.preventDefault();
    //    FOR BUTTON
    }

    render() {

        return (
            <div>
                <ul >
                    <li> NIP: </li>
                    <li>  { this.state.NIP} </li>
                </ul>
                <ul>
                    <li> Company name:  </li>
                    <li> {this.state.name} </li>
                </ul>
                <ul >
                    <li> Address: </li>
                    <li> {this.state.address } </li>
                </ul>
            </div>
        )
    }
}

export default Output;