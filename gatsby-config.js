const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const path = require('path');
const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Gatsby Starter Tailwind CSS",
    author: "Melanie Nolan",
    description: "A Gatsby starter to set you up with Tailwind CSS",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
