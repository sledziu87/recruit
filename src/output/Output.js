import React from 'react';
import {Component} from 'react';
import './Output.css';
import InputComp from'../input/InputComponent';
import Message from "../message/Message";
import Notepad from "../img/notepad.png";
import axios from "axios";
// import ModalWindow from "../modal/ModalWindow";

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
                    // console.log(res, "resssss", res.data.valid , "valid is true now !");
                })
                // .then(action => {this.setLocalStorage(); console.log(action, " action ");})

                // .catch(err => {
                //     (err.responseText !== null )
                //         ? ((console.log( " message -> ", err.request.responseText)) && (this.errorMessageT()) )
                //         : console.log(err.request.statusText, " else !! ");
                //
                //             // console.log(err , "err", err.request, "err r", err.request.responseText , "rText")
                // })
            ))
    };

    // setLocalStorage() {
    //     var a = {
    //         // nip: this.state.nipCode,
    //         company: this.state.name,
    //         where: this.state.address,
    //     };
    //     // window.localStorage.setItem(this.nipCode, this.name);
    //     window.localStorage.setItem(this.state.nipCode, JSON.stringify(a));
    //     // window.localStorage.setItem(this.state.nipCode, this.state.name);
    //     // add this ??? window.location.href = '/';
    //     // function (this.address)() { console.log("s")};
    // }

    setLocalStorage = () => {
        let retrieval = [],
            sample = localStorage.getItem("item");

        console.log (sample , " sample");

        if (sample === null ) { localStorage.setItem("item", JSON.stringify(retrieval));
        console.log(" zyje ") }

        let obj = {
            [this.state.nipCode]: {
                'company': this.state.name,
                'address': this.state.address
            }
        };

        console.log(retrieval, " ret");
        console.log(obj, " obj");

        retrieval = JSON.parse(localStorage.getItem("item"));

        console.log(retrieval, " ret2");
        console.log(obj, " obj2");
        // if ()

        retrieval.push(obj);

        console.log(retrieval, " ret3");
        console.log(obj, " obj3");

        localStorage.setItem("item", JSON.stringify(retrieval));
        console.log(localStorage.getItem("item"));
        console.log(retrieval[5], " 5ci ");
        console.log(retrieval.length);

        // retrieval = this.setState.recovery;
    };

// LocalStorage = (info) => {
//         let retrieval = [];
//         retrieval = JSON.parse(localStorage.getItem("item"));
//         retrieval.push(info);
//         localStorage.setItem("item", JSON.stringify(retrieval))
//     };

/*
    information = () => {
        return (
        this.state.nipCode: [
        {
        "name": this.state.name,
        "address": this.state.address,
        }
        ]
    );};
*/

        // formation = () => {
        // return (
    //         <div>
    //             <ul >
    //                 <li> NIP: </li>
    //                 <li> { this.state.nipCode} </li>
    //             </ul>
    //             <ul>
    //                 <li> Company name:  </li>
    //                 <li> {this.state.name} </li>
    //             </ul>
    //         </div>
    //     );
    // };

    // onAction = () => {
    //     var re = localStorage.getItem(this.state.nipCode);
    //   console.log(re, " re ",  localStorage.length, " L S ", this.state, ' state ' );
    //
    // };



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
                {/*<ModalWindow setLocalStorageOrigin={this.setLocalStorage}/>*/}

                {/*<button onClick={this.onAction}>result of L.S.</button>*/}
                {/* TODO this is only for try. Give here some props and move it do modal section. Add a button to remove data from LocalStorage*/}
            </div>
        )
    }
}

export default Output;