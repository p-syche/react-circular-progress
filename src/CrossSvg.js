import React from 'react';
import MtSvgLines from 'react-mt-svg-lines';

class CrossSvg extends React.Component {
	render() {
		return (
			<MtSvgLines animate={ this.props.animError } duration={ 750 }>

				<svg className="cross" width="70" height="70">
					<path d="m35,35l-9.3,-9.3"/>
					<path d="m35,35l9.3,9.3"/>
					<path d="m35,35l-9.3,9.3"/>
					<path d="m35,35l9.3,-9.3"/>
				</svg>
			</MtSvgLines>
		)
	}
}


CrossSvg.propTypes = {
	
}

export default CrossSvg;