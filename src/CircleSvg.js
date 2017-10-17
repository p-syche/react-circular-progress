import React from 'react';

class CircleSvg extends React.Component {
	
	// getDefaultProps() {
	//     return {
	// 		circleFill: '#ffffff'
	// 	};
	// }


	render() {
		const circlePath = this.props.currentPath.circle;

		return (

				<svg className="progress-circle" width="70" height="70" >
					<path d={circlePath} />
				</svg>
			
		)
	}
}

CircleSvg.propTypes = {
	
}


export default CircleSvg;