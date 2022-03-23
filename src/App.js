import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SignInPage from './pages/signin';

const App = () => {
	return (
		<Router basename='/'>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/sign-in' element={<SignInPage />} />
			</Routes>
		</Router>
	);
};

export default App;
