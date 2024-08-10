import React, { useContext, useState } from 'react';
import Header from '../components/header';
import HeroSection from '../components/heroSection';

function Home() {
    return(
        <div>
            <Header/>
            <HeroSection/>
        </div>
    );
}

export default Home;