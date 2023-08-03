import React from 'react';
import Fade from 'react-reveal/Fade';
import { Cta } from '../../styles/Cta';

import { Container } from './Contact.styles';
import { contactData } from '../../source/Data';

const Contact: React.FC = () => {
  return (
    <Container id="Contact">
      <Fade duration={1000} delay={300} distance="30px">
        <h1>{contactData.title}</h1>
      </Fade>
      <div>
        <Fade bottom duration={1000} delay={300} distance="30px">
          <p>{contactData.description}</p>
          <Cta href={contactData.mailTo} target="_blank">
            E-mail
          </Cta>
        </Fade>
      </div>
    </Container>
  );
};

export default Contact;
