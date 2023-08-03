import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import { headData } from './source/Data';
import App from './App';

const { title, description } = headData;

// App entry point

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
