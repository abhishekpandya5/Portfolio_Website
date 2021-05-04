import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './about.styles.scss';

const AboutSection = () => {
	return (
		<div id='about'>
			<div className='container'>
				<SectionTitle title='About me' icon='user' target='about' />
				<div className='d-sm-flex flex-wrap about-me'>
					<div className='col-lg-6 p-sm-0'>
						<p className='py-2 text-justify'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
					</div>
					<div className='col-lg-6 p-sm-0'>
						<div className='d-sm-flex p-2 pl-xs-0'>
							<div className='col-lg-3 font-weight-bold text-lg-right pl-xs-0'>
								Email
							</div>
							<div className='col-lg-7 pl-xs-0'>abhishekpandya5@gmail.com</div>
						</div>
						<div className='d-sm-flex p-2 pl-xs-0'>
							<div className='col-lg-3 font-weight-bold text-lg-right pl-xs-0'>
								Address
							</div>
							<div className='col-lg-7 pl-xs-0'>Delhi, India</div>
						</div>
						<div className='d-sm-flex p-2 pl-xs-0'>
							<div className='col-lg-3 font-weight-bold text-lg-right pl-xs-0'>
								Mobile
							</div>
							<div className='col-lg-7 pl-xs-0'>1234567896</div>
						</div>
						<div className='social-icons p-2 pl-xs-0'>
							<a
								href='https://in.linkedin.com/in/abhishekpandya5'
								target='_blank'
								rel='noopener noreferrer'
								title='linkedin'
							>
								<i className='fab fa-linkedin fa-2x'></i>
							</a>
							<a
								href='https://twitter.com/abhishek5233'
								target='_blank'
								rel='noopener noreferrer'
								title='twitter'
							>
								<i className='fab fa-twitter-square fa-2x'></i>
							</a>
							<a
								href='http://www.github.com/abhishekpandya5'
								target='_blank'
								rel='noopener noreferrer'
								title='github'
							>
								<i className='fab fa-github-square fa-2x'></i>
							</a>
							<a
								href='https://www.instagram.com/'
								target='_blank'
								rel='noopener noreferrer'
								title='instagram'
							>
								<i className='fab fa-instagram-square fa-2x'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
