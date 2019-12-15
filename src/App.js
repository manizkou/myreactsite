import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Lifecycle from './Lifecycle.js';
import Events from './Events.js';

class Car extends React.Component{
	constructor(props){
		super(props);
		this.state={
			brand:"Ford",
			model:"Diablo",
			color:"Dark Blue",
			year:"1995"
		};
		// to make 'this' refer to Car class  in a normal funciton we have to bind this as below: 
		this.changeColor = this.changeColor.bind(this);
		// for arrow function there is no need for binding 'this'
	}

	/*
		Using normal function, you need to bind it to the class to obtain Class's 'this' reference. 
		So when you call this.setState actually it refer to YourFunction.setState().
	*/

	changeColor = function(){
		console.log(this);
		this.setState({
			color:"Dark Chocolate"
		});
	};

	/* arrow function does not have its own 'this' hence it will always refer to the class it is defined in. 
		In this case it's Car class
	*/

	/*
	Arrow function do not have their own binding of this, so your this.setState refer 
	to the YourClass.setState.
	*/

	/*	
		changeColor = ()=>{
			this.setState({
				color :"Dark Chocolate"
			});
		}
	*/

	render(){
		return(
			<div>
				<h4>
					It has {this.props.brand.name} of {((this.props.brand.year).toString()).substr(2,3)}'s 
				</h4>
				<h1>
					My {this.state.brand}
				</h1>
				<h4>
					It is a {this.state.color} {this.state.model} of the year from {this.state.year} 	
				</h4>

				<button type="button" onClick={this.changeColor}>Change Color</button>

				{/*we can also bind this in the render as below:*/}
				{/*<button type="button" onClick={this.changeColor.bind(this)}>Change Color</button>*/}

				<Lifecycle  />
				{ /*
					sends props named 'favCol' to the Lifecycle.js
					[related to getDerivedStateFromProps]
				*/ }

				<Events />
				
			</div>

		);
	}
}

class Garage extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		const carinfo = {
			name:"Ford",
			model:"Mustang",
			year:2050
		};

		return(
			<div>
				<h1>This is Garage!</h1>
				<Car brand={carinfo} />
			</div>
			);
	}
}

export default Garage;