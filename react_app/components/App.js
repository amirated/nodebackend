import React, { Component } from 'react';


class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			error: null,
			isLoaded: false
	    }
	}

	componentDidMount() {
		// dispatch({ type: AGENT_LIST_FETCHED })
	}


	render () {
		return (
				<div>
					<h1>Geolocation: </h1>
				</div>
			)
	}
}

export default App;