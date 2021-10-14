import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/signUp";
import SkillMap from "./SkillMap/skillMap";

function App(props) {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login}></Route>
				<Route path="/skillmap" component={SkillMap}></Route>
				<Route path="/signup" component={SignUp}></Route>
			</Switch>
		</Router>
	);
}

export default App;
