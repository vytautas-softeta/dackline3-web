module.exports = {
  siteMetadata: {
      title: `dackline3-web`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "146118b63d40cfb6319ac721436bfd"
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};