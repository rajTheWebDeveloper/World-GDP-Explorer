import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CountriesByGDP from './components/CountriesByGDP';
import CountriesByGDPTable from './components/CountriesByGDPTable';
import CountriesByContinentGDP from './components/CountriesByContinentGDP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-x-hidden bg-[#000026]">
      <Navbar/>
      <Hero/>
      <CountriesByGDPTable/>
      <CountriesByGDP/>
      <CountriesByContinentGDP/>
      <Footer/>
    </div>
  );
}



export default App;
