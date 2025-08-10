import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Hero from './Hero';
import BelowHero from './BelowHero';
import HomeBody from './HomeBody';

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <BelowHero />
      <HomeBody />
      <Footer />
    </>
  );
}

export default Home;
