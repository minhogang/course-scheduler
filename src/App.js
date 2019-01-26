import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { TextField } from '@material-ui/core/TextField';
import { Select } from '@material-ui/core/Select'

class App extends Component {
	state = {
		age:'',
		name: 'hai',
		labelWidth: 0
	}

	componentDidMount() {

	}
	render() {
		return (
			<div className="App">
				<Helmet>
					<title>UOG Course Scheduler</title>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

				</Helmet>
				<div>
					<Select>
						value=
					</Select>
				</div>
			</div>
		);
	}
}

export default App;
