/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://steamlinedesign.com/qltech/new/graphql`,
		type: {
			MediaItem: {
				createFileNodes: false,
			},
		},
      },
    },
	{
      resolve: "gatsby-source-wordpress-menus",
      options: {
        wordpressUrl: "https://steamlinedesign.com/qltech/new",
        languages: ["en"],
        enableWpml: false,
        allowCache: false,
        maxCacheDurationSeconds: 60 * 60 * 24
      },
    },
  {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `source sans pro\:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugin
	'gatsby-plugin-react-helmet',
	{
		resolve: 'gatsby-plugin-react-helmet-canonical-urls',
		options: {
		  siteUrl: 'https://www.qltech.com.au',
		},
	},
	'gatsby-plugin-sass',
	{
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: "#1d73bd",
      // Disable the loading spinner.
      showSpinner: true,
    },
  },
  {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'qltechau'
      }
    },
  {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        custom: `
            <IfModule mod_expires.c>
			  ExpiresActive On
			  # Images
			  ExpiresByType image/jpeg "access plus 1 year"
			  ExpiresByType image/gif "access plus 1 year"
			  ExpiresByType image/png "access plus 1 year"
			  ExpiresByType image/webp "access plus 1 year"
			  ExpiresByType image/svg+xml "access plus 1 year"
			  ExpiresByType image/x-icon "access plus 1 year"
			  # Video
			  ExpiresByType video/mp4 "access plus 1 year"
			  ExpiresByType video/mpeg "access plus 1 year"
			  # CSS, JavaScript
			  ExpiresByType text/css "access plus 1 month"
			  ExpiresByType text/javascript "access plus 1 month"
			  ExpiresByType application/javascript "access plus 1 month"
			  # Others
			  ExpiresByType application/pdf "access plus 1 month"
			  ExpiresByType application/x-shockwave-flash "access plus 1 month"
			</IfModule>
        `,
      },
    },
    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
  
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
  ],
}
