import React from 'react';
import { Link } from 'react-router-dom';

export function Button(props){
	if(!props.path){
		return(
			<>
				<button 
					className={props.className? props.className:"button is-primary"}
					onClick={ props.event }>
					{ props.content }
				</button>
			</>
		);
	}
	else{
		return(
			<>
				<Link to={props.path} className="button is-link" >
					{ props.content }
				</Link>
			</>
		)
	}
};