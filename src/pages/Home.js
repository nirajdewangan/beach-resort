import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services'; 
const Home = () =>{
  return(
    <>
        <Hero hero="defaultHero" >
          <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
              <Link class="btn-primary" to="/rooms">our rooms</Link>
          </Banner>
        </Hero>
        <Services />
    </>
  )
}

export default Home;