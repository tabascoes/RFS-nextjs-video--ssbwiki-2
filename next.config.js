const withPlugins = require('next-compose-plugins')
const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
const withVideos = require('next-videos')

// i18n
const i18n = withNextra({
  i18n: {
    locales: ['jp', 'en'],
    defaultLocale: 'jp',
  },
})

const video = withVideos()

module.exports = withPlugins([i18n, video])