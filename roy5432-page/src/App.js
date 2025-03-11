import React from 'react';
import Main from './components/Main';
import BackgroundGraph from './components/BackgroundGraph'
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HoverBlock from './components/HoverBlock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <BackgroundGraph />
      <Main />
      <Footer />
      <HoverBlock />
    </div>
  );
}

export default App;
