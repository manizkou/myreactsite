import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 

class Mounting extends React.Component{
	constructor(props){
		/*
		 The constructor() method is called with the props, as arguments, 
		 and you should always start by calling the super(props) before anything else, 
		 this will initiate the parent's constructor method and 
		 allows the component to inherit methods from its parent (React.Component).
		 */
		 super(props);

		// tried to pass 'this' to the normal function in the componentDidMount() method => didn't work 
		// this.componentDidMount.setTimeout.change = this.componentDidMount.setTimeout.change.bind(this);
		
		this.state = {
			favoriteColor:"red",
			favoritePlace:"USA"
		};
	}

		/*
			just an assume,need more facts: if super(props) used use 'this.state={...}' 
			else we can use only 'state={...}'
			state is built in React Object 
		*/

		//  This is the natural place to set the state object based on the initial props.
		/*  As the name suggests it derives new state with new properties 
		using the props passed into the component. */
		static getDerivedStateFromProps(props,state){
			return {favoriteColor : props.favCol}; //takes favCol props and puts into state
		}


		/* 	The componentDidMount() method is called after the component is rendered.
		This is where you run statements that requires that the component is already placed in the DOM.
		Meaning, if you want to change something after the component is rendered, 
		componentDidMount() method is used  */

		componentDidMount(){
			setTimeout(
			/*function change(){
				this.setState({favoritePlace:"Wakanda"});
			},3000*/
			// try passing 'this' here in the normal function 
			// try using normal function instead of fat arrow function
			
			()=>{
				this.setState({favoritePlace:"Wakanda"});
			},3000
			/*in 3 seconds the favorite place will change from USA to Wakanda*/ 
			);
		}


		render(){
			return(
				<div>
				<h1>{this.state.favoriteColor} is the Color I love. </h1>
				<h4>And my favorite place is {this.state.favoritePlace}</h4>
				</div>
				);
		}

	}

	export default Mounting;