import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/index.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    // init variables
    this.nav = null;
    this.content = null;
    this.state = {
      lastScrollY: 0,
      ticking: false,
    };

    // bind context
    this.onScroll = this.onScroll.bind(this);
    this.requestTick = this.requestTick.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.setState({
      lastScrollY: window.scrollY,
    });
    this.nav = document.querySelector('.site-nav-main .site-nav');
    this.content = document.querySelector('.post-full-content');

    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.update();
  }

  onScroll = function() {
    this.setState({ lastScrollY: window.scrollY });
    this.requestTick();
  };

  requestTick = function() {
    if (!this.state.ticking) {
      requestAnimationFrame(this.update);
    }
    this.setState({ ticking: true });
  };

  update = function() {
    var trigger = this.content.getBoundingClientRect().top + window.scrollY;
    if (this.state.lastScrollY >= trigger - 20) {
      this.nav.classList.add('fixed-nav-active');
    } else {
      this.nav.classList.remove('fixed-nav-active');
    }
    this.setState({ ticking: false });
  };

  render() {
    const siteTitle = 'Shou-Li Hsu';
    const template = 'home-template';

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        template={template}
      >
        <SEO title="Home" keywords={[`Shou-Li`, `Hsu`, `Hank`]} />

        <div className="post-full-content" style={{ marginTop: 50 }}>
          <div className="section">
            <h2>Hi, I'm Shou-Li Hsu</h2>
            <p>
              I'm a student from Taichung, Taiwan. I graduated from National
              Taiwan University with a double major in mechanical engineering
              and electrical engineering. Currently, I'm preparing for attending
              graduate school in the USA.
            </p>
            <p>
              My research interests lie in bio-inspired robots, mmWave
              integrated circuits, and digital integrated circuits. Recently,
              I've been studying microarchitectures, which has become my new
              sweetheart!
            </p>
            <p>
              I have comprehensive capabilities in digital circuits design, with
              past experiences in robot system development and RF circuits
              design as backups.
            </p>
            <p>
              In my free time, I like to travel, take photos, and browse design
              works on Pinterest. Sometimes I design my own works, too.
            </p>
          </div>
          <hr />
          <div className="section">
            <h2>What I've Done So Far</h2>
            <p>
              I've engaged in three undergraduate research programs, plus
              several class projects. Here's some of them:
            </p>
            <h3>Gait Development of a Hexapod Robot</h3>
            <p>
              The Hexapod robot has excellent ability to overcome tough
              terrainm; my team aimed to make the robot jump higher. We adapted
              a <i>flip-and-roll</i> gait on the robot so it can jump with a
              higher center of gravity at the beginning.
            </p>
            <h3>Ka-band GaAs IQ Mixer</h3>
            <p>
              This mixer is used in the receiver system in the{' '}
              <i>Next Generation Very Large Array</i>. It down-converts Ka-band
              RF signal to 4 - 20 GHz IF signal, and achieves high image
              rejection ratio within the bandwidth. It's been taped-out.
            </p>
            <h3>Advanced Encryption Standard Hardware Accelerator</h3>
            <p>
              It's an ASIC for Advanced Encryption Standard algorithm. Taped-out
              with UMC 0.18 process, this ASIC achieves 300+ times faster
              encryption / decryption than software.
            </p>
            <h3>More Projects</h3>
            <p>
              Only a few larger projects is listed. I've also done some smaller
              yet fun projects; some are class projects and others just for
              interest. For more projects, please{' '}
              <Link to="/projects">check this link</Link>.
            </p>
          </div>
          <hr />
          <div className="section">
            <h2>The Big Things</h2>
            <h3>B.S. in Engineering</h3>
            <p>
              <i>2014 - 2019</i> | Graduated from National Taiwan University.
              Received the double degree of B.S. in mechanical engineering and
              electrical engineering.
            </p>
            <h3>Internship in FLUC Inc.</h3>

            <p>
              <i>2017</i> | Served as a maker intern in FLUX Inc., a company
              designing numeric control products including 3D printers and LASER
              engraving machines.
            </p>
            <h3>Internship in HIWIN Corp.</h3>
            <p>
              <i>2016</i> | Served as an intern in HIWIN Corp., a company
              manufacturing transmission control components and industrial
              robots.
            </p>
          </div>
          <hr />
          <div className="section">
            <h2>Posts</h2>
            <p>
              I have not finished this section yet{' '}
              <span role="img" aria-label="smile">
                😉
              </span>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
