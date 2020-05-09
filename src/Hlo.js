import React ,{Component} from 'react';
import './Hlo.css';

class Hlo extends Component{
    render(){
        return (
            <div className= "maindiv_style">
                <h1> Hello {this.props.name} </h1>
                <p> First React app </p>
           </div>
        )
    }
}

export default Hlo;