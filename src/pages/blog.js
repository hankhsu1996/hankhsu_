import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import avatar from '../../content/assets/avatar.png';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    // init variables
    this.nav = null;
    this.feed = null;
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
    this.feed = document.querySelector('.post-feed');

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
    var trigger = this.feed.getBoundingClientRect().top + window.scrollY;
    if (this.state.lastScrollY >= trigger - 20) {
      this.nav.classList.add('fixed-nav-active');
    } else {
      this.nav.classList.remove('fixed-nav-active');
    }
    this.setState({ ticking: false });
  };

  render() {
    const template = 'blog-template';
    const { data } = this.props;
    const posts = data.allMdx.edges;

    return (
      <Layout template={template}>
        <SEO title="Blog" />
        <div className="post-feed">
          {posts.map(({ node }, index) => {
            const timeToRead = node.timeToRead;
            const title = node.frontmatter.title || node.fields.slug;
            const formattedDate = node.frontmatter.formattedDate;
            const date = node.frontmatter.date;
            const slug = node.fields.slug;
            const link = `blog${slug}`;
            const tags = node.frontmatter.tags;
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid;

            let articleClass = ['post', 'post-card'];
            if (index % 6 === 0) articleClass.push('post-card-large');

            return (
              <article key={slug} className={articleClass.join(' ')}>
                <Link to={link} className="post-card-image-link">
                  <Img
                    fluid={featuredImgFluid}
                    className="post-card-image"
                    alt={title}
                  ></Img>
                </Link>
                <div className="post-card-content">
                  <Link to={link} className="post-card-content-link">
                    <header className="post-card-header">
                      <div className="post-card-primary-tag">{tags}</div>
                      <h2 className="post-card-title">{title}</h2>
                    </header>
                    <section className="post-card-excerpt">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </Link>
                  <footer className="post-card-meta">
                    <ul className="author-list">
                      <li className="author-list-item">
                        <div className="author-name-tooltip">Shou-Li Hsu</div>
                        <div className="static-avatar">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="author-profile-image"
                          />
                        </div>
                      </li>
                    </ul>

                    <div className="post-card-byline-content">
                      <span>
                        <Link to="author/shoulihsu/">Shou-Li Hsu</Link>
                      </span>
                      <span className="post-card-byline-date">
                        <time dateTime={date}>{formattedDate}</time>
                        <span className="bull">•</span> {timeToRead} min read
                      </span>
                    </div>
                  </footer>
                </div>
              </article>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            formattedDate: date(formatString: "DD MMM YYYY ")
            date
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
