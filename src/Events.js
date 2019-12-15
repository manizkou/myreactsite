import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Passingarguments from './Passingarguments.js';


// In regular functions the this keyword represented the object that called 
// the function, which could be the window, the document, a button or whatever.

// With arrow functions, the this keyword always represents 
// the object that defined the arrow function.

// Bind this
// For methods in React, the this keyword should represent 
// the component that owns the method.

// That is why you should use arrow functions. With arrow functions, 
// this will always represent the object that defined the arrow function.

class Events extends React.Component{
	constructor(props){
		super(props);
		this.shoot = this.shoot.bind(this);
	}

	/*
    	Thanks to the binding in the constructor function,
    	the 'this' keyword now refers to the component object

    	Else it would have refered to the object that called it i.e a button object 
    	or something.

    	If there was something like this outside of class:

    	myevent = new Events();
    	
    	//A button object calls the function:
		document.getElementById("btn").addEventListener("click", myevent.changeColor);

		Since this.shoot is inside class; it will show undefined if not binded with this
    */

    // Without the binding, the this keyword would return undefined.


	// shoot=()=>{
	// 	console.log("Great");
	// 	alert(this);	
	// }

	/*
    	The 'this' keyword refers to the component object i.e. the class which defined 
		the function when using arrow function. The class is kind of a function; 
		more like constructor function.
    */

	shoot(){
		console.log('Great Shot');
		// alert(this);
	}

	render(){
		return(
			<div> 
				<p>Hello Events </p>
				<button onClick={this.shoot}>Shoot</button>
				<Passingarguments />
			</div>
		);
	}
}

export default Events;