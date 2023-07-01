import Image from 'next/image'
import MainImage from '@/images/2018skanestagspolandactiondesktop.jpg'

const HeroImage = () => {
  return (
    <Image
      src={MainImage}
      alt="Skane Stags breaking the line against Poland in 2018"
    />
  )
}

export default HeroImage