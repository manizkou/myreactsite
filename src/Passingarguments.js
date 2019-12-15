import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Eventobject from './Eventobject';



// Passing Arguments
// If you want to send parameters into an event handler, you have two options:

// 1. Make an anonymous arrow function:
// Example:
// Send "Goal" as a parameter to the shoot function, using arrow function:

class Passingarguments extends React.Component{
	constructor(props){
		super(props);
		// this.shootAnother= this.shootAnother.bind(this);
		// above is used if the regular funciton is used instead of arrow function 
	}

	shoot=(a)=>{
		// alert("Hello passing argument");
		alert(a);
	}

	shootAnother=(a)=>{
		alert(a);
	}

	// shootAnother(a){
	// 	alert(a);
	// }

	render(){
		return(
			<div>
				<br/>
				<button onClick={()=>this.shoot("Yooohooo")}>
					Pass argument without binding with anonymous function  
				</button>
				{
					// Or:
					// 2. Bind the event handler to this.
					// Note that the first argument has to be this.
				}
				<br/>
				<br/>
				<button onClick={this.shootAnother.bind(this,"Binded this")}>
					Pass argument binding this
				</button>
				{
					// If you send arguments without using the bind method, 
					// (this.shoot(this, "Goal") instead of this.shoot.bind(this, "Goal")), 
					// the shoot function will be executed when the page is loaded instead 
					// of waiting for the button to be clicked.
				}

				<Eventobject/>
			</div>
		);
	}
}

export default Passingarguments;