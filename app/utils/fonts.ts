import { Bebas_Neue, PT_Sans } from "next/font/google"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
})
const ptSans = PT_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-sans",
})

export { bebasNeue, ptSans}