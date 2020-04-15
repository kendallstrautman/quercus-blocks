const withSvgr = require('next-svgr')
require('dotenv').config()
// const tinaWebpackHelpers = require('../../tinacms/packages/@tinacms/webpack-helpers')

module.exports = withSvgr({
  env: {
    GTM_ID: process.env.GTM_ID,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
  exportTrailingSlash: true,
  exportPathMap: async function() {
    return {}
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // if (dev) {
    //   tinaWebpackHelpers.aliasTinaDev(config, '../../tinacms', [
    //     'react-tinacms-inline',
    //   ])
    // }
    config.node = {
      fs: 'empty',
    }

    return config
  },
})
