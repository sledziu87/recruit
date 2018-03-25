import React from 'react';
import './InputComponent.css';


class InputComp extends React.Component {

    render () {
        return (
            <div>
                <form>
                    <input type="text" placeholder="type NIP number" name="nip" required="required" onChange={this.props.typeNipOrigin} />
                    <button type="submit" onClick={this.props.sendRequestOrigin}> SEND REQUEST</button>
                </form>
            </div>

        );
    }
}

export default InputComp;

