import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostCard from '../components/postCard';

class Blog extends React.Component {
  render() {
    const template = 'blog-template';
    const { data } = this.props;
    const posts = data.allMdx.edges;

    return (
      <Layout template={template}>
        <SEO title="Blog" />
        <div className="post-feed">
          {posts.map(({ node }, index) => {
            let articleClass = ['post', 'post-card'];
            if (index % 6 === 0) articleClass.push('post-card-large');

            const excerpt = node.frontmatter.description || node.excerpt;
            const timeToRead = node.timeToRead;
            const title = node.frontmatter.title || node.fields.slug;
            const formattedDate = node.frontmatter.formattedDate;
            const date = node.frontmatter.date;
            const slug = node.fields.slug;
            const link = `blog${slug}`;
            const tags = node.frontmatter.tags;
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid;

            return (
              <PostCard
                articleClass={articleClass}
                excerpt={excerpt}
                slug={slug}
                link={link}
                timeToRead={timeToRead}
                formattedDate={formattedDate}
                date={date}
                title={title}
                tags={tags}
                featuredImgFluid={featuredImgFluid}
              />
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
