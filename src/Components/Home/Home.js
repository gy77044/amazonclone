import React from 'react';
import './Home.css';
import Product from '../Product/Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src={require('../../assets/banner.jpeg')}
          alt=''
        />
        <div className='home__row'>
          <Product
            id='1'
            title='The Lean Startup'
            image='https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
            price={19.99}
            rating={4}
          />
          <Product
            id='2'
            title='Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)'
            image='https://m.media-amazon.com/images/I/41TLCGDC6GL._AC_UY327_FMwebp_QL65_.jpg'
            price={29.99}
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='3'
            title='Woodland Gb 1207112nw Ankle Boot'
            image='https://m.media-amazon.com/images/I/81M9hTRwYrL._AC_UL480_FMwebp_QL65_.jpg'
            price={59.99}
            rating={4}
          />
          <Product
            id='4'
            title='Good To Great'
            image='https://images-eu.ssl-images-amazon.com/images/I/61YfNhp-6uL._AC_UL232_SR232,232_.jpg'
            price={8.99}
            rating={3}
          />
          <Product
            id='5'
            title='The Innovator Dilemma'
            image='https://m.media-amazon.com/images/I/51X-IOVUfML._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg'
            price={19.99}
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='6'
            title='Acer 109 cm (43 inches) Advanced I Series 4K Ultra HD Smart LED Google TV'
            image='https://m.media-amazon.com/images/I/81N--AIhfxL._AC_UY327_FMwebp_QL65_.jpg'
            price={39.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
