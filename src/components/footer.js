import React from 'react';
import { Link } from 'gatsby';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer outer">
        <div className="site-footer-content inner">
          <section className="copyright">
            <Link to="/">Hank Hsu</Link> &copy; {new Date().getFullYear()}
          </section>
          <nav className="site-footer-nav">
            <Link to="/">Home Page</Link>
            <a
              href="https://www.facebook.com/hankhsu1996"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/hankhsu1996/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>
        <div className="site-footer-content inner">
          <section>
            All right reserved. Built with{' '}
            <a
              href="https://www.gatsbyjs.org/"
              title="GatsbyJS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            .
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
