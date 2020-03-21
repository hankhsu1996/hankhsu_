const path = require('path');

module.exports = {
  pathPrefix: '/public',
  siteMetadata: {
    // edit below
    title: `Shou-Li Hsu`,
    author: `Shou-Li Hsu`,
    description: `Shou-Li Hsu's Website`,
    siteUrl: `https://hankhsu1996.netlify.io/`,
    social: {
      twitter: `hankhsu1996`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`, // image transform library
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`, // metadata
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `blog`),
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `assets`),
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`, // syntax highlights
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`, // " " to “ ”
          },
        ],
      },
    },
    // {
    //     resolve: `gatsby-plugin-google-analytics`,
    //     options: {
    //         // edit below
    //         // trackingId: `ADD YOUR TRACKING ID HERE`,
    //     }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shou-Li Hsu`,
        short_name: `Shou-Li Hsu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `hsl(211, 19%, 20%)`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
  ],
};
