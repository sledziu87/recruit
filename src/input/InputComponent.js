import React from 'react';
import './InputComponent.css';


class InputComp extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            nip: ""
        };

        // this.onNipType = this.onNipType.bind(this);
        // this.onClick = this.onClick.bind(this); just in case but not necessarily needed with this way of use

    };

    // to delete
    onClick = (e) => {
        e.preventDefault();

            console.log((this.state.nip)," nip ")

    };

    onNipType = ({currentTarget: t}) => this.setState({nip: t.value});

    render () {
        return (
            <div>
                <input type="text" placeholder="type NIP number" name="nip" required="required" onChange={this.onNipType} value={this.state.nip} />
                <button type="submit" onClick={this.onClick}/>
                {/*add props to button - for get*/}

                {console.log(this.state.nip)}
            </div>

        );
    }
}


export default InputComp;

