const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: 'Kyunghwa Yoo',
    siteTitleAlt: 'Kyunghwa Yoo',
    siteHeadline: 'Kyunghwa Yoo - Product Engineer',
    siteUrl: 'https://kyunghwa-yoo.github.io',
    siteDescription: 'React Redux TypeScript NextJs AWS Impact',
    siteLanguage: 'ko',
    siteImage: `/banner.jpg`,
    author: 'Kyunghwa Yoo',
  },
  plugins: [
    'gatsby-plugin-prettier-eslint',
    {
      resolve: '@lekoarts/gatsby-theme-minimal-blog',
      // See the theme's README for all available options
      options: {
        formatString: 'YYYY. MM. DD',
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
