import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { nanoid } from 'nanoid';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a
            key={nanoid()}
            href={'https://github.com/Arsero'}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={'github'}
          >
            <i className={`fa fa-github fa-inverse`} />
          </a>
          <a
            key={nanoid()}
            href={'https://www.linkedin.com/in/elbazzedine/'}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={'linkedin'}
          >
            <i className={`fa fa-linkedin fa-inverse`} />
          </a>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
