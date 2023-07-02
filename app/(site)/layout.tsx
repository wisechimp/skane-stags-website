import { getPartners } from "@/sanity/sanity-utils"

import Footer from "@/components/footer/Footer"
import HeaderMenu from "@/components/menus/HeaderMenu"
import SocialMenu from "@/components/menus/SocialMenu"
import { headersAndButtsFont, bodyTextFont } from '@/utils/fonts'

import '@/styles/skane-stags-global-styles.css'

const RootLayout = async ({ children }) => {
  const partners = await getPartners()
  return (
    <html lang="en" className={`${headersAndButtsFont.variable} ${bodyTextFont.variable}`}>
      <body>
        <main>
          <SocialMenu />
          <HeaderMenu />
          {children}
          <Footer partners={partners} />
        </main>
      </body>
    </html>
  )
}

export default RootLayout