import styled from 'styled-components';
import { colors } from '../../source/Data';

export const Container = styled.div`
  background: linear-gradient(-45deg, ${colors.second}, ${colors.third});
  color: ${colors.fourth};

  h1 {
    text-align: center;
    padding-top: 2.5rem;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 2rem;
    padding-bottom: 5rem;

    div {
      flex: 1;
      max-width: 40%;
      text-align: center;

      img {
        max-width: 50%;
      }

      figcaption {
        font-size: 0.8rem;
        max-width: 50%;
        text-align: center;
        margin: auto;

        a {
          transition: 0.5s;
        }

        a:visited {
          color: ${colors.fourth};
        }

        a:hover {
          color: ${colors.first};
        }
      }

      p {
        font-size: 1.5rem;
        margin: 1em;
        text-align: justify;
        font-weight: 400;
      }
    }
  }

  /* Responsive layouts */

  @media (max-width: 1800px) {
    h1 {
      font-size: 2.5rem !important;
    }

    p {
      font-size: 1.2rem !important;
    }
  }

  @media (max-width: 1200px) {
    section {
      margin: 2rem 0;
    }

    h1 {
      font-size: 2.5rem !important;
    }

    img {
      max-width: 70% !important;
    }

    p {
      font-size: 1.2rem !important;
    }
  }

  @media (max-width: 800px) {
    section {
      margin: 0 !important;
    }

    h1 {
      font-size: 2.2rem !important;
    }

    img {
      max-width: 80% !important;
    }

    p {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 600px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div {
        max-width: 80%;

        img {
          max-width: 60%;
          margin: 1.5em;
        }
      }
    }

    h1 {
      font-size: 2rem !important;
    }

    p {
      font-size: 1rem !important;
      margin: 1rem;
    }
  }
`;
