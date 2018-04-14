import React from 'react';
import {Component} from 'react';
import './ModalWindow.css';
import ModalBody from "./ModalBody";
import Modal from 'react-modal';

Modal.setAppElement('#root');

class ModalWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };
    }

    openModal=() => {
        this.setState({modalIsOpen: true});
    };

    closeModal=() => {
        this.setState({modalIsOpen: false});
    };


/*
    testing = () => {
        let data = (JSON.parse(localStorage.getItem("item")));


        // }


// console.log (data, " data");
        console.log(Object.entries(data)[1], " entries "); // here check what was found

        let output ;
        let string1 ;
        // let ts ="";
        for (let prop in data) {

            console.log(string1 = data[prop], " string A", prop , "prop", output = prop + data[prop], " string1 ", data[prop][0]);

            output += prop + ": " + data[prop] + "; ";
            string1 += data[prop];
            // ts +=
            console.log(output, " output", string1, " string1 ")
        }

    };

//                 if (data.hasOwnProperty(prop)){
//                     // data[prop].map( function(element, key){
//                     string1 = string1 + data[prop].map(function(element, key){
//                         console.log("company", element.company, key,  "address", element.address,"Nazwisko");
//                    return  })}}
//     };
//

        // for (let prop in data) {
        //     if (data.hasOwnProperty(prop)){
        //         data[prop].map( function(element, key){
        //
        //             console.log("company", element.company, key,  "address", element.address);
        //             return {"company": element.company, key,  "address": element.address
        //         }})
        //     }
        // }};

    //
    // return(
    //     <div>
    //
    //         <ul >
    //             <li>  first param </li>
    //             <li> </li>
    //             <li>  </li>
    //         </ul>
    //         <ul>
    //             <li> Param inside </li>
    //             <li>  </li>
    //         </ul>
    //         <ul>
    //             <li> Param inside </li>
    //             <li>  </li>
    //         </ul>
    //     </div>
    // )};



    // afterOpenModal = () => {
    //    // let pocket =  JSON.parse(localStorage.getItem("item"));
    //    console.log(localStorage.length , " length", pocket , 'pocket');
    // };

*/
    render() {
        // let data =(JSON.parse(localStorage.getItem("item")) );
        //
        // console.log(Object.entries(data)[2], " entries "); // here check what was found
        //
        // for (let prop in data) {
        //     if (data.hasOwnProperty(prop)){
        //     data[prop].map( function(element, key){
        //
        //             console.log("company", element.company, "address", element.address,"Nazwisko")
        //          })
        // }
        // }

        // console.log(data.length ,data ,data[1], typeof(data[1]));
        return (

            <div>

                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={this.testing}
                    // onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="content size-test"
                    contentLabel="Archive of requests "
                >
                    {/*// TODO: suit it up*/}
                    <h2>ARCHIVE</h2>
                    <button onClick={this.closeModal}>close</button>
                    {/*// TODO: add button to clear L.S. !!*/}
                   <ModalBody/>

                    {/*<div>*/}
                        {/*/!*{console.log(JSON.parse(localStorage.getItem("item")) )}*!/*/}
                        {/*/!*{console.log(data)} // und *!/*/}

                        {/*<p>I am a modal</p>*/}
                        {/*<p>Lorem ipsum </p>*/}
                        {/*<p>Lorem ipsum </p>*/}
                        {/*<p>Lorem ipsum </p>*/}
                        {/*<p>Lorem ipsum </p>*/}
                    {/*</div>*/}


                </Modal>
            </div>
        );
    }
}

export default ModalWindow;