import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SignInPage from './pages/signin';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/sign-in' element={<SignInPage />} />
			</Routes>
		</Router>
	);
};

export default App;
