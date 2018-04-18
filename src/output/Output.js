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
        (this.state.nip === undefined) || (this.state.nip.length !== 10 ) || (isNaN(this.state.nip)===true)
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
                    .catch(err=> {
                        this.setState({
                            err: err.request,

                        });
                        console.log(err.request.responseText , "<- errRequestResponseText");
                        console.log(err , " err", err.request, " err request")
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
    // Show Error ResponseText at main page view


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
                <ModalWindow />
            </div>
        )
    }
}

export default Output;