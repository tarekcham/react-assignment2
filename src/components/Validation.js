import React from "react";
import Char from './Char';

const Validation = props => {
	
let checkText = "the Text is too short";
	if (props.textLength > 5) {
		checkText= "the Text is too long";
	}
	return(
	<div>
	  <p>
			{checkText}
		</p>
		{props.inputValue.split('').map((char,index)=> (
			<Char charValue={char} key={index} deleteCharHandler={()=>props.deleteCharHandler(index)}/> 
		))}
	</div>
	)
};

export default Validation;
