import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Blog Title!!`,
    author: `My Name`,
    description: `My site description...`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
  options: {
  basePath: `/`,
  prismPreset: `dracula`,
    },
    },
  ],
};

export default config;
