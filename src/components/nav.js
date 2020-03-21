import React from 'react';
import { Link } from 'gatsby';

import Logo from './logo';

class Nav extends React.Component {
  render() {
    return (
      <nav className="site-nav">
        <div className="site-nav-left-wrapper">
          <div className="site-nav-left">
            <Link to="/" className="site-nav-logo">
              <Logo test="123" />
            </Link>
            <div className="site-nav-content" role="menu">
              <ul className="nav">
                <li className="nav-home">
                  <Link to="/" role="menuitem">
                    Home
                  </Link>
                </li>
                <li className="nav-projects">
                  <Link to="/projects/" role="menuitem">
                    Projects
                  </Link>
                </li>
                <li className="nav-posts">
                  <Link to="/blog/" role="menuitem">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="site-nav-right">
          <div className="social-links">
            <a
              href="https://www.facebook.com/hankhsu1996"
              className="social-link social-link-fb"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.204 4.911h-3.546c-2.103 0-4.443.885-4.443 3.934.01 1.062 0 2.08 0 3.225h-2.433v3.872h2.509v11.147h4.61v-11.22h3.042l.275-3.81h-3.397s.007-1.695 0-2.187c0-1.205 1.253-1.136 1.329-1.136h2.054V4.911z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/hankhsu1996/"
              className="social-link social-link-li"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M15.999,0.395C7.164,0.395,0,7.559,0,16.396
	c0,7.07,4.584,13.067,10.942,15.182c0.8,0.146,1.092-0.347,1.092-0.771c0-0.38-0.014-1.388-0.021-2.723
	c-4.451,0.967-5.39-2.145-5.39-2.145C5.896,24.093,4.847,23.6,4.847,23.6c-1.453-0.991,0.11-0.973,0.11-0.973
	c1.606,0.113,2.451,1.65,2.451,1.65c1.428,2.443,3.745,1.737,4.657,1.329c0.145-1.034,0.559-1.74,1.016-2.139
	c-3.553-0.405-7.288-1.776-7.288-7.909c0-1.747,0.624-3.175,1.647-4.293C7.274,10.86,6.725,9.234,7.595,7.031
	c0,0,1.344-0.43,4.4,1.641c1.276-0.355,2.645-0.533,4.006-0.539c1.359,0.006,2.727,0.184,4.006,0.539
	c3.055-2.071,4.396-1.641,4.396-1.641c0.873,2.203,0.323,3.83,0.159,4.234c1.024,1.119,1.645,2.547,1.645,4.293
	c0,6.147-3.741,7.5-7.306,7.896c0.575,0.495,1.086,1.472,1.086,2.964c0,2.139-0.02,3.863-0.02,4.39c0,0.428,0.288,0.924,1.101,0.769
	C27.42,29.457,32,23.464,32,16.396C32,7.559,24.836,0.395,15.999,0.395z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/hankhsu1996/"
              className="social-link social-link-li"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M 29.691406 0 L 2.308594 0 C 1.03125 0 0 1.035156 0 2.308594 L 0 29.691406 C 0 30.96875 1.03125 32 2.308594 32 L 29.691406 32 C 30.96875 32 32 30.96875 32 29.691406 L 32 2.308594 C 32 1.03125 30.96875 0 29.691406 0 Z M 11.351562 24.1875 L 7.453125 24.1875 L 7.453125 12.464844 L 11.351562 12.464844 Z M 9.402344 10.863281 L 9.375 10.863281 C 8.070312 10.863281 7.222656 9.964844 7.222656 8.839844 C 7.222656 7.6875 8.09375 6.8125 9.429688 6.8125 C 10.761719 6.8125 11.582031 7.6875 11.605469 8.839844 C 11.605469 9.964844 10.761719 10.863281 9.402344 10.863281 Z M 25.402344 24.1875 L 21.503906 24.1875 L 21.503906 17.914062 C 21.503906 16.339844 20.941406 15.265625 19.53125 15.265625 C 18.453125 15.265625 17.8125 15.988281 17.53125 16.691406 C 17.429688 16.941406 17.402344 17.289062 17.402344 17.640625 L 17.402344 24.1875 L 13.507812 24.1875 C 13.507812 24.1875 13.558594 13.5625 13.507812 12.464844 L 17.402344 12.464844 L 17.402344 14.125 C 17.921875 13.324219 18.847656 12.1875 20.914062 12.1875 C 23.480469 12.1875 25.402344 13.863281 25.402344 17.464844 Z M 25.402344 24.1875 " />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
