import React from 'react';
import MtSvgLines from 'react-mt-svg-lines';

class CheckmarkSvg extends React.Component {
	render() {
		return (
			<MtSvgLines animate={ this.props.animSuccess } duration={ 750 }>
				<svg className="checkmark" width="70" height="70">
					<path d="m31.5,46.5l15.3,-23.2"/>
					<path d="m31.5,46.5l-8.5,-7.1"/>
				</svg>
			</MtSvgLines>
		)
	}
}

CheckmarkSvg.propTypes = {
	
}

export default CheckmarkSvg;