import React from 'react';
import { SectionWrapper, Typography } from 'components';
import Navbar from './sections/Navbar';
import HomePageHero from './sections/Hero';

const Home: React.FC = () => (
	<>
		<Navbar/>
		<HomePageHero />
	</>
);

export default Home;