import React, { Component } from 'react';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'  
import HelloWorld from './components/helloWorld';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
				<Routes>  
				<Route path="hello" element={<HelloWorld />} />
				</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
