import React, { Component } from 'react';

class Range extends Component {
	//needed to establish inital state
	constructor(props) {
		super(props);

		this.state = {
			value: 160
		}

		this.onChange = this.onChange.bind(this);
	}

	static defaultProps = {
		min: 0,
		max: 245,
		step: 1
	}

	onChange(event) {

		this.props.onChange(this.state.value);
		this.setState({
			value: event.target.value
		})
	}

	render() {
		return (
			<div>
				<h3>Height</h3>
				<input type="range"
				 value={this.state.value} 
				 min={this.props.min} 
				 max={this.props.max} 
				 step={this.props.step}
				 onChange={this.onChange}/>
			</div>
		)
	}
}

export default Range;