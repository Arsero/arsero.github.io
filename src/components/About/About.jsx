import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import img from '../../images/profile.png';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="A propos de moi" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img className="rounded shadow-lg" alt="profile picture" src={img} width="350px" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {
                    "C'est un peu par pur hasard que je suis tombé dans l'IT quand j'étais plus jeune. \
                    Au départ, je souhaitais créer un jeu vidéo car je suis fan de cet univers. \
                    Et je ne pensais pas qu'on pouvait faire d'un hobby son métier."
                  }
                </p>
                <p className="about-wrapper__info-text">
                  {
                    "Du coup, après 3 ans à la HEPL (INPRES), je décide de me lancer dans ce secteur d'activité \
                    afin d'aider toutes les personnes que je rencontre à simplifier leur vie en créant des outils capables de les aider."
                  }
                </p>
                <p className="about-wrapper__info-text">
                  {'Des sujets qui me tiennent à coeur : Open Source, Cloud et Green IT.'}
                </p>
                {
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://bit.ly/cvelbazz"
                    >
                      Carrière (CV)
                    </a>
                  </span>
                }
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
