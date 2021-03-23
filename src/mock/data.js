import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Azzedine El Boujoufi', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Bienvenue sur mon site !', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Oh bonjour! Mon nom est',
  name: 'Azzedine',
  subtitle: 'Je suis développeur .Net / Javascript.',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://bit.ly/elbazzcv', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'acryptex.png',
    title: 'Acryptex',
    info:
      'Acryptex est un gestionnaire de mot de passe, une application bureau multi-plateforme. \
      Stockez les informations de vos comptes dans un fichier local crypté. \
      Verrouillez/déverrouillez ce fichier en vous authentifiant avec votre compte maître.',
    info2: 'Technologies utilisées : React, Redux, TypeScript & Electron.',
    url: '',
    repo: 'https://github.com/Arsero/acryptex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'citassist.png',
    title: 'Citassist - Hackathon Citizens of Wallonia 2020',
    info:
      'Citassist est une solution globale de prise en charge \
    de personnes à besoin(s) spécifique(s) lors de leur arrivée à l’hôpital, \
    à l’aéroport, ou dans tout endroit où des personnes souffrant de \
    déficiences motrices, auditives ou mentales ont besoin d’accompagnement.',
    info2: 'Technologies utilisées : React, React Native, TypeScript & .Net Core.',
    url: '',
    repo: 'https://github.com/wearespacey/citassist', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stfa.png',
    title: 'Stay The F*** Apex - Stay the F*** At Home Hackathon',
    info:
      'STFA est une plateforme permettant de rassembler des propriétaires \
      d’imprimantes 3D et des créateurs de modèles 3D pour leur \
      permettre de partager et loueur leurs ressources.',
    url: '',
    repo: 'https://github.com/wearespacey/staythef-apex', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Un défi à me proposer ?',
  btn: 'Parlons-en !',
  email: 'azzedine.elb@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Arsero',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/elbazzedine/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};