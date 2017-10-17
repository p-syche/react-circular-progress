import React from 'react';

const CrossSvg = (props) => {
	return (
		<svg className="cross" width="70" height="70">
			<path d="m35,35l-9.3,-9.3"/>
			<path d="m35,35l9.3,9.3"/>
			<path d="m35,35l-9.3,9.3"/>
			<path d="m35,35l9.3,-9.3"/>
		</svg>
	)
}

CrossSvg.propTypes = {
	
}

export default CrossSvg;