/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Drcoolsanjeev`,
    description: `Personal platform to post my blogs, work and talks on upcoming technologies`,
    siteUrl: `https://drcoolsanjeev.netlify.com/`,
    home: {
      title: `Hi! I'm Sanjeev`,
      description: `I'm a Fullstack Web Developer, working in Red Hat, capable of building web applications in Java, NodeJs and Go. Also creating design and implementing them to create attractive UI`,
    },
    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: `5e962e8f976a0CF_Domain_verify` 
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-30027142-1",
        head: true,
      }
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
