import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';

ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Azzedine El Boujoufi</title>
      <html lang="fr" />
      <meta
        name="description"
        content="Bienvenue sur mon site! Mon nom est Azzedine et je suis développeur .Net / Javascript."
      />
    </Helmet>
    <App />
  </>,
  document.getElementById('root')
);
