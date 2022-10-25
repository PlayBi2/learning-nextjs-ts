import Image from "next/image"
import Link from "next/link"

const LogoBlack = () => {
    return (
        <a href='/' className="block">
            <Image
                src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/logo-black_170x.png?v=1630261150"
                width={168}
                height={52}
                alt=""
            />
        </a>
    )
}

export default LogoBlack