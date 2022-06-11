import React from 'react';
import ReactTooltip from 'react-tooltip';
import { BackgroundSeparator } from './components/BackgroundSeparator/BackgroundSeparator';
import bgImage1 from './assets/images/custom-bg1.jpg';
import Header from './components/Header/Header';
import AboutSection from './components/AboutSection/AboutSection';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './app.scss';

const App = () => {
	return (
		<>
			<Header />
			<AboutSection />
			<TechStack />
			<BackgroundSeparator bgImage={bgImage1} />
			<Projects />
			<Contact />
			<Footer />
			<ReactTooltip />
		</>
	);
};

export default App;
