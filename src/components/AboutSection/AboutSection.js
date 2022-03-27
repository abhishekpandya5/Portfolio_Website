import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './about.styles.scss';

// const handleClick = (e) => {
// 	e.preventDefault();
// 	const target = e.currentTarget.getAttribute('href');
// 	const location = document.querySelector(target).offsetTop;
// 	window.scrollTo({
// 		left: 0,
// 		top: location - 40,
// 		behavior: 'smooth'
// 	});
// };

const AboutSection = () => {
	return (
		<section id="about">
			<div className="container">
				<SectionTitle title="About me" icon="user" target="about" />
				<div className="about-me text-white my-4">
					<div className="col-lg-12 pl-md-0">
						<p className="py-2 text-justify">
							My name is Abhishek Pandya, I'm a Software Enginner. I am an
							experienced Front End Web Developer, I build websites from the
							ground up.
						</p>
					</div>

					{/* <TechStack /> */}

					{/* <div className="horizontal-line"></div> */}

					{/* <a
						href="#projects"
						className="btn btn-outline-info btn-lg projects-btn"
						onClick={handleClick}
					>
						Check my Projects !
					</a> */}

					{/* <div className="col-lg-6">
						<div className="d-sm-flex p-2 pl-xs-0">
							<div className="col-lg-3 font-weight-bold  pl-xs-0">Email</div>
							<div className="col-lg-7 pl-xs-0">abhishekpandya5@gmail.com</div>
						</div>
						<div className="d-sm-flex p-2 pl-xs-0">
							<div className="col-lg-3 font-weight-bold  pl-xs-0">Address</div>
							<div className="col-lg-7 pl-xs-0">Delhi, India</div>
						</div>
						<div className="d-sm-flex p-2 pl-xs-0">
							<div className="col-lg-3 font-weight-bold  pl-xs-0">Mobile</div>
							<div className="col-lg-7 pl-xs-0">1234567896</div>
						</div>
						<div className="social-icons p-2 pl-xs-0">
							<a
								href="https://in.linkedin.com/in/abhishekpandya5"
								target="_blank"
								rel="noopener noreferrer"
								title="linkedin"
							>
								<i className="fab fa-linkedin fa-2x"></i>
							</a>
							<a
								href="https://twitter.com/abhishek5233"
								target="_blank"
								rel="noopener noreferrer"
								title="twitter"
							>
								<i className="fab fa-twitter-square fa-2x"></i>
							</a>
							<a
								href="http://www.github.com/abhishekpandya5"
								target="_blank"
								rel="noopener noreferrer"
								title="github"
							>
								<i className="fab fa-github-square fa-2x"></i>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
								title="instagram"
							>
								<i className="fab fa-instagram-square fa-2x"></i>
							</a>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
