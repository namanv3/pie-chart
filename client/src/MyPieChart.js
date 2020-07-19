import React from "react"
import ToggleSeparation from "./ToggleSeparation"
import { PieChart } from "react-minimal-pie-chart"
// https://www.npmjs.com/package/react-minimal-pie-chart

class MyPieChart extends React.Component {
	state = {
		separation: 0,
		hovered: -1,
		selected: -1,
	}

	componentRef = React.createRef();

	increaseSeparation = () => {
		this.setState({separation: this.state.separation + 1})
	}

	decreaseSeparation = () => {
		if (this.state.separation > 0) this.setState({separation: this.state.separation - 1})
		else this.setState({separation: 0})
	}

	componentDidMount = () => {
		// Simple POST request with a JSON body using fetch
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: 'React POST Request Example' })
		};
		fetch("/submissions", requestOptions)
			.then(response => response.json())
			.then(data => this.setState({ postId: data.id }));
	}

	render () {
		const { data, showPercentage } = this.props
		const nonZeroData = data.filter((d, i) => {return d.value !== 0})
		if (nonZeroData.length !== 0) {
			if (showPercentage) {
				return (
					<div className="container">
						<ToggleSeparation increase={this.increaseSeparation} decrease={this.decreaseSeparation}/>
						<PieChart 
							data={nonZeroData} 
							label={({ dataEntry }) => dataEntry.key + " : " + `${Math.round(dataEntry.percentage)} %`}
							labelStyle={(index) => ({
								fontSize: (index === this.state.selected ? '6' : '3') + 'px',
								fontFamily: 'sans-serif',
								backgroundColor: 'white',
							})}
							radius={24}
							labelPosition={110}
							segmentsShift={(index) => (this.state.separation/10 + (index === this.state.hovered ? 2 : 0))}
							onClick={(_,index) => {
								this.setState({selected: this.state.selected === index ? -1 : index})
							}}
							onMouseOver={(_, index) => {
								this.setState({hovered: index});
							}}
							onMouseOut={() => {
								this.setState({hovered: -1});
							}}
						/>
					</div>
				)
			}
			else return (
					<div className="container">
						<ToggleSeparation increase={this.increaseSeparation} decrease={this.decreaseSeparation}/>
						<PieChart
							ref={this.componentRef}
							data={nonZeroData} 
							label={({ dataEntry }) => dataEntry.key + " : " + dataEntry.value}
							labelStyle={(index) => ({
								fontSize: (index === this.state.selected ? '6' : '3') + 'px',
								cursor: 'pointer',
								fontFamily: 'sans-serif',
								backgroundColor: 'white'
							})}
							radius={24}
							labelPosition={110}
							segmentsShift={(index) => (this.state.separation/10 + (index === this.state.hovered ? 2 : 0))}
							onClick={(_,index) => {
								this.setState({selected: this.state.selected === index ? -1 : index})
							}}
							onMouseOver={(_, index) => {
								this.setState({hovered: index});
							}}
							onMouseOut={() => {
								this.setState({hovered: -1});
							}}
						/>
					</div>
				)
		}
		else return <div className="container"></div>

	}
}

export default MyPieChart