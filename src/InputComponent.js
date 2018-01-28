import React from 'react';
import './InputComponent.css';


class InputComp extends React.Component{

//  constructor(props){
//      super (props)
//  }
//

    render () {
        return (
          <div>
              <form>
                  <input type="text" placeholder="type NIP" name="nip" />
                  {/*put in here onChande and value for state */}

                  <input type="button" value="SEND REQUEST"/>
                  {/*need some handleClick*/}
              </form>

              {/*there need to be a field for inported info - maybe a modal ? :) */}
          </div>

        );
    }
}


export default InputComp;

