const path = require("path");

module.exports = {
  pathPrefix: '/public',
  siteMetadata: {
    // edit below
    title: `Hank Hsu's Website`,
    author: `Hank Hsu`,
    description: `Hank Hsu's Website`,
    siteUrl: `https://hankhsu1996.netlify.io/`,
    social: {
      twitter: `hankhsu1996`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`,
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
        name: `hankhsu1996 - Hank Hsu's Website`,
        short_name: `hankhsu1996`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#29323c`,
        display: `minimal-ui`, // default: `minimal-ui`
        // edit below
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // {
    //     resolve: `gatsby-plugin-prefetch-google-fonts`,
    //     options: {
    //         fonts: [
    //             {
    //                 family: `Open Sans`,
    //                 variants: [`300`, `400`, `600`, `700`, `800`]
    //             },
    //             {
    //                 family: `Open Sans Condensed`,
    //                 variants: [`300`]
    //             }
    //         ]
    //     }
    // }
  ],
};
