module.exports = {
    siteMetadata: {
        title: `test-site`,
        siteUrl: `https://www.yourdomain.tld`,
        description: `any description`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: '690abd8e3da3a2f78e2116bddf0393',
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-typescript',
        'gatsby-plugin-typescript-checker',
    ],
};
