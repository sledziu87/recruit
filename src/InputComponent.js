import React from 'react';
import './InputComponent.css';


class InputComp extends React.Component {

    constructor(props){
        super (props);
        this.state = {
            data: [],
            form: {
                nip: ''
            }
        };

        // this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        }

        handleClick(event){
        event.preventDefault();
        const dataLoader = new XMLHttpRequest();
        dataLoader.open('GET', "http://jsonplaceholder.typicode.com/users?phone="+"024-648-3804" ); //024-648-3804 dodac zmienna z onchange todo change request to defined by task !
            //todo Build and use value frome input in exch of typed phone nr
            dataLoader.onload = () => {
                this.setState({data: dataLoader.responseText});
            };
            dataLoader.send(null);
        }



    render () {
        const { data } = this.state;
        return (
          <div>
              <form>
                  <input type="text" placeholder="type NIP" name="nip" required="required" onChange={this.onChange} value={this.state.nip}/>
                  {/* At this place is required info for specific way to type NIP  */}

                  <input type="button" value="SEND REQUEST" onClick={this.handleClick}/> {/* handleClick*/}
              </form>
              <textarea cols="50" rows="30" value={data}/> {/* place for imported info.  */}
              {/* NEXT COMPO ? Modal for info from history */}
          </div>

        );
    }
}


export default InputComp;

