import React, {Component} from "react";

class Button extends Component {
    increase = () => {
	alert('You clicked me!');
    }

    render() {
	return (
	    <button onClick={this.increase}>{this.props.value}</button>
	)
    }
}


export default Button;
