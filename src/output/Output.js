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
            valid:"",
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
       /* (this.state.nip === undefined) || (this.state.nip.length !== 10 ) // TODO check what will be if I  will put it after GET action ! Check it at sequence: clear -> enter, put sth - enter, clear - enter, put sth correct - enter, clear - enter */
            // ? (this.errorMessageT())
            ( (axios.get("http://localhost:3300/check-vat/" + this.state.nip)
                      .then(res => {
                          this.setState({
                              data: res.data,
                              name: res.data.name,
                              address: res.data.address,
                              nipCode: res.data.vatNumber,
                              valid: res.data.valid,
                          });
                          console.log(res, "resssss", res.data.valid , "valid is true now !");
                          
                      })
                        .catch(err=> {
                            this.setState({
                                err: err.request,

                            });
                            console.log(err , "err", err.request, "err r", err.request.responseText , "rText")
                        })
                )
                // && (console.log(this.state.res.data))
                  // ) && (this.state.valid === false
                  //       ? (console.log("nie placi"))
                  //       : (this.errorMessageF()) )
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