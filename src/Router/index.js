import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Home from '../Components/Home';
import SignUp from '../Components/SignUp';
import LogIn from '../Components/LogIn';
import Help from '../Components/Help';
import AboutUs from '../Components/AboutUs';
import Storage from '../Components/Storage';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/home"><Home /></Route>
				<Route exact path="/signup"><SignUp /></Route>
				<Route exact path="/login"><LogIn /></Route>
				<Route exact path="/help"><Help /></Route>
				<Route exact path="/aboutus"><AboutUs /></Route>
				<Route exact path="/storage"><Storage /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;