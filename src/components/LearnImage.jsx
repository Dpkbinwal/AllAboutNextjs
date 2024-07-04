import Image from "next/image"
import MyImage from "../../public/images/dpk.jpg"

const LearnImage = () => {
  return (
    // <Image cla/>
    <Image src={MyImage} alt="my image" placeholder="blur"
    quality={100}    />
  )
}

export default LearnImage