import Link from "next/link"

import StagsLogo from '@/images/skane-stags-tn-logo.webp'
import * as styles from './headermenu.module.css'
import Image from "next/image"
import MenuItem from "@/types/MenuItem"

interface HeaderMenuProps {
  menuItems: Array<MenuItem>
}

const HeaderMenu = ({ menuItems }: HeaderMenuProps) => {
  const noHomeArray = menuItems.filter(menuItem => {
    return menuItem.slug !== 'home' && menuItem.slug !== 'contact'
  })
  console.log(noHomeArray)
  return (
    <div className={styles.headerMenuContainer}>
      <Link href="/">
        <div className={styles.headerMenuLogoContainer}>
          <Image
            src={StagsLogo}
            alt="Skane Stags logo"
            width={60}
            height={60}
          />
        </div>
      </Link>
      {noHomeArray.map(menuitem => (
        <div key={menuitem._id} className={styles.headerMenuItems}>
          <Link href={`/${menuitem.slug}`}>
            {menuitem.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HeaderMenu