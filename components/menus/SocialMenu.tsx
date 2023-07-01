import Link from "next/link"
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

const SocialMenu = () => {
  return (
    <div>
      <Link href="/contact">Contact</Link>
      <div>
        <Link href="https://www.facebook.com/skanestags/">
          <FaFacebookSquare />
        </Link>
        <Link href="https://www.instagram.com/skanestags">
          <FaInstagram />
        </Link>
        <Link href="https://twitter.com/skanecrusaders">
          <FaTwitter />
        </Link>
        <Link href="https://www.youtube.com/channel/UCFgK9OchuqAxrBLrvcs4MKg">
          <FaYoutube />
        </Link>
      </div>
    </div>
  )
}

export default SocialMenu