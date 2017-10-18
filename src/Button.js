import React from 'react';
import './Button.css';

import CircleSvg from './CircleSvg';
import CheckmarkSvg from './CheckmarkSvg';
import CrossSvg from './CrossSvg';

class Button extends React.Component {
	constructor() {
		super();

		this.state = {
			buttonClean: true,
			buttonLoading: "",
			buttonSuccess: "",
			buttonError: "",
			animStart: false,
			animSuccess: false,
			animError: false
		}

		this.animEnd = this.animEnd.bind(this);

	}

	buttonHandler() {
		this.setState({
			buttonClean: false,
			buttonLoading: "loading",
			animStart: true
		});

		this.animEnd();

	}

	animEnd() {
		//can be set to run at animation end, i.e. at form submit
		setTimeout(function() {
			this.setState({
				buttonLoading: "",
				animStart: false
			});


			if(this.props.answer === "success") {

				this.setState({
					buttonSuccess: "success",
					animSuccess: true
				});
			} else if(this.props.answer === "error") {
				this.setState({
					buttonError: "error",
					animError: true
				});
			}
		}.bind(this), 1000);
	}

	undrawLines() {
		this.setState({
			buttonClean: true,
			buttonLoading: "",
			buttonSuccess: "",
			buttonError: "",
			animStart: false,
			animSuccess: false,
			animError: false
		});
	}

	render() {
		const currentState = this.state;

		return (
			<div className="container">
				<div id="progress-button" className={"progress-button " + currentState.buttonLoading + " " + currentState.buttonSuccess + " " + currentState.buttonError}>
					<button onClick={(e) => this.buttonHandler(e)} disabled={currentState.buttonClean ? '' : 'disabled'}>
						<span>Submit</span>
					</button>
				
					<CircleSvg 
						animStart={this.state.animStart}
					/>

					<CheckmarkSvg animSuccess={this.state.animSuccess} />

					<CrossSvg animError={this.state.animError} />

				</div>
				<div className="whatever">
					<button onClick={(e) => this.undrawLines(e)}>
						<span>Reset button</span>
					</button>
				</div>
			</div>
			
		)
	}
}


export default Button;