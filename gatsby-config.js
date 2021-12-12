module.exports = {
  siteMetadata: {
    title: "Anke Van Mullem",
    url: "https://ankevanmullem.be",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anke Van Mullem`,
        short_name: `Anke Van Mullem`,
        start_url: `/`,
        background_color: `#ecf8ec`,
        theme_color: `#824921`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        include_favicon: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-styled-components",
  ],
};
