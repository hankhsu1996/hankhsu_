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

        <div className="post-full-content" style={{ marginTop: 50 }}>
          <div className="section">
            <h2>Hi, I'm Hank Hsu</h2>
            <p>
              I'm an engineering student from Taichung, Taiwan. I graduated from
              National Taiwan University with a double major in mechanical
              engineering and electrical engineering. Currently, I'm preparing
              for attending graduate school in the USA.
            </p>
            <p>
              My research interests lie in bio-inspired robots, mmWave
              integrated circuits, and digital integrated circuits; I've done
              some projects in these fields. Recently, I've been studying
              microarchitectures, which has become my new sweetheart. I have
              comprehensive capabilities in digital design, with past
              experiences in robot system development and RF circuits design as
              backups.
            </p>
            <p>
              In my free time, I like to travel, take photos, and browse design
              works on Pinterest. I also design websites, especially with
              interactive elements, in my spare time.
            </p>
          </div>
          <hr />
          <div className="section">
            <h2>What I've Done So Far</h2>
            <p>
              Well, I'm not a clear-minded person, so it took me a long time to
              explore my academic interests. I've engaged in three undergraduate
              research programs in both departments of mechanical engineering
              and electrical engineering.
            </p>
            <h3>Gait Development of a Hexapod Robot</h3>
            <p>
              The bio-inspired Hexapod robot has excellent ability to overcome
              tough terrainm; my team aimed to make the robot jump higher. We
              adapted a <i>flip-and-roll</i> gait on the robot so it can jump
              with a higher center of gravity.
            </p>
            <h3>Ka-band GaAs IQ Mixer</h3>
            <p>
              This mixer is part of the Ka-band receiver in the{' '}
              <i>Next Generation Very Large Array</i> project held by National
              Radio Astronomy Observatory, USA. I designed the mixer by myself
              under the guidance of Academia Sinica, Taiwan.
            </p>
            <p>
              The mixer down-convert 30 - 52 GHz RF signal to 4 - 20 GHz IF
              signal, and achieves sufficient image rejection ratio within the
              bandwidth. It has been taped-out with WIN GaAs process.
            </p>
            <h3>Advanced Encryption Standard Hardware Accelerator</h3>
            <p>
              I've designed an ASIC for Advanced Encryption Standard algorithm.
              Taped-out with UMC 0.18 process, this ASIC achieves 300+ times
              faster encryption / decryption than software.
            </p>
            <h3>More Projects</h3>
            <p>
              I only list a few of larger projects I've done. I also have some
              smaller but fun projects I want to share with you; please check{' '}
              <Link to="/projects">this link</Link> to browse more.
            </p>
          </div>
          <hr />
          <div className="section">
            <h2>The Big Things</h2>
            <h3>B.S. in Engineering</h3>
            <p>
              <i>National Taiwan University | 2014 - 2019</i>
            </p>
            <p>
              Graduated from National Taiwan University. Received the double
              degree of B.S. in mechanical engineering and electrical
              engineering.
            </p>
            <h3>Internship in FLUC Inc.</h3>
            <p>
              <i>Taipei, Taiwan | 2017</i>
            </p>
            <p>
              Served as a maker intern in FLUX Inc., a company designing numeric
              control products including 3D printers and LASER engraving
              machines.
            </p>
            <h3>Internship in HIWIN Corp.</h3>
            <p>
              Served as an intern in HIWIN Corp., a company manufacturing
              transmission control components and industrial robots.
            </p>
          </div>
          <hr />
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
