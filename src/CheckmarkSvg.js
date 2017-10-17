import React from 'react';

const CheckmarkSvg = (props) => {
	return (
		<svg className="checkmark" width="70" height="70">
			<path d="m31.5,46.5l15.3,-23.2"/>
			<path d="m31.5,46.5l-8.5,-7.1"/>
		</svg>
	)
}

CheckmarkSvg.propTypes = {
	
}

export default CheckmarkSvg;