const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const path = require("path")
const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Dapptools-rs",
    author: "(☞ﾟ∀ﾟ)☞ Dapptools-rs",
    url: "https://dapptools.rs",
    image: "./og-image.jpg",
    description: "A drop-in replacement for Dapptools, written in Rust.",
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
