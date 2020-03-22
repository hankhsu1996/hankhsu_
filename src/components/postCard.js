import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import avatar from '../../content/assets/avatar.png';

class PostCard extends React.Component {
  render() {
    const {
      articleClass,
      excerpt,
      slug,
      link,
      timeToRead,
      formattedDate,
      date,
      title,
      tags,
      featuredImgFluid,
    } = this.props;

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
                  __html: excerpt,
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
  }
}

export default PostCard;
