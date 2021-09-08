/* eslint-disable */

export default {
  github: 'https://github.com/openmev/docs',
  docsRepositoryBase: 'https://github.com/openmev/docs/blob/master',
  titleSuffix: ' – OpenMEV',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">OpenMEV</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="OpenMEV: credible neutral infrastructure"
      />
      <meta name="og:description" content="OpenMEV" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://openmev.org/og.png" />
      <meta name="twitter:site:domain" content="openmev.org" />
      <meta name="twitter:url" content="https://openmev.org" />
      <meta name="og:title" content="OpenMEV - Credible Neutrality for MEV" />
      <meta name="og:image" content="https://openmev.org/og.png" />
      <meta name="apple-mobile-web-app-title" content="OpenMEV" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © OpenMEV.</>,
  unstable_faviconGlyph: '⚖️',
};
