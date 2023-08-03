import React, { useCallback } from 'react';
import Fade from 'react-reveal/Fade';

import smoothscroll from 'smoothscroll-polyfill';

import twilioLogo from '../../assets/twilio.png';

import { mainData } from '../../source/Data';
import { Outdoor } from './Main.styles';
import { Cta } from '../../styles/Cta';

const Main: React.FC = () => {
  // const { title, name, subtitle, subtitle2, cta } = mainData;

  // Needed for the native window.scroll smooth behavior to work on all browsers
  smoothscroll.polyfill();

  const scrollTo = useCallback((element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop,
    });
  }, []);

  return (
    <></>
    // <Outdoor id="main">
    //   <Fade left duration={2000} delay={0} distance="30px">
    //     <h1>
    //       {title}
    //       <span>{name}</span>
    //     </h1>
    //     <div className="text-typing">{subtitle}</div>
    //     <Fade left duration={1000} delay={1500}>
    //       <div className="sub2-container">
    //         <div className="sub2">{subtitle2}</div>
    //         <Fade right duration={1500} delay={1500}>
    //           <img className="twilio-logo" src={twilioLogo} alt="twilio logo" />
    //         </Fade>
    //       </div>
    //     </Fade>
    //   </Fade>
    //   <Fade duration={2000} delay={2500} distance="30px">
    //     <Cta onClick={() => scrollTo(document.getElementById('about'))}>
    //       {cta}
    //     </Cta>
    //   </Fade>
    // </Outdoor>
  );
};

export default Main;
