import React from 'react';

import profilePicture from '../assets/profile.png';

import conversations from '../assets/conversations.png';
import cleanReact from '../assets/clean-react.jpg';
import selfolio from '../assets/selfolio.mp4';
import facerecon from '../assets/facerecon.mp4';
import extractify from '../assets/extractify.mp4';
import weather from '../assets/weather.mp4';

export const colors = {
  background: '#F0EFEA',
  first: '#000B29',
  second: '#1E656D',
  third: '#f22f46',
  fourth: '#F0EFEA',
};

export const headData = {
  title: 'Gustavo Varallo | Solutions Architect',
  description: `Welcome to Gustavo Varallo's website`,
};

export const mainData = {
  title: `Hey there, I'm`,
  name: ' Gustavo Varallo',
  subtitle: 'A Solutions Architect',
  subtitle2: 'Currently at ',
  cta: 'Know more',
};

export const aboutData = {
  sectionTitle: 'About',
  img: { src: profilePicture },
  p1: `My professional background includes many years in the commercial area - 
  where I gained experience with customer relationship building, account management, 
  teams management, hiring and training - but also a strong technical background 
  as a software engineer, with an extensive knowledge in frontend and backend 
  development, as well as a pronounced knowledge on microservices and cloud architectures.`,
  p2: `Currently as a Solutions Architect at Twilio for Latin America, which is 
  a senior role within the pre-sales solutions engineer team, I drive customers 
  to find the best solutions and architect their technical projects using our 
  vast range of products. On top of this, I am also a member of the SE enablement 
  team.`,
  p3: `Nowadays, as part of the Communications BU, I'm engaged on strategic 
  opportunities where clients require solutions with a higher technical complexity 
  for the following products: E-mail API (Twilio Sendgrid), Messaging 
  (Chatbots - including AI/Cognitive, SMS & WhatsApp APIs), Account Security 
  (Twilio Verify & Lookup APIs), Voice (IVRs - including AI/Cognitive & Programmable 
  Voice, SIP Interface, Elastic SIP Trunking APIs), Twilio Studio (No code platform 
  used to create Twilio applications) and Twilios Serverless (Used to create 
  event-driven microservices, integrate with 3rd party endpoints, and extend 
  Twilio Studio flows with custom logic)`,
};

export const projectSectionTitle = 'Personal Projects';

export const projectData = [
  {
    title: 'Twilio Conversations API Demo App',
    description1: (
      <>
        I have built the official code used worldwide by employees at Twilio to
        demonstrate{' '}
        <a
          href="https://www.twilio.com/docs/conversations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twilio Conversations API
        </a>
        product, which up until this date it was only demoable by making
        requests to the enpoints. I have built the frontend using
        React/Typescript, and the backend on serverlesss functions with NodeJS
        (link to the backend in the repo).
      </>
    ),
    description2: `About Twilio Conversations: It's an omni-channel messaging API that 
    allows to build engaging conversational messaging experiences across many 
    channels.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl:
      'https://github.com/TwilioLatamEngHub/chat-conversations-api-client',
    sourceText: 'Source Code',
    pic: { src: conversations },
  },
  {
    title: 'Clean React (4Devs - Survey for Devs)',
    description1: `An online survey app to solidify and apply advanced knowledge 
    in Design Patterns, Clean Architecture, SOLID principles & TDD/DDD on projects 
    using React and TypeScript.`,
    description2: `Please follow the source code link below to see all the
    principles, design patters, methodologies, libraries and tools I used for it.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/clean-react',
    sourceText: 'Source Code',
    pic: { src: cleanReact },
  },
  {
    title: 'Selfolio',
    description1: `This very website you are right now. I made it available as 
    an open source project so others can benefit from it.`,
    description2: `I built it from scratch with React, Typescript, and minimum 
    dependencies. All the responsive design was made in pure CSS with Styled 
    Components.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: 'Source Code',
    video: { src: selfolio },
  },
  {
    title: 'Weather App',
    description1: `A Vue.js weather forecast app using OpenWeather, LocationIQ and
    Google APIs`,
    description2: `I used v3.x of Vue.js and Tailwind CSS for styles.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/weather',
    sourceText: 'Source Code',
    video: { src: weather },
  },
  {
    title: 'Face Recon',
    description1: `An app that recognizes faces in any picture URL which uses 
    Clarifai's API. I developed both the front-end and back-end of this app.`,
    description2: `For the front I used React, and for the back I used 
    NodeJS, Express, PostgreSQL, bcrypt and Knex.js. Deployed on Heroku. For 
    more details, please click on the source code link below.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/facerecognition',
    sourceText: 'Source Code',
    video: { src: facerecon },
  },
  {
    title: 'Extractify',
    description1: `An app that parses PDF to Text in seconds!`,
    description2: `I built this project with the following tools: In the backend, 
    I used Firebase, Node/Express and the pdf-parse package. In the frontend, I 
    used React and React Bootstrap. Finally I used Firebase Hosting to deploy.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/extractify',
    sourceText: 'Source Code',
    video: { src: extractify },
  },
];

export const contactData = {
  title: 'Drop me a line',
  description: `Your e-mail won't be lost in a pile of junk, trust me!`,
  mailTo: 'mailto:gustavo@varallo.me',
};

export const FooterData = {
  linkedinUrl: 'https://www.linkedin.com/in/gustavovarallo/',
  githubUrl: 'https://github.com/guvarallo',
};
