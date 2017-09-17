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
		this.weightChange = this.weightChange.bind(this);
		this.setBMI = this.setBMI.bind(this);
		this.getBMIClass = this.getBMIClass.bind(this);
	}

	weightChange(weight) {
		this.setState({
			weight: weight
		}, this.setBMI)
	}

	heightChange(height) {
		this.setState({
			height: height
		}, this.setBMI)
	}

	setBMI() {
		let bmi = ((this.state.weight / this.state.height / this.state.height * 1000).toFixed(2));	//universal bmi calcutation formula
		this.setState({
			bmi: bmi,
			bmiClass: this.getBMIClass(bmi)
		}, () => {
			console.log(this.state);
		})
	}

	getBMIClass(bmi) {
		if(bmi < 18.5) {
			return 'Underweight';
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			return 'Normal';
		} else if (bmi >= 25 && bmi <= 29.9) {
			return 'Overweight';
		} else if (bmi >= 30) {
			return 'Obese'
		}
	}

	render() {
		return (
			<div className="App">
				<h1>The BMI Calculator</h1>
				<form>
					<div>
						<label>Height</label>
						<Range height={this.state.height} onChange={this.heightChange} />
						<p>Your height is {this.state.height}</p>
					</div>
					<div>
						<label>Weight</label>
						<Range weight={this.state.weight} onChange={this.weightChange} />
						<p>Your weight is {this.state.weight}</p>
					</div>
				</form>
				 <Output />
			</div>
		);
	}
}

export default App;
