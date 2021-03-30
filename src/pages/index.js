import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
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
    </>
  );
};
