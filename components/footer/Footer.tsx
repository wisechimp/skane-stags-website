import Partner from "@/types/Partner"
import Image from "next/image"

import * as styles from './footer.module.css'

interface FooterProps {
  partners: Array<Partner>
}

const Footer = ({ partners }: FooterProps) => {
  console.log(JSON.stringify(partners))

  return (
    <div className={styles.footerContainer}>
      <h2>Principal Partners</h2>
      <div className={styles.footerPartnersContainer}>
        {partners.map(partner => (
          <div key={partner._id}>
            <Image
              src={partner.logo}
              alt={partner.logoAltText}
              width={500}
              height={250}
            />
          </div>
        ))}
      </div>
      <div className={styles.footerYourName}>
        <h3>Your Logo Here!</h3>
        <p><b>Click</b> for more information</p>
      </div>
    </div>
  )
}

export default Footer