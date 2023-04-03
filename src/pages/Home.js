import React, { useState } from 'react';
import Header from '../components/Header';
import background from '../assets/img/background.png'
import backgroundMobile from '../assets/img/background-mobile.svg'
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = ({value}) => {
    const [cards, setCards] = useState(value);
   
    return (
        <>
            <Header />
            <div className="background-block">
                <img className='bcdesktop' src={background} alt="background kasa" />
                <img className='bcmobile' src={backgroundMobile} alt="background kasa" />
                <div className="background-filter">    
                </div>
                <h1 className='h1desktop'>Chez vous, partout et ailleurs</h1>
                <h1 className='h1mobile'>Chez vous,<br/> partout et ailleurs</h1>
            </div>
            <div className="location-block">
                 {cards.map((value,index) => (
                    <Card value={value} key={value.id} />
                 ) )}
            </div>
            <Footer/>
        </>
        
    );
};

export default Home;