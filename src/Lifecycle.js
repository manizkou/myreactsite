import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Mounting from './Mounting.js';
import Updating from './Updating.js';
import Unmounting from './Unmounting.js';




class Lifecycle extends React.Component{
	constructor(props){
		super(props);	
	}

	render(){
		return(
			<div>
				<Mounting favCol="Yellow" />
				<Updating />
				<Unmounting />
			</div>
		);
	}
}


export default Lifecycle;
