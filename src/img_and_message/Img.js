import React from "react";
import './Img_and_message.css';
import Notepad from "./notepad.png";


const Image = () => {
    return (
        <div>
            <img src={Notepad} alt={"photo_of_Notepad"}/>
        </div>
    );
};

export default Image;