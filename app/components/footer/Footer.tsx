import Partner from "@/types/Partner"
import Image from "next/image"

import * as styles from './footer.module.css'
import Link from "next/link"

interface FooterProps {
  partners: Array<Partner>
}

const Footer = ({ partners }: FooterProps) => {
  return (
    <div className={styles.footerContainer}>
      <h2>Principal Partners</h2>
      <div className={styles.footerPartnersContainer}>
        {partners.map(partner => (
          <div key={partner._id}>
            <Image
              src={partner.logo}
              alt={partner.logoAltText}
              width={350}
              height={250}
            />
          </div>
        ))}
      </div>
      <div className={styles.footerYourName}>
        <p>
          <b>Your Logo Here!</b>
        </p>
        <p className={styles.footerLink}>
          <Link href="/contact">Click</Link> for more information
        </p>
      </div>
    </div>
  )
}

export default Footer