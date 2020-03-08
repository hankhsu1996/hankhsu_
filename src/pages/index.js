import React from "react";
import { Link } from "gatsby";
import { Link as ScrollLink, Element, scrollSpy } from "react-scroll";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handleSetActive = this.handleSetActive.bind(this);
    this.handleSetInactive = this.handleSetInactive.bind(this);

    // Set some state
    this.state = {
      active: "about",
      showNav: false
    };
  }

  // Section active spy
  onLayoutEffect() {
    scrollSpy.update();
  }

  // Because react-scroll can only set active class to link itself, we have to write another function to set active class to the link's wrapper
  handleSetActive(targetName) {
    this.setState({
      active: targetName,
      showNav: true
    });
  }

  // Handle the scroller out of range
  handleSetInactive(targetName) {
    // Wait for a time to check if current position is out of range
    setTimeout(() => {
      if (targetName == "about" && this.state.active == "about") {
        this.setState({ showNav: false });
      }
    }, 10);
  }

  render() {
    const siteTitle = "hankhsu1996";

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <nav className={this.state.showNav ? "show" : "hide"}>
          <li className={this.state.active == "about" ? "activeLock" : null}>
            <ScrollLink
              className={this.state.active == "about" ? "activeLock" : null}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              About Me
            </ScrollLink>
          </li>
          <li
            className={this.state.active == "experiences" ? "activeLock" : null}
          >
            <ScrollLink
              className={
                this.state.active == "experiences" ? "activeLock" : null
              }
              activeClass="active"
              to="experiences"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              Experiences
            </ScrollLink>
          </li>
          <li className={this.state.active == "projects" ? "activeLock" : null}>
            <ScrollLink
              className={this.state.active == "projects" ? "activeLock" : null}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              Projects
            </ScrollLink>
          </li>
          <li className={this.state.active == "posts" ? "activeLock" : null}>
            <ScrollLink
              className={this.state.active == "posts" ? "activeLock" : null}
              activeClass="active"
              to="posts"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
            >
              Posts
            </ScrollLink>
          </li>
        </nav>
        <Element name="about" className="section">
          <h1>About Me</h1>
        </Element>
        <Element name="experiences" className="section">
          <h1>Experiences</h1>
        </Element>
        <Element name="projects" className="section">
          <h1>Projects</h1>
        </Element>
        <Element name="posts" className="section">
          <h1>Posts</h1>
          <Link to="/blog/">
            <Button marginTop="35px">Go to Blog</Button>
          </Link>
        </Element>
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    );
  }
}

export default IndexPage;
