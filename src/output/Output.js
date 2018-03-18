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
        }
    };

    sendRequest = () =>  {
        (this.state.nip === undefined)
            ? console.log("undefined") // DO NOT DELLETE THIS CONSOLE. LEFT IT FOR CODE REVIEW
            : (this.state.nip.length !== 10 )
                ? console.log(" !== 10 ")   // DO NOT DELLETE THIS CONSOLE. LEFT IT FOR CODE REVIEW
                : ( axios.get("http://localhost:3300/check-vat/" + this.state.nip)
                        .then(res => {
                            this.setState({
                                data: res.data,
                                name: res.data.name,
                                address: res.data.address,
                                nipCode: res.data.vatNumber,
                            })
                        })
                    )
    };

    errorMessageOne = () => {}; // message for upper error undef. && !=10

    // TODO:
    // idea is that:
    // Hide a message for user in some text area. If he will put a incorrect NIP show him  massage under input
    // " NIP should have (or need to have) 10 numbers without spaces, letters or any special brace "

    typeNip = ({currentTarget: t}) => this.setState({nip: t.value});

    render() {
        return (
            <div>
                <InputComp typeNipOrigin={this.typeNip} sendRequestOrigin={this.sendRequest}/>
                <ul >
                    <li> NIP: </li>
                    <li> { this.state.nipCode} </li>
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