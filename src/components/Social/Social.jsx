import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import './social.styles.scss';

function Social() {
	return (
		<aside className="social fd-flex align-items-center">
			{/* <div className='border-bottom'></div> */}
			<div className="text-vertical">Find me on</div>
			<div className="social-icons d-flex flex-column">
				<a
					className="text-white my-2 hover-icons"
					href="http://github.com/abhishekpandya5"
					rel="noopener noreferrer"
					target="_blank"
				>
					<FaGithubSquare />
				</a>
				<a
					className="text-white my-2 hover-icons"
					href="https://www.linkedin.com/in/abhishekpandya5/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<FaLinkedin />
				</a>
				<a
					className="text-white my-2 hover-icons"
					href="http://twitter.com/abhishek5233"
					rel="noopener noreferrer"
					target="_blank"
				>
					<FaTwitterSquare />
				</a>
			</div>
		</aside>
	);
}

export default Social;
