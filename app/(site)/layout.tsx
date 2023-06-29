import Footer from "../components/footer/Footer"
import HeaderMenu from "../components/menus/HeaderMenu"
import SocialMenu from "../components/menus/SocialMenu"

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <SocialMenu />
          <HeaderMenu />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout