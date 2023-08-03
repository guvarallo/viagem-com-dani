import React, { useCallback } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Container } from './Footer.styles';
import { FooterData } from '../../source/Data';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    analytics: any;
  }
}

const Footer: React.FC = () => {
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
    <Container id="Footer">
      <br />
      <a href="#!" onClick={() => scrollTo(document.getElementById('main'))}>
        <FontAwesomeIcon id="up" icon={faChevronUp} size="1x" />
      </a>
      <div>
        <a
          href={FooterData.linkedinUrl}
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => window.analytics.track('LinkedIn button clicked')}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          href={FooterData.githubUrl}
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => window.analytics.track('GitHub button clicked')}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <hr />

      {/* If you enjoyed this template, please leave my credits here! :) */}

      <span className="copyright">
        © {new Date().getFullYear()} - Template developed by
        <a
          href="https://github.com/guvarallo"
          rel="noopener noreferrer"
          target="_blank"
        >
          {' '}
          Gus Varallo
        </a>
      </span>
    </Container>
  );
};

export default Footer;
