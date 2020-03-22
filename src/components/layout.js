import React from 'react';
import { Link } from 'gatsby';
import avatar from '../../content/assets/avatar.png';

import Logo from './logo';
import Nav from './nav';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    const { children, template } = this.props;
    let header;
    let headerClass;
    let mainClass;
    let wrapperClass;

    if (template === 'home-template') {
      wrapperClass = 'home-template site-wrapper';
      headerClass = 'site-home-header';
      mainClass = 'inner';
      header = (
        <div className="outer site-header-background no-image">
          <div className="inner">
            <Nav />
            <div className="site-header-content">
              <Logo className="site-logo" />
              <h2 className="site-description">
                <i>Think more design less.</i>
              </h2>
            </div>
          </div>
        </div>
      );
    } else if (
      template === 'blog-template' ||
      template === 'projects-template'
    ) {
      wrapperClass = 'author-template site-wrapper';
      headerClass = 'site-archive-header';
      mainClass = 'inner posts';

      header = (
        <React.Fragment>
          <div className="outer site-nav-main">
            <div className="inner">
              <Nav />
            </div>
          </div>
          <div className="outer site-header-background no-image">
            <div className="inner">
              <div className="site-header-content author-header">
                <img
                  src={avatar}
                  alt="avatar"
                  className="author-profile-image"
                />
                <div className="author-header-content">
                  <h1 className="site-title">Shou-Li Hsu</h1>
                  <h2 className="author-bio">Think more design less.</h2>
                  <div className="author-meta">
                    <div className="author-stats">7 posts</div>
                    <span className="author-social-link">
                      <Link to="/">Website</Link>
                    </span>
                    <span className="author-social-link">
                      <a
                        href="https://www.facebook.com/hankhsu1996"
                        title="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </span>
                    <span className="author-social-link">
                      <a
                        href="https://github.com/hankhsu1996/"
                        title="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </span>
                    <span className="author-social-link">
                      <a
                        href="https://www.linkedin.com/in/hankhsu1996/"
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      wrapperClass = 'post-template site-wrapper';
      headerClass = 'site-header';
      mainClass = 'inner';
      header = (
        <div className="outer site-nav-main">
          <div className="inner">
            <Nav />
          </div>
        </div>
      );
    }
    return (
      <div className={wrapperClass}>
        <header className={headerClass}>{header}</header>
        <main className="site-main outer">
          <div className={mainClass}>{children}</div>
        </main>
        <div className="outer site-nav-main">
          <div className="inner">
            <Nav />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
