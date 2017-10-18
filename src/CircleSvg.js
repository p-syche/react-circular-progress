import React from 'react';
import MtSvgLines from 'react-mt-svg-lines';


class CircleSvg extends React.Component {

	render() {

		return (
			<MtSvgLines animate={ this.props.animStart } duration={ 1000 } callback={this.props.animEnd}>

				<svg className="progress-circle" width="70" height="70">
					<path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/>
				</svg>
			  
			</MtSvgLines>
		)
	}
}


export default CircleSvg;