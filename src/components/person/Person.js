import React from 'react';
import './Person.css';


const Person = (props) => {
	return (
		<div  className="Person">
			<p onClick={props.click}>Hi, I'm {props.name} and my age is  {props.age}
			</p>

			<ul>
				{props.children}
			</ul>
			<input type="text" onChange={props.changed} defaultValue="what ever"/>
		</div>

		)
}

export default Person; 
