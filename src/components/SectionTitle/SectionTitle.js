import React, { Fragment } from 'react';
import './sectionTitle.styles.scss';

export const SectionTitle = ({ title, icon, target }) => (
	<Fragment>
		<div className="col-lg-12 text-center">
			<h3 className="d-inline-flex align-items-center hover-underline justify-content-center pb-2 pt-4">
				{typeof icon === 'object' ? (
					icon
				) : (
					<i className={`fas fa-${icon} fa-xs mr-2`}></i>
				)}
				<span className='ml-1'>{title}</span>
			</h3>
		</div>
		<div className="border-bottom"></div>
	</Fragment>
);
