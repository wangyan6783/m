import React, {Fragment} from 'react';
import NavBar from '../components/NavBar';
import HomeMain from '../components/HomeMain';

const LandingPage = () => {
  return (
    <div id="home" className="page">
      <div id="background"></div>
      <NavBar />
      <HomeMain />
    </div>
  )
}

export default LandingPage;
