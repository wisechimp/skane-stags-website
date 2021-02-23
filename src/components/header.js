import React from "react"
import { Helmet } from "react-helmet"

export default () => (
  <Helmet>
    <html lang="en" />
    <title>Skane Stags Rugby League</title>
    <meta charset="utf-8" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta
      name="description"
      content="The website for Skane Stags Rugby League club"
    />
    <meta name="keywords" content="rugby league, skane" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Skane Stags Rugby League Club" />
    <meta
      property="og:description"
      content="Skane Stags are a rugby league club based in Skåne in southern Sweden."
    />
    <meta
      property="og:image"
      content="https://skanestags.com/skanestagslogo.png"
    />
    <meta property="og:url" content="https://skanestags.com/index.htm" />
    <meta property="og:site_name" content="Skåne Stags Rugby League Club" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image:alt"
      content="Skane Stags Rugby League Club logo."
    />
    <link rel="apple-touch-icon" href="/src/images/apple-touch-icon.png" />
  </Helmet>
)
