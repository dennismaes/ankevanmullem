module.exports = {
  siteMetadata: {
    title: "Anke Van Mullem",
    url: "https://ankevanmullem.be",
  },
  plugins: [
    "gatsby-plugin-sharp",
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
