import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './contact.styles.scss';

const Contact = () => {
	return (
		<section id="contact">
			<div className="container">
				<SectionTitle
					title="Get In Touch"
					icon="address-card"
					target="contact"
				/>

				<div className="my-4 text-center text-justify">
					<div className="content mx-auto my-4">
						At present, I am in search of new opportunities. If you have any
						questions, want to collaborate, or just want to say hello, please
						feel free to contact me. I will get back to you as soon as possible
						!
					</div>
					<a
						href="mailto:abhishekpandya5@gmail.com"
						className="btn btn-outline-info btn-lg my-4"
					>
						Contact Me
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
