import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './education.styles.scss';

const Education = () => {
	return (
		<div id='education'>
			<div className='container'>
				<SectionTitle
					title='Education'
					icon='graduation-cap'
					target='education'
				/>
			</div>
		</div>
	);
};

export default Education;
