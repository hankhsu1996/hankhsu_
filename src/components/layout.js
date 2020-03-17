import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from './logo';
import Nav from './nav';
import { rhythm, scale } from '../utils/typography';

// Wrap header, main, and footer

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const blogPath = `${__PATH_PREFIX__}/blog/`;
    let header;
    let headerClass;
    let wrapperClass = [this.props.template, 'site-wrapper'].join(' ');
    console.log(wrapperClass);

    if (location.pathname === rootPath) {
      headerClass = 'site-home-header';
      header = (
        <div className="outer site-header-background no-image">
          <div className="inner">
            <Nav />
            <div className="site-header-content">
              <Logo className="site-logo" />
              <h2 className="site-description">Hank Hsu's Personal Website</h2>
            </div>
          </div>
        </div>
      );
    } else if (location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      );
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
        <Footer>
          <h1>hankhsu1996</h1>
          <p>© Copyright {new Date().getFullYear()}</p>
          <p>
            All right reserved. Built with{' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </p>
        </Footer>
      </div>
    );
  }
}

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

export default Layout;
