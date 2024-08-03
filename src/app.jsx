import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experiance/Experiance.jsx';
import Services from './components/Services/Services.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import PortfolioDetails from './components/Portfolio/PortfolioDetails.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/details" element={<PortfolioDetails />} />

        <Route path="/" element={
          <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
