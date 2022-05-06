import React from 'react';
import { Categories, Footer, HomePageHero, LearnMore, Navbar, Recipes, Subscription } from './sections';


const Home: React.FC = () => (
	<>
		<Navbar />
		<HomePageHero />
		<Categories /> 
		<Recipes />
		<LearnMore />
		<Subscription/>
		<Footer/>
	</>
);

export default Home;