import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends React.Component{
	constructor(props){
		super(props);
		// tried to pass 'this' to the normal function in the componentDidMount() method => didn,t work 
		// this.componentDidMount.setTimeout.change = this.componentDidMount.setTimeout.change.bind(this)
		this.state = {
			favoriteColor:"red",
			favoritePlace:"USA"
		};
	}

	static getDerivedStateFromProps(props,state){
		return {favoriteColor : props.favCol};
	}


	componentDidMount(){
		setTimeout(
			// function change(){
			// 	this.setState({favoritePlace:"Wakanda"});
			// },3000
			// try passing 'this' here in the normal function 
			// try using normal function instead of fat arrow function
			
			()=>{
				this.setState({favoritePlace:"Wakanda"});
			},3000
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


export default Lifecycle;
