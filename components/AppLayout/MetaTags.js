import Head from 'next/head'

const MetaTags = ({
  title,
  description,
  openGraphImageAbsoluteUrl,
  url,
  pageTitle,
}) => {
  const metaTitle = title ? `${title} — TagMap` : 'TagMap'
  // allow the option to set the <title> tag of a page separately from the one that shows up for its meta tags
  // const titleTag = pageTitle ? pageTitle : metaTitle
  const metaDescription = description
    ? description
    : 'TagMap is the visualization of the gameplay of TagMatch Players, if you want to join the game then join us on TagMatch!'
  const metaImage = openGraphImageAbsoluteUrl
    ? openGraphImageAbsoluteUrl
    : 'https://explorer.helium.com/images/TagMatch.png'
  const metaUrl = url ? url : 'https://www.google.com'

  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <meta charSet="utf-8" />
        <link rel="icon" href="/TagMap.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          href= "https://staging.api.tagmatch.io/"
          //"https://explorer.helium.com/logo192.png"
        />
        <link rel="manifest" href="https://explorer.helium.com/manifest.json" />

        {/* Primary Meta Tags */}
        {/* <title>{titleTag}</title> */}

        {/* <meta name="title" content={metaTitle} /> */}
        <meta name="description" content={metaDescription} />

        

       
      </Head>
    </>
  )
}

export default MetaTags
