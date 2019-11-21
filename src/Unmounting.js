import  React,{Component} from 'react';
import ReactDom from 'react-dom';

// The next phase after 'mounting' in the lifecycle is when a component is 'updated'.
// A component is updated whenever there is a change in the component's state or props.
class Unmounting extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div></div>
		);
	}


}

export default Unmounting;