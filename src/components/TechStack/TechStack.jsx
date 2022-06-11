import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { BsStackOverflow } from 'react-icons/bs';
import techStacks from './data.js';
import './stack.styles.scss';

const TechStack = () => {
	// const [leftPos, setLeftPos] = useState(0);
	// const [topPos, setTopPos] = useState(0);

	// const handleHover = (e) => {
	// 	console.log(e);
	// };

	return (
		<section id="techStack">
			<div className="container">
				<SectionTitle
					title="Tech Stack"
					icon={<BsStackOverflow />}
					target="techStack"
				/>
				<div className="tech-stack-container w-100 text-center">
					{techStacks.map((item, idx) => (
						<div
							key={idx}
							className="stack-icons hover-icons"
							style={{ color: item.color }}
							data-tip={item.desc}
							data-class="stacks-tooltip"
							data-place="top"
							data-multiline="true"
							data-type="light"

							// onMouseEnter={(e) => handleHover}
						>
							{<item.icon />}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
