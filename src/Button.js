import React from 'react';
import './Button.css';

import CircleSvg from './CircleSvg';
import CheckmarkSvg from './CheckmarkSvg';
import CrossSvg from './CrossSvg';

class Button extends React.Component {

	render() {
		const currentButton = this.props.buttonState;

		return (
			<div className="container">
				<div id="progress-button" className={"progress-button " + currentButton.buttonStateLoading }>
					<button onClick={this.props.buttonHandler}>
						<span>Submit</span>
					</button>
					
					<CircleSvg currentPath={currentButton.paths}/>

					<CheckmarkSvg />

					<CrossSvg />

				</div>

				<button className="undraw" onClick={this.props.undrawStrokes}>Undraw this stuff</button>
			</div>
			
		)
	}
}

export default Button;