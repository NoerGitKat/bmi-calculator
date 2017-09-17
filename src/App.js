import React, { Component } from 'react';
import './App.css';

//import components
import Output from './components/Output';
import Range from './components/Range';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 180,
			weight: 70,
			bmi: 21.6,
			bmiClass: 'Normal'
		}

		this.heightChange = this.heightChange.bind(this);
	}

	heightChange(height) {
		this.setState({
			height: height
		}, function() {
			console.log(this.state);
		})
	}

	render() {
		return (
			<div className="App">
				<h1>The BMI Calculator</h1>
				<form>
					<div>
						<label>Height</label>
						<Range onChange={this.heightChange} />
					</div>
					<div>
						<label>Weight</label>
					</div>
				</form>
				 <Output />
			</div>
		);
	}
}

export default App;
