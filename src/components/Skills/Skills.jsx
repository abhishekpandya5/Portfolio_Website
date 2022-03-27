import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './skills.styles.scss';

const Skills = () => {
	return (
		<section id='skills'>
			<div className='container'>
				<SectionTitle
					title='Skills'
					icon='cogs'
					target='skills'
				/>
				<div className="content my-4">
					<h1>skills</h1>
				</div>
			</div>
		</section>
	);
};

export default Skills;
