const config = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    // "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-theme-blog`,
      options: {
        /*
        - basePath defaults to `/`
        */
        basePath: `/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-emotion`,
    //   options: {
    //     // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
    //     // The values for each key in this example are the defaults the plugin uses.
    //     sourceMap: true,
    //     autoLabel: "dev-only",
    //     labelFormat: `[local]`,
    //     cssPropOptimization: true,
    //   },
    // },
  ]
};

export default config;
