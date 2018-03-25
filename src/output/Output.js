import React from 'react';
import {Component} from 'react';
import './Output.css';
import InputComp from'../input/InputComponent';
import Message from "../message/Message";
import Notepad from "../img/notepad.png";
import axios from "axios";

class Output extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showInfo: false,
        }
    };

    messageShow = () => {
        return(this.state.showInfo
            ? <Message/>
            : <img src={Notepad} alt={"photo_of_Notepad"}/>
        );
    };

    sendRequest = () =>  {
        (this.state.nip === undefined) || (this.state.nip.length !== 10 )
            ? (this.errorMessageT())
            // option with no VAT payment and bug in 10 numb.
            : ( (axios.get("http://localhost:3300/check-vat/" + this.state.nip)
                      .then(res => {
                          this.setState({
                              data: res.data,
                              name: res.data.name,
                              address: res.data.address,
                              nipCode: res.data.vatNumber,
                          })
                      })
                  ) && (this.errorMessageF())
            )
    };

    errorMessageT = () => {
        this.setState({
            showInfo: true,
            nipCode: "x",
            name: "x",
            address: "x",
        })
    };
    errorMessageF = () => {
        this.setState({showInfo: false})
    };


    // TODO:
    // idea is that:
    // Hide a message for user in some text area. If he will put a incorrect NIP show him  massage under input
    // " NIP should have (or need to have) 10 numbers without spaces, letters or any special brace "

    typeNip = ({currentTarget: t}) => this.setState({nip: t.value});

    render() {
        return (
            <div>
                {this.messageShow()}
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