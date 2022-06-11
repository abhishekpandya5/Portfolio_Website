import React, { Fragment, useState, useRef } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { BsStackOverflow } from 'react-icons/bs';
import techStacks from './data.js';
import './stack.styles.scss';

const TechStack = () => {
	const [hover, setHover] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const tooltipRef = useRef();

	const handleMouseEnter = (e) => {
		let el = e.currentTarget;
		if (el !== null) {
			let rect = el.getBoundingClientRect();
			console.log(rect);
			tooltipRef.current.style.left = rect.x + window.scrollX + 'px';
			tooltipRef.current.style.top = rect.y + window.scrollY + 'px';
			tooltipRef.current.style.display = "block";
			
		}
	};

	const handleMouseLeave = () => {
		tooltipRef.current.style.display = "none";
	};

	const tooltipStyle = {
		display: hover ? 'block' : 'none',
		left: x + window.scrollX + 'px',
		top: y + window.scrollY + 'px'
	};

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
						<Fragment key={idx}>
							<div
								id={idx}
								className="stack-icons hover-icons"
								style={{ color: item.color }}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								ref={tooltipRef}
							>
								{<item.icon />}
							</div>
							<div className="toolTip" style={tooltipStyle}>
								{item.desc}
							</div>
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
