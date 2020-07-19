import React, { Component } from "react"

class AddEntryButton extends Component {
	render () {
		return <input type="button" style={{marginTop:"3em", marginLeft:"1em"}} value="Add Entry" onClick={this.props.handleClick} />
	}
}

export default AddEntryButton