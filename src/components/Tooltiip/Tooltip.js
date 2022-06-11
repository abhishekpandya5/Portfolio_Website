import React, { useState } from 'react';

const Tooltip = () => {
	const [visible, setvisible] = useState(false);
	const [xCord, setXCord] = useState(0);
	const [yCord, setYCord] = useState(0);
	const [type, setType] = useState('none');

	let visibility = visible ? 'on' : 'off';

	let tooltipStyle = {
		left: xCord + window.scrollX + 'px',
		top: yCord + window.scrollY + 'px'
	};

	const show = () => {
		setvisible(true);
	};

	const hide = () => {
		setvisible(false);
	};

	return (
		<div id="tooltip" className={visibility} style={tooltipStyle}>
			<div className="tooltip-arrow"></div>
			<div className="tooltip-inner">ToolTip Component</div>
		</div>
	);
};

export default Tooltip;
