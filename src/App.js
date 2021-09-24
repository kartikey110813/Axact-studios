import React from 'react';
import './App.css';
import Brands from './components/Brands';
import Corousel from './components/Corousel';
import FlashSale from './components/FlashSale';
import Footer from './components/Footer';
import Header from './components/Header';
import OfferLine from './components/OfferLine';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
    <Header/>
    <br /> <br />
    <Corousel/>
    <Products/>
    <FlashSale/>
    <OfferLine/>
    <Brands/>
    <br />
    <br />
    <Footer/>

    </div>
  );
}

export default App;
