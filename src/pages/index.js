import React from "react";
import { Link } from "gatsby";
import { Link as ScrollLink, Element } from "react-scroll";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import Logo from "../components/logo";

class IndexPage extends React.Component {
    render() {
        const siteTitle = "Hank Hsu's Website";

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="Home"
                    keywords={[`Hank`, `Hank`, `Personal`, `Website`]}
                />
                <Element name="header" className="header">
                    <div className="header__container">
                        <div className="header__logo">
                            <Logo />
                        </div>
                        <div className="header__title">
                            <h1 className="header__h1 line1">HANK</h1>
                            <h1 className="header__h1 line2">HSU</h1>
                        </div>
                    </div>
                    <ScrollLink
                        activeClass="active"
                        to="about"
                        smooth={true}
                        duration={1000}
                        className="header__arrow"
                    >
                        <span></span>
                    </ScrollLink>
                </Element>
                <Element name="about" className="section">
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm Hank Hsu, a computer hardware engineering
                        student from Taichung, Taiwan.{" "}
                    </p>
                    <p>
                        I graduated from National Taiwan University with a
                        double major in mechanical engineering and electrical
                        engineering. My research interests lie in{" "}
                        <b>bio-inspired robots</b>, <b>mmWave IC</b>, and{" "}
                        <b>digital IC / VLSI</b>. During my undergraduate years,
                        I participated in several research projects, including
                        the gait development of a Hexapod robot, a Ka-band
                        down-conversion mixer IC, and an advanced encryption
                        standard encryption/decryption IC.
                    </p>
                    <p>
                        I decided to pursue a master's degree in electrical and
                        computer engineering in the U.S. Currently, I'm waiting
                        for the admission decision.
                    </p>
                    {/*<div id="liveUpdates">
                        <h2>Live Updates</h2>
                        <div id="liveWrapper">
                            <ul>
                                <li>Georgia Tech ECE M.S.</li>
                                <li>University of Michigan ECE M.S.</li>
                                <li>Carnegie Mellon University ECE M.S.</li>
                                <li>Purdue University ECE M.S.</li>
                                <li>
                                    The University of Texas at Austin ECE M.S.
                                </li>
                                <li>
                                    University of California, Los Angeles ECE
                                    M.S.
                                </li>
                                <li>
                                    University of Southern California ECE M.S.
                                </li>
                                <li>
                                    University of California San Diego ECE M.S.
                                </li>
                                <li>University of Washington ECE M.S.</li>
                            </ul>
                        </div>
                    </div>*/}
                </Element>
                <Element name="exp" className="section">
                    <h1>Experiences</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.{" "}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Element>
                <Element name="proj" className="section">
                    <h1>Projects</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Element>
                <Element name="posts" className="section">
                    <h1>Posts</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.{" "}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <Link to="/blog/">
                        <Button marginTop="35px">Go to Blog</Button>
                    </Link>
                </Element>
            </Layout>
        );
    }
}

export default IndexPage;
