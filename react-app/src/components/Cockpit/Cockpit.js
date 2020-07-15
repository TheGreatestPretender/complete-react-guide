import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';

import AuthContext from '../../context/authContext';

const cockpit = (props) => {

	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);
	console.log(authContext.authenticated);
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');

		toggleBtnRef.current.click();
		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []);


	useEffect(() => {
		console.log('[Cockpit.js] useEffect 2');
		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect 2');
		};
	});
 
	const assignedClasses = [];
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}

	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
			Toggle Persons
			</button>
			<button onClick={authContext.login}>Log In</button>
		</div>
	)
}
export default cockpit;