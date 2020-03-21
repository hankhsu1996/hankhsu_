import React from 'react';

import Logo from './logo';
import Nav from './nav';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    const { children, template } = this.props;
    let header;
    let headerClass;
    let wrapperClass;

    if (template === 'home-template' || template === 'blog-template') {
      wrapperClass = ['home-template', 'site-wrapper'].join(' ');
      headerClass = 'site-home-header';
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
    } else {
      header = <h1>Hello World!</h1>;
    }
    return (
      <div className={wrapperClass}>
        <header className={headerClass}>{header}</header>
        <main className="site-main outer">
          <div className="inner posts">{children}</div>
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
