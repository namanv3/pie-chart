import React, { Component } from "react"
import Controller from "./Controller"
import MyPieChart from "./MyPieChart"
import AddEntryButton from "./AddEntryButton"
import Switch from "react-switch"

class App extends Component {
	state = {
		value : [],
		checked: false
	}

	useControllerInput = (props) => {
		const { label, amount, color, index } = props
		let val = this.state.value
		val[index] = {
			title : index,
			value : parseInt(amount),
			color : color,
			key   : label
		}

		this.setState(
			{
				value  : val,
			}
		)
	}

	displayControllers = () => {
		const controllers = this.state.value.map (
			(cont, index) => {
				return (
					<div className="small-container" >
						<Controller 
							transmitChange={this.useControllerInput}
							index={index}
							removeController={this.removeController}
						/>
					</div>
				)
			}
		)
		return <div className="container">{controllers}</div>
	}

	handleClick = () => {
		const nextEntryNumber = this.state.value.length
		this.setState(
			{
				value : [...this.state.value , {title: nextEntryNumber, value: 0, color: "", key: ""}], 
			}
		)
	}

	removeController = (props) => {
		const { index } = props
		let val = this.state.value
		val.splice(index, 1);
		this.setState({value: val})
	}

	handleSwitchChange = () => {
		this.setState({ checked : !this.state.checked });
	}

	render () {
		return (
			<div className="container">
				<h1> Pie Chart </h1>
				<label>
					<label>Show percentages</label>
					<Switch 
						onChange={this.handleSwitchChange}
						checked={this.state.checked}
						onColor="#0366ee"
						uncheckedIcon={false}
						checkedIcon={false}
					/>
				</label>
				<div className="container" >
					{this.displayControllers()}
					<AddEntryButton handleClick={this.handleClick} />
				</div>

				<MyPieChart data={this.state.value} showPercentage={this.state.checked} />
			</div>
		)
	}
}

export default App