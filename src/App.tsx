import React from 'react';

import Main from './components/Main/Main';
import About from './components/About/About';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import GlobalStyles from './styles/Global';

const App: React.FC = () => {
  return (
    <>
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
