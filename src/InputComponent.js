import React from 'react';
import './InputComponent.css';


class InputComp extends React.Component {

    constructor(props){
     super (props);
        this.state = {
            form: {
                nip: ''
            }
        }
    }



    render () {
        return (
          <div>
              <form>
                  <input type="text" placeholder="type NIP" name="nip" required="required" onChange={this.onChange} value={this.state.nip}/>

                  <input type="button" value="SEND REQUEST"/>
                  {/*need some handleClick*/}
              </form>

              {/* place for imported info.  */}
              {/* NEXT COMPO ? Modal for info from history */}
          </div>

        );
    }
}


export default InputComp;

