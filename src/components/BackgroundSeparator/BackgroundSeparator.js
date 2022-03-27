import React from 'react';
import './bgSeparator.styles.scss';

export const BackgroundSeparator = ({ bgImage }) => (
	<div
		className="bg-separator"
		style={{
			backgroundImage: `url(${bgImage})`,
			// height: `${window.innerHeight}px`
		}}
	></div>
);
