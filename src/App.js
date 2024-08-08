import React from 'react';
import Header from './components/header';
import HeroSection from './components/heroSection';
import './i18n'; // Import tệp i18n
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;
