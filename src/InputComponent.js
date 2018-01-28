import React from 'react';
import './InputComponent.css';


class InputComp extends React.Component{

    render () {
        return (
          <div>
              <form>
                  <input type="text" placeholder="type NIP" name="nip" />
                  <input type="button" value="SEND REQUEST"/>
              </form>
          </div>

        );
    }
}


export default InputComp;

