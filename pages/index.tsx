import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import AboutItem from '../components/AboutItem'
import Banner from '../components/Banner'
import BannerItem from '../components/BannerItem'
import BrandLink from '../components/BrandLink'
import Categories from '../components/Categories'
import Poster from '../components/Poster'
import ProductItem from '../components/ProductItem'
import SliderProduct from '../components/SliderProduct'
import Title from '../components/Title'

import {data} from './api/data'

const bannerItems = data.bannerItems
const bestSeller = data.bestSeller
const aboutItemData = data.AboutItem
const dataProducts = data.recommended
const brandImg = data.brands

export interface listPost {
  bannerItems: any[]
}

export interface bestSellerInterface {
  bestSellerData: any[]
}

export default function Home() {

  return (
    <>
      <Banner />
      <div className='categories pt-[20px] pb-[40px] px-[28px]'>
        <Title props={{ textBold: "Top", textNor: "Categories" }} />
        <Categories />
      </div>
      <div className='list-bannerItem flex px-[30px] pt-6 mb-[80px]'>
        {
          bannerItems.map((item: any) => {
            return (
              <div className='px-[15px] w-[calc(100%/3)]' key={item.id}>
                <BannerItem props={item} />
              </div>
            )
          })
        }
      </div>
      <div className='best-seller px-[30px]'>
        <Title props={{ textBold: "Best", textNor: "Seller" }} />
        <div className='best-seller__section flex flex-wrap'>
          {
            bestSeller.map((item: any) => {
              return (
                <div className='w-[25%] px-[15px] mb-[30px]' key={item.id}>
                  <ProductItem product={item} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='poster flex h-[423px] mb-[80px]'>
        <div className='flex-1 bg-primary flex relative'>
          <div className='m-[auto] text-center'>
            <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/logo-banner.png?v=1630388549" className='mx-[auto]' />
            <div className='mt-[30px] mb-[40px] px-[15px] text-[40px] font-semibold text-white leading-[1.1]'>
              Save big annually with our veterinarian recommended wellness plan.
            </div>
            <button className='bg-black text-white px-[30px] py-[11px] border-black text-[16px] rounded-[30px] hover:bg-white hover:text-black font-semibold ease-linear transition-all'>enroll now</button>
          </div>
        </div>
        <div className='flex-1 '>
          <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/banner-4_960x535.jpg?v=1630388645"
            className='w-[100%] h-[100%] object-cover object-center'
          />
        </div>
      </div>
      <div className='about px-[30px] mb-[50px]'>
        <div className='text-center pb-[30px]'>
          <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/icon-1.png?v=1630408562" className='mx-[auto] mb-[50px]' />
          <Title props={{ textBold: "What your pet needs,", textNor: "when they need it." }} />
        </div>
        <div className='flex'>
          {
            aboutItemData.map((item: any) => {
              return (
                <div className='w-[25%] px-[15px]' key={item.id}>
                  <AboutItem data={item} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='relative overflow-hidden h-[650px] mb-[60px]'>
        <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/bg-3.jpg?v=1630413554" className='w-[100%] h-[100%] object-cover object-center' />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center'>
          <div className='w-[60%]'>
            <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/cat-1_900x660.png?v=1630428293" />
          </div>
          <div className='flex-1'>
            <img src="//cdn.shopify.com/s/files/1/0016/2915/9471/files/icon-2.png?v=1630412481" className='mb-[10px] px-[15px]' />
            <div className='py-[40px] px-[15px] text-[40px] leading-[1.1] font-semibold'>
              Taste it, love it or we’ll replace it… Guaranteed!
            </div>
            <div className='text-[16px] mb-[40px] px-[15px]'>
              At Petio, we believe your dog and cat will love their food so much that if they don’t … we’ll help you find a replacement. That’s our taste guarantee.
            </div>
            <button className='text-black bg-white mx-[15px] text-[14px] px-[16px] py-[10px] rounded-[30px] font-semibold hover:text-white hover:bg-primary'>Find out more</button>
          </div>
        </div>
      </div>
      <div className='recommended px-[30px] pb-[50px]'>
        <Title props={{ textBold: "Recommended", textNor: "For You" }} />
        <SliderProduct products={dataProducts} textLeft={true} btn={true} />
      </div>
      <Poster />
      <div className='brands mb-[80px]'>
        <Title props={{ textBold: "Popular", textNor: "Brands" }} />
        <div className='flex mx-[30px] rounded-[10px] overflow-hidden'>
          {
            brandImg.map((item: any) => {
              return (
                <div key={item.id} className="flex-1 last:border-r-[1px]">
                  <BrandLink brand={item} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

Home.layout = 'default'

// export const getStaticProps: GetStaticProps<listPost> = async (content: GetStaticPropsContext) => {

//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')

//   const data = await response.json();

//   return {
//     props: {
//       bannerItems: data
//     }
//   }
// }




