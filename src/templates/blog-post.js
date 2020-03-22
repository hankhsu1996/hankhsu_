import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

import avatar from '../../content/assets/avatar.png';

const myImg = props => (
  <figure className="kg-card kg-image-card">
    <img className="abc" style={{ color: 'tomato' }} {...props} />
  </figure>
);

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const excerpt = post.excerpt;
    const timeToRead = post.timeToRead;
    const title = post.frontmatter.title || post.fields.slug;
    const tags = post.frontmatter.tags;
    const date = post.frontmatter.date;
    const formattedDate = post.frontmatter.formattedDate;
    const tagsLink = `/tag/${tags
      .toLowerCase()
      .split(' ')
      .join('-')}`;
    const featuredImgFluid =
      post.frontmatter.featuredImage.childImageSharp.fluid;
    const { previous, next } = this.props.pageContext;

    const components = { img: myImg };

    return (
      <Layout template={'post-template'}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <article className="post-full post">
          <header className="post-full-header">
            <section className="post-full-tags">
              <Link to={tagsLink}>{tags}</Link>
            </section>
            <h1 className="post-full-title">{title}</h1>
            <p className="post-full-custom-excerpt">{excerpt}</p>
            <div className="post-full-byline">
              <section className="post-full-byline-content">
                <ul className="author-list">
                  <li className="author-list-item">
                    <div className="author-card">
                      <img
                        className="author-profile-image"
                        src={avatar}
                        alt="avatar"
                      />
                      <div className="author-info">
                        <div className="bio">
                          <h2>Shou-Li Hsu</h2>
                          <p>Excerpt</p>
                          <p>
                            <Link to="/blog">More posts</Link> by Shou-Li Hsu.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="author-avatar">
                      <Link to="/blog">
                        <img
                          className="author-profile-image"
                          src={avatar}
                          alt="avatar"
                        />
                      </Link>
                    </div>
                  </li>
                </ul>
                <section className="post-full-byline-meta">
                  <h4 className="author-name">
                    <Link to="/blog">Shou-Li Hsu</Link>
                  </h4>
                  <div className="byline-meta-content">
                    <time className="byline-meta-date" dateTime={date}>
                      {formattedDate}
                    </time>
                    <span className="byline-reading-time">
                      <span className="bull">•</span> {timeToRead} min read
                    </span>
                  </div>
                </section>
              </section>
            </div>
          </header>
          <figure className="post-full-image">
            <Img fluid={featuredImgFluid} />
          </figure>
          <section className="post-full-content">
            <div className="post-content"></div>
            <MDXProvider components={components}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </section>
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        tags
        formattedDate: date(formatString: "DD MMM YYYY ")
        date
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
