import { Bebas_Neue, PT_Sans } from "next/font/google"

const headersAndButtsFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-headers-and-butts",
})
const bodyTextFont = PT_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-text",
})

export { headersAndButtsFont, bodyTextFont}