import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import useDarkMode from 'use-dark-mode';

import Main from './components/Main/Main';
import About from './components/About/About';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import GlobalStyles from './styles/Global';
import useWindowDimensions from './useWindowDimensions';

const App: React.FC = () => {
  const { width } = useWindowDimensions();
  const darkMode = useDarkMode(false);

  return (
    <>
      {width <= 800 ? (
        <DarkModeToggle
          className="noSelect"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={50}
          speed={3}
        />
      ) : (
        <DarkModeToggle
          className="noSelect"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={80}
          speed={3}
        />
      )}
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
