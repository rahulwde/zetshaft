import React from 'react';
import Banner from './Banner';
import CardGrid from './CardGrid';
import Services from './Services';
import MarqueeSection from './MarqueeSection';
import SatisfactionSection from './SatisfactionSection';
import CardSlider from './CardSlider';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CardGrid></CardGrid>
      <Services></Services>
      <MarqueeSection/>
      <CardSlider/>
      <SatisfactionSection/>
    </div>
  );
};

export default Home;