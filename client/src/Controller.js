import React, { Component } from "react"

class Controller extends Component {
	initialState = {
		label  : "",
		amount : "",
		color  : "",
		index  : this.props.index
	}

	state = this.initialState

	handleChange = (event) => {
		const { name, value } = event.target
		this.setState (
			{
		    	[name]: value,
			}
		)
	}

	submitForm = () => {
		this.props.transmitChange(this.state)
	}

	removeController = () => {
		this.props.removeController(this.state)
	}

	render () {
		var { label, amount, color } = this.state

		return (
			<form>
				<label htmlFor="label">{"Label " + this.props.index}</label>
				<input
					type="text"
					name="label"
					id="label"
					value={label}
					onChange={this.handleChange}
				/>
				<label htmlFor="amount">{"Amount " + this.props.index}</label>
				<input
					type="text"
					name="amount"
					id="amount"
					value={amount}
					onChange={this.handleChange}
				/>
				<label htmlFor="amount">{"Color " + this.props.index}</label>
				<input
					type="text"
					name="color"
					id="color"
					value={color}
					onChange={this.handleChange}
				/>
				<input type="button" value="Update" style={{marginRight:"5px"}} onClick={this.submitForm} />
				<input type="button" value="Delete" 
					style={{backgroundColor: 'white', border: '2px solid #0366ee', color: '#0366ee'}} 
					onClick={this.removeController} 
				/>
			</form>
		)
	}
}

export default Controller