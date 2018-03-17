import React from 'react';
import {Component} from 'react';
import './Output.css';
import InputComp from'../input/InputComponent';
import axios from "axios";

class Output extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            valid: "",
            address: "",
            nip: "",
            // error: "",
        }
    };

    sendRequest = () =>  {
            axios.get("http://localhost:3300/check-vat/" + this.state.nip)
                .then(res => {
                    this.setState({
                        data: res.data,
                        name: res.data.name,
                        address: res.data.address,
                        // error: res.data.error,
                    })
                })
    };

    typeNip = ({currentTarget: t}) => this.setState({nip: t.value});

    render() {
        return (
            <div>
                <InputComp typeNipOrigin={this.typeNip} sendRequestOrigin={this.sendRequest}/>
                <ul >
                    <li> NIP: </li>
                    <li>  { this.state.nip} </li>
                </ul>
                <ul>
                    <li> Company name:  </li>
                    <li> {this.state.name} </li>
                </ul>
                <ul >
                    <li> Address: </li>
                    <li> {this.state.address } </li>
                </ul>
                {console.log(this.state.nip)}
            </div>
        )
    }
}

export default Output;