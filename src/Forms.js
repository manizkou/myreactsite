import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Forms extends React.Component{

	/*
		we could have used state here just like
		state={
			username=""
		}
		
		As a simple variable/object
	*/
	constructor(props){
		super(props);
		/*
			Since its inside a constructor. The constructor will be called instantly
			when the object of the class is created ->
			which in this case is the object created when the return() function returns the JSX.

			!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			
			The return() function returns the JSX .... 
			which in turn returns or creates the object when rendered 
			(just a hunch... needs more research.)

			Then that object refers as 'this' in the class and class constructor
			
			!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

		*/

		// this.state is used:
		// since super(props) causes inheritance shich is as if:
		/*
			class Forms{
				var state;
				constructor(){
					this.state={
						username:""
					}
				}
			}
		*/
 		this.state={
			username:""
		};
	}

	changeHandler=(event)=>{
		// event object is passed automatically if no arguments 
		// is passed from the event handler
		
		this.setState(
		{
			username:event.target.value
			// The target event property returns the element that triggered the event.
		}
		);
	}

	// changeHandler=(x,event)=>{
	// 	console.log(x);
	// 	this.setState(
	// 	{
	// 		username:event.target.value
	// 	}
	// 	);
	// }
	render(){
		return(
			<div>
				<h1>Hello {this.state.username}</h1>
				<p>Enter your name:</p>
				
				{/*
					Event object is send automatically as a parameter value if no arguments 
					needs to be passed.
				*/}
				<input type="text" onChange={this.changeHandler}/>

				{/*If you need to pass arguments as below you have two options*/}
				{/*
					Either use anonymous function as below:
					<input type="text" onChange={(event)=>this.changeHandler("yobo",event)}/>
					Or:
					Bind 'this' to the event handler
					<input type="text" onChange={this.changeHandler.bind(this,"yobo")}/>
				*/}

			</div>
		);
	}
}

export default Forms;