/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dochub-beta.vercel.app',
  generateRobotsTxt: true, // (optional)
  alternateRefs: [
    {
      href: 'https://dochub-beta.vercel.app/de-DE',
      hreflang: 'de-DE',
    },
    {
      href: 'https://dochub-beta.vercel.app/es-ES',
      hreflang: 'es-ES',
    },
    {
      href: 'https://dochub-beta.vercel.app/fr-FR',
      hreflang: 'fr-FR',
    },
    {
      href: 'https://dochub-beta.vercel.app/zh-CN',
      hreflang: 'zh-CN',
    },
    {
      href: 'https://dochub-beta.vercel.app/zh-TW',
      hreflang: 'zh-TW',
    },
  ],
  sitemapSize: 7000,
  changefreq: 'weekly',
}
