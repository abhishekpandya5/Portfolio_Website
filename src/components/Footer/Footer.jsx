import React from 'react';
import Social from '../Social/Social';
import footerImage from '../../assets/images/footer.png';
import './footer.styles.scss';

export default function Footer() {
	return (
		<footer className="text-center">
			<div className="content my-4 text-center">
				Designed and build with <i className="fas fa-solid fa-heart mx-1"></i>{' '}
				<span>by{'  '}</span>
				<span>Abhishek Pandya</span>
				<div className="social"></div>
			</div>
			<Social />
			<img className="footer-img" src={footerImage} alt="footer" />
		</footer>
	);
}
