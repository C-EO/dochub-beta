const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  staticImage: true,
  defaultShowCopyCode: true,
})

module.exports = withNextra()
