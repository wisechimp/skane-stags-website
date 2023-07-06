import { getMenuItems, getPartners } from "@/sanity/sanity-utils"

import Footer from "@/app/components/footer/Footer"
import HeaderMenu from "@/app/components/menus/HeaderMenu"
import SocialMenu from "@/app/components/menus/SocialMenu"
import { headersAndButtsFont, bodyTextFont } from '@/utils/fonts'

import '@/styles/skane-stags-global-styles.css'

const RootLayout = async ({ children }) => {
  const menuItems = await getMenuItems()
  const partners = await getPartners()
  return (
    <html lang="en" className={`${headersAndButtsFont.variable} ${bodyTextFont.variable}`}>
      <body>
        <main>
          <SocialMenu />
          <HeaderMenu menuItems={menuItems} />
          {children}
          <Footer partners={partners} />
        </main>
      </body>
    </html>
  )
}

export default RootLayout