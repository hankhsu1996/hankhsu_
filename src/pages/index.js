import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/index.css';

class IndexPage extends React.Component {
  componentDidMount() {
    var nav = document.querySelector('.site-nav-main .site-nav');
    var content = document.querySelector('.post-full-content');
    var lastScrollY = window.scrollY;
    var ticking = false;
    function onScroll() {
      lastScrollY = window.scrollY;
      requestTick();
    }
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update);
      }
      ticking = true;
    }
    function update() {
      var trigger = content.getBoundingClientRect().top + window.scrollY;
      if (lastScrollY >= trigger - 20) {
        nav.classList.add('fixed-nav-active');
      } else {
        nav.classList.remove('fixed-nav-active');
      }
      ticking = false;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
  }

  render() {
    const siteTitle = "Hank Hsu's Website";
    const template = 'home-template';

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        template={template}
      >
        <SEO title="Home" keywords={[`Hank`, `Hank`, `Personal`, `Website`]} />

        <div className="post-full-content">
          <div className="section">
            <h2>About Me</h2>
            <p style={{ fontVariantLigatures: 'normal' }}>
              Hi, I'm Hank Hsu, a computer hardware engineering student from
              Taichung, Taiwan.
            </p>
            <p>
              I graduated from National Taiwan University with a double major in
              mechanical engineering and electrical engineering. My research
              interests lie in <b>bio-inspired robots</b>, <b>mmWave IC</b>, and{' '}
              <b>digital IC / VLSI</b>. During my undergraduate years, I
              participated in several research projects, including the gait
              development of a Hexapod robot, a Ka-band down-conversion mixer
              IC, and an advanced encryption standard encryption/decryption IC.
            </p>
            <p>
              I decided to pursue a master's degree in electrical and computer
              engineering in the U.S. Currently, I'm waiting for the admission
              decision.
            </p>
          </div>
          <div className="section">
            <h2>Experiences</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="section">
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="section">
            <h2>Posts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/blog/">BLOG</Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
