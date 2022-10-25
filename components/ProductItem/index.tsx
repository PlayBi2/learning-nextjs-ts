import { faBagShopping, faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const iconCSS = "w-[45px] h-[45px] mb-[10px] rounded-[50%] border-[1px] border-solid border-[#e6e6e6] leading-[45px] cursor-pointer hover:text-white hover:bg-primary"

const ProductItem = ({ product, textLeft, btn }: any) => {
    return (
        <div className="product w-[100%] relative">
            <a href={`/product`} className="relative border-[1px] border-solid border-[#e6e6e6] block overflow-hidden rounded-[10px] w-[100%]">
                <img src={product.imgSrc1} />
                <img src={product.imgSrc2} className="product-hover:opacity-100 absolute top-0 right-0 bottom-0 left-0 ease-linear transition-all duration-200 opacity-0 " />
            </a>
            <div className="mt-[15px]">
                <div className="flex justify-center text-[10px] text-[#ccc] w-[100%] mb-[8px]"
                    style={textLeft ? ({ justifyContent: 'flex-start' }) : ({})}
                >
                    <FontAwesomeIcon icon={faStar} className="mx-[1px]" />
                    <FontAwesomeIcon icon={faStar} className="mx-[1px]" />
                    <FontAwesomeIcon icon={faStar} className="mx-[1px]" />
                    <FontAwesomeIcon icon={faStar} className="mx-[1px]" />
                    <FontAwesomeIcon icon={faStar} className="mx-[1px]" />
                </div>
                <a href={`/product`}
                    className="font-semibold mb-[10px] text-center font-[16px] hover:text-primary ease-linear transition-all duration-200 block"
                    style={textLeft ? ({ textAlign: 'left' }) : ({})}
                >
                    {product.name}
                </a>
                {
                    product.minPrice == product.maxPrice ? (
                        <div className="text-center text-[20px] text-primary font-bold"
                            style={textLeft ? ({ textAlign: 'left' }) : ({})}
                        >
                            ${product.maxPrice}
                        </div>
                    ) : (
                        <div className="text-[20px] text-primary flex justify-center font-bold"
                            style={textLeft ? ({ textAlign: 'left' }) : ({})}
                        >
                            ${product.minPrice} - ${product.maxPrice}
                        </div>
                    )
                }
                {
                    btn ? (
                        <>
                            <button className="bg-black text-white text-center leading-[1.1] px-[25px] py-[14px] mt-[16px] rounded-[30px] hover:bg-primary hover:text-white">Select options</button>
                        </>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div className="productIcon absolute top-[10px] right-[10px] text-center text-[20px] text-[#1f2021] p-[10px] product-hover:block ">
                <div className={iconCSS}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <div className={iconCSS}>   
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    )
}


export default ProductItem