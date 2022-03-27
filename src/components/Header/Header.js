import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { BsArrowDownCircle } from 'react-icons/bs';
import './header.styles.scss';

class Header extends Component {
	constructor(props) {
		super(props);
		this.navRef = React.createRef();
		this.shrinkRef = React.createRef();
	}
	componentDidMount() {
		window.addEventListener('scroll', this.resizeHeader);
	}

	resizeHeader = () => {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop;
		const shrinkOn = 200;
		// const headerNavbar = document.querySelector('.header-navbar');
		const headerEle = this.shrinkRef.current;
		if (distanceY > shrinkOn) {
			// headerNavbar.classList.add('shrink');
			headerEle.classList.add('smaller');
		} else {
			// headerNavbar.classList.remove('shrink');
			headerEle.classList.remove('smaller');
		}
	};

	handleClick = (e) => {
		e.preventDefault();
		const target = e.currentTarget.getAttribute('href');
		const location = document.querySelector(target).offsetTop;
		window.scrollTo({
			left: 0,
			top: location - 40,
			behavior: 'smooth'
		});
		this.navRef.current.classList.remove('show');
	};

	headerStyles = {
		height: `${window.innerHeight}px`
	};

	render() {
		return (
			<header id="top" className="loading" style={this.headerStyles}>
				<div className="header-navbar">
					<div className="container">
						<nav
							className="navbar navbar-expand-lg"
							id="shrinkHeader"
							ref={this.shrinkRef}
						>
							<a className="navbar-brand text-light" href="/">
								Hi, I am Abhishek
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<i className="fas fa-bars text-light"></i>
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarNav"
								ref={this.navRef}
							>
								<ul className="navbar-nav quick-links">
									<li className="nav-item">
										<a
											className="nav-link text-light"
											href="#top"
											onClick={this.handleClick}
										>
											Home <i className="fas fa-home"></i>
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link text-light"
											href="#about"
											onClick={this.handleClick}
										>
											About <i className="far fa-address-card"></i>
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link text-light"
											href="#projects"
											onClick={this.handleClick}
										>
											Projects <i className="fas fa-briefcase"></i>
										</a>
									</li>
									{/* <li className='nav-item'>
										<a className='nav-link text-light' href='/' onClick={this.handleClick}>
											Blog <i className='fas fa-blog'></i>
										</a>
									</li> */}
									<li className="nav-item">
										<a
											className="nav-link text-light"
											href="#contact"
											onClick={this.handleClick}
										>
											Contact <i className="fas fa-id-card-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>

				<div className="overlay"></div>

				<div className="banner container text-center">
					<div className="intro-text text-white mb-2">I am a</div>
					<div className="intro-text-desc text-white font-weight-bold">
						<Typewriter
							options={{
								strings: ['Front End Developer', 'Software Engineer'],
								autoStart: true,
								deleteSpeed: 50,
								loop: true
							}}
						/>
					</div>

					<a
						className="btn btn-success mt-5 text-white hire"
						href="#contact"
						onClick={this.handleClick}
					>
						Hire me!
					</a>
				</div>

				<a
					href="#about"
					className="scroll-bottom text-white btn-down"
					onClick={this.handleClick}
				>
					{''}
					<BsArrowDownCircle size={40} />
				</a>
			</header>
		);
	}
}

export default Header;
