import React, { useState } from 'react';

import NavTabs from './NavTabs';
import PortfolioContainer from './PortfolioContainer';
import Home from './pages/Portfolio';
import About from './pages/About';
import Footer from './pages/Footer';
import Contact from './pages/Contact';


function Portfolio() {

  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('Home');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <Footer />
    </div>
  );
}

export default Portfolio;
