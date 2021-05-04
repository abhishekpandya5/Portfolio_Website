import React, { Component } from 'react';
import CircledArrow from '../Button/CircledArrow';

import './header.styles.scss';

class Header extends Component {
	componentDidMount() {
		window.addEventListener('scroll', this.resizeHeader);
	}

	resizeHeader = () => {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop;
		const shrinkOn = 200;
		// const headerNavbar = document.querySelector('.header-navbar');
		const headerEle = document.querySelector('#shrinkHeader');
		if (distanceY > shrinkOn) {
			// headerNavbar.classList.add('shrink');
			headerEle.classList.add('smaller');
		} else {
			// headerNavbar.classList.remove('shrink');
			headerEle.classList.remove('smaller');
		}
	};

	render() {
		return (
			<header id='top' className='loading'>
				<div className='header-navbar'>
					<div className='container'>
						<nav className='navbar navbar-expand-lg' id='shrinkHeader'>
							<a className='navbar-brand text-light' href='/'>
								Hi, I am Abhishek
							</a>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#navbarNav'
								aria-controls='navbarNav'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								<i className='fas fa-bars text-light'></i>
							</button>
							<div className='collapse navbar-collapse' id='navbarNav'>
								<ul className='navbar-nav quick-links'>
									<li className='nav-item'>
										<a className='nav-link text-light' href='/'>
											Home <i className='fas fa-home'></i>
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link text-light' href='#about'>
											About <i className='far fa-address-card'></i>
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link text-light' href='/'>
											Work <i className='fas fa-briefcase'></i>
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link text-light' href='/'>
											Blog <i className='fas fa-blog'></i>
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link text-light' href='/'>
											Contact <i className='fas fa-id-card-alt'></i>
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>

				<div className='overlay'></div>

				<div className='banner container text-center'>
					<h1 className='text-white font-weight-bold'>A Frontend Developer</h1>
					<h6 className='text-white'>
						I am passionate about creating UI for websites, portal etc.
					</h6>
					<a className='btn btn-success mt-5 text-white hire' href='#about'>
						Hire me!
					</a>
				</div>

				<a href='#about' className='text-white btn-down'>
					<CircledArrow />
				</a>
			</header>
		);
	}
}

export default Header;
