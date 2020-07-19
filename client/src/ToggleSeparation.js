import React, { Component } from "react"

class ToggleSeparation extends Component {
	render () {
		return (
			<div>
				<input type="button" value="Separation +" 
					style={{
						marginLeft:"1em", 
						borderRadius: "0px",
						background: "white",
						border: '2px solid #0366ee', 
						color: '#0366ee'
					}}
					onClick={this.props.increase}
				/>
				<input type="button" value="Separation -" 
					style={{
						marginLeft:"1em", 
						borderRadius: "0px",
						background: "white",
						border: '2px solid #0366ee', 
						color: '#0366ee'
					}}
					onClick={this.props.decrease}
				/>
			</div>
		)
	}
}

export default ToggleSeparation