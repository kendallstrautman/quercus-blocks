const withSvgr = require('next-svgr')
require('dotenv').config()

module.exports = withSvgr({
  env: {
    GTM_ID: process.env.GTM_ID,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    BASE_REPO_FULL_NAME: process.env.BASE_REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
  exportTrailingSlash: true,
  webpack: config => {
    config.node = {
      fs: 'empty',
    }

    return config
  },
})
