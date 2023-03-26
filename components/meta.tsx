import Head from 'next/head'
import Script from 'next/script'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
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
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#3AE" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A blog written by Forest Heims`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <Script  async defer src="https://analytics.umami.is/script.js" data-website-id="b7aeb8aa-fce3-4630-8c06-69b6d4a3a2c6" />
    </Head>
  )
}

export default Meta
