const withSvgr = require('next-svgr')
require('dotenv').config()
const tinaWebpackHelpers = require('@tinacms/webpack-helpers')

module.exports = withSvgr({
  env: {
    GTM_ID: process.env.GTM_ID,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    BASE_REPO_FULL_NAME: process.env.BASE_REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
  exportTrailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: 'empty',
    }

    /**
     * Uncomment this if testing tina packages in local development
     * Update the path to your `tinacms` directory as needed
     */

    // if (dev) {
    //   tinaWebpackHelpers.aliasTinaDev(config, '../../tinacms')
    // }

    return config
  },
})
