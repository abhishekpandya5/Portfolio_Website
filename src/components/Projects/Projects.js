import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import FlipCard from '../FlipCard/FlipCard';
import './projects.styles.scss';
import data from './projectsData.js';

const Projects = () => {
	return (
		<section id="projects">
			<div className="container">
				<SectionTitle title="Projects" icon="briefcase" target="projects" />
				<div className="content d-flex align-items-center flex-wrap justify-content-around my-4">
					{data.map(
						({ avatar, title, sourceUrl, hostUrl, description }, idx) => (
							<FlipCard
								key={idx}
								avatar={avatar}
								title={title}
								sourceUrl={sourceUrl}
								hostUrl={hostUrl}
								description={description}
							/>
						)
					)}

					{/* <FlipCard
						avatar={img2}
						heading="Chat Messenger"
						subHeading=""
						description=""
					/>
					<FlipCard
						avatar={img3}
						heading="Image Gallery"
						subHeading=""
						description=""
					/>
					<FlipCard
						avatar={img4}
						heading="Covid Tracker"
						subHeading=""
						description=""
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Projects;
