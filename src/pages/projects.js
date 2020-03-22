import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Projects extends React.Component {
  render() {
    const template = 'projects-template';

    return (
      <Layout template={template}>
        <SEO title="Projects" />
        <div className="projects-list">
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
            <li>Project 5</li>
            <li>Project 6</li>
            <li>Project 7</li>
            <li>Project 8</li>
            <li>Project 9</li>
            <li>Project 10</li>
            <li>Project 11</li>
            <li>Project 12</li>
            <li>Project 13</li>
            <li>Project 14</li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Projects;
