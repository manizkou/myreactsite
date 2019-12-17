import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// React Event Object
// Event handlers have access to the React event that triggered the function.

// In our example the event is the "click" event. Notice that once again the
// syntax is different when using arrow functions or not.

// With the arrow function you have to send the event argument manually:

// Example:
// Arrow Function: Sending the event object manually:

class Eventobject extends React.Component{
	constructor(props){
		super(props);
	
	}

	shootStar=(a,b)=>{
		alert(a);
		alert("Calling Event: "+ b.type);
		/*
	    	'b' represents the React event that triggered the function,
	    	in this case the 'click' event
	    */
	}

	shootStarNormal=(a,b)=>{
		alert(a);
		alert("Calling Event: "+ b.type);
	}
	
	render(){
		return(
			<div>
				<br/>
				<br/>
				{
					// Example:
					// Arrow Function: Sending the event object manually:
				}
				<button onClick={(ev)=>this.shootStar("Hello Arrow",ev)}>
					Get Event in Arrow function 
				</button>
				<p>
					The event object is passed through arrow function if 
					we donot bind 'this' to the event handlers 
				</p>
				{
					// Without arrow function, the React event object is sent 
					// automatically as the last argument when using the bind() method:

					// Example:
					// With the bind() method, the event object is sent as the last argument:
				}
				
				<button onClick={this.shootStarNormal.bind(this,"Hello Normally sending")}>
					Get Event in normal function
				</button>
				<p>	
					When we bind 'this' to the event handler 
					we don't need to pass event object.
					the React event object is sent 
					automatically as the last argument when using the bind() method:
				</p>
			
			</div>
		);
	}
}

export default Eventobject;