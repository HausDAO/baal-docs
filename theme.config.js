export default {
  github: 'https://github.com/jonathanprozzi/baal-docs',
  docsRepositoryBase: 'https://github.com/jonathanprozzi/baal-docs/blob/main',
  titleSuffix: ' - Baal',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Baal 👺</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Moloch v3
      </span>
    </>
  ),
  head: (
    <>
      <title> Baal | Moloch v3</title>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Baal sets the season, and gives forth His voice from the clouds."
      />
      <meta
        name="og:description"
        content="Baal sets the season, and gives forth His voice from the clouds."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/baal.gif" />
      <meta name="twitter:site:domain" content="baal-docs.vercel.app" />
      <meta name="twitter:url" content="https://baal-docs.vercel.app" />
      <meta name="og:title" content="Baal 👺 | Moloch v3" />
      <meta name="og:image" content="/baal.gif" />
      <meta name="apple-mobile-web-app-title" content="Baal 👺" />
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
  footerText: <>MIT {new Date().getFullYear()} © Baal</>,
  unstable_faviconGlyph: '👺',
}
