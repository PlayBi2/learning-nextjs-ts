import { faFacebook, faSquarePinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { useState } from "react"

const productDetail = ({ product }: any) => {

  const colCSS = 'w-[50%] px-[15px]'
  const miniImgCSS = 'w-[142px] h-[142px] overflow-hidden border-[1px] border-solid border-[rgba(0,0,0,0.2)] rounded-[10px] mr-[10px]'
  const imgCSS = 'object-cover object-center w-[100%] h-[100%] block'
  const quantityBtnStyle = 'flex-auto text-center p-[5px]'

  const [quantity, setQuantity] = useState(1)

  return (
    <div className="pt-[100px]">
      <div className="page-router text-white bg-[#accdd2] px-[30px] mb-[30px] py-[10px]">
        Home &gt; Cat Food &gt; Purus consequat congue sit
      </div>
      <div className="px-[30px] pt-[48px] flex">
        <div className={colCSS}>
          <div className="block border-[1px] border-solid border-[rgba(0,0,0,0.2)] overflow-hidden w-[100%] h-[688px] rounded-[10px]">
            <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-17.1_770x770.jpg?v=1636280993" className={imgCSS} />
          </div>
          <div className="flex mt-[16px]">
            <div className={miniImgCSS}>
              <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-17.jpg?v=1636280993" className={imgCSS} />
            </div>
            <div className={miniImgCSS}>
              <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-17.jpg?v=1636280993" className={imgCSS} />
            </div>
            <div className={miniImgCSS}>
              <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/products/product-17.jpg?v=1636280993" className={imgCSS} />
            </div>
          </div>
        </div>
        <div className={colCSS}>
          <div className='product-name font-semibold text-[28px]'>
            Purus consequat congue sit
          </div>
          <div className="rate flex mt-[10px]">
            <FontAwesomeIcon icon={faStar} className="text-[#ffc107] mr-[3px]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffc107] mr-[3px]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffc107] mr-[3px]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffc107] mr-[3px]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffc107] mr-[3px]" />
          </div>
          <div className="product-price mt-[10px] flex items-end text-[#868686]">
            <span className="text-[25px] text-primary font-semibold mr-[5px]">$45.00</span>
            Tax included.
          </div>
          <div className="description mt-[10px] text-[#868686]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
          </div>
          <div className="flex mt-[30px] text-[14px] mb-[10px]">
            <p className="uppercase mr-[20px]">Sku: <span>N/A</span></p>
            <p className="flex text-[#28a745] items-center"><FontAwesomeIcon icon={faCheck} className="mr-[3px]" /> In stock</p>
          </div>
          <div className="product-quantity my-[10px] flex items-center">
            <div className="set-quantity flex w-[20%] bg-white text-[20px] border-[1px] border-solid border-black rounded-[20px] overflow-hidden">

              <button className={quantityBtnStyle}>
                -
              </button>
              <div className={quantityBtnStyle}>
                {quantity}
              </div>
              <button className={quantityBtnStyle}>+</button>
            </div>
            <div className="button">
              <button>Add To Cart</button>
              <button>Buy It Now</button>
            </div>
          </div>



          <div className="flex text-[14px] pt-[10px]">
            <p className="font-semibold mr-[10px]">
              Product type:
            </p>
            <span className="text-[#868686]">Dog Apparel</span>
          </div>
          <div className="flex text-[14px] pt-[10px]">
            <p className="font-semibold mr-[10px]">
              Vendor:
            </p>
            <span className="text-[#868686]">Paw Nutrition</span>
          </div>
          <div className="flex text-[14px] pt-[10px]">
            <p className="font-semibold mr-[10px]">
              Categories:
            </p>
            <span className="text-[#868686]">Cat Food,Cat Toys,Dog Food,Dog Toys,Fish Food</span>
          </div>
          <div className="flex text-[14px] pt-[10px]">
            <p className="font-semibold mr-[10px]">
              Tags:
            </p>
            <span className="text-[#868686]">Fish Food</span>
          </div>
          <div className="flex text-[14px] pt-[10px]">
            <p className="font-semibold mr-[10px]">
              Share:
            </p>
            <span className="text-[#868686] flex items-center text-[16px]">
              <FontAwesomeIcon icon={faFacebook} className="mr-[5px]" />
              <FontAwesomeIcon icon={faTwitter} className="mr-[5px]" />
              <FontAwesomeIcon icon={faSquarePinterest} />
            </span>
          </div>
        </div>
      </div>
      <div className="content mt-[50px]">
        <div className="selection flex justify-center">
          <button>Description</button>
          <button>Additional</button>
          <button>Shipping & return</button>
          <button>Description</button>
        </div>
      </div>
    </div>
  )
}


export default productDetail


export const getStaticPathData: GetStaticPaths = async () => {

  const response = await fetch('http://localhost:3000/api/product')
  const data = await response.json()

  const paths = data.map((item: any) => {
    return {
      params: { id: item.id }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticData: GetStaticProps = async (content: GetStaticPropsContext) => {

  const id = content?.params?.id

  const response = await fetch('http://localhost:3000/api/product/' + id)
  const data = await response.json();

  return {
    props: {
      product: data
    }
  }
}