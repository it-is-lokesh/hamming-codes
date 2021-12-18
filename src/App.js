import './App.css';
import React, { Component }  from 'react';
import Main from './MyComponents/Main'
import Header from './MyComponents/Header'

function App() {
	return (
		<>
		<Header pageTitle='Hamming Codes Visualizer' showSearch={true}/>
		<Main />
		
		</>
	);
}

export default App;
