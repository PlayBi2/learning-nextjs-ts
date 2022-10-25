import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <a href='/' className="block">
            <Image
                src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/logo-white_170x@2x.png?v=1625110879"
                width={168}
                height={52}
                alt=""
            />
        </a>
    )
}

export default Logo