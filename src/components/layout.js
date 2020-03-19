import React from 'react';

import Logo from './logo';
import Nav from './nav';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props;
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const blogPath = `${__PATH_PREFIX__}/blog/`;
    let header;
    let headerClass;
    let wrapperClass = [this.props.template, 'site-wrapper'].join(' ');

    if (location.pathname === rootPath) {
      headerClass = 'site-home-header';
      header = (
        <div className="outer site-header-background no-image">
          <div className="inner">
            <Nav />
            <div className="site-header-content">
              <Logo className="site-logo" />
              <h2 className="site-description">
                Digital Design Engineering Student from Taiwan
              </h2>
            </div>
          </div>
        </div>
      );
    } else if (location.pathname === blogPath) {
      header = <h1>Hello World!</h1>;
    } else {
      header = <h1>Hello World!</h1>;
    }
    return (
      <div className={wrapperClass}>
        <header className={headerClass}>{header}</header>
        <main className="site-main outer">
          <div className="inner">{children}</div>
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
