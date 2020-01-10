module.exports = {
  siteMetadata: {
    title: `100DaysOfGatsby`,
    description: `Challenge 01 - Gatsby blog theme`,
    author: `June Leoman Lapera <leomanlapera@gmail.com>`,
  },
  plugins: [
    {
      resolve: `@leomanlapera/gatsby-theme-blog`, 
      options: {
        contentPath: `blogs`,
        basePath: `/blog`,
      },
    },
  ]
}
