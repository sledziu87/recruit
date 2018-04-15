import React from 'react';
import {Component} from 'react';
import './Output.css';
import InputComp from'../input/InputComponent';
import Message from "../message/Message";
import Notepad from "../img/notepad.png";
import axios from "axios";
import ModalWindow from "../modal/ModalWindow";

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

    sendRequest = (e) =>{
    e.preventDefault();
        (this.state.nip === undefined) || (this.state.nip.length !== 10 )
            ? (this.errorMessageT())
            : ((axios.get("http://localhost:3300/check-vat/" + this.state.nip)
                .then(res => {
                    this.setState({
                        data: res.data,
                        name: String(res.data.name),
                        address: String(res.data.address),
                        nipCode: String(res.data.vatNumber),

                    });
                    this.errorMessageF();
                    this.setLocalStorage();
                })
            ))
    };

    setLocalStorage = () => {
        let retrieval = [],
            sample =  JSON.parse(localStorage.getItem("item"));

        if (sample === null ) {
            localStorage.setItem("item", JSON.stringify(retrieval));
        }

        let arr = [
            this.state.nipCode,
            this.state.name,
            this.state.address
        ];

        retrieval = JSON.parse(localStorage.getItem("item"));
        retrieval.push(arr);
        localStorage.setItem("item", JSON.stringify(retrieval));
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
    // NEED TO:
    // 1. clear result / or / show correct result if typed NIP belong to NOT VAT payer
    // 2. present right message (main idea sub-task)

    // idea is that:
    // Hide a message for user in some text area. If he will put a incorrect NIP show him  massage e.g. under input
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
                <ul >
                    <li> test: </li>
                    <li>  </li>
                </ul>
                <ModalWindow />
            </div>
        )
    }
}

export default Output;