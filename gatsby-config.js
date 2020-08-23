const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: 'Kyunghwa Yoo',
    siteTitleAlt: 'Kyunghwa Yoo'
  },
  plugins: [
    'gatsby-plugin-prettier-eslint',
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: 'Blog',
            slug: '/blog'
          },
          {
            title: 'About',
            slug: '/about'
          }
        ]
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    shouldAnalyseBundle && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        reportFilename: '_bundle.html',
        openAnalyzer: false
      }
    },
  ].filter(Boolean)
};
