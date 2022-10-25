import { faBagShopping, faChevronDown, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Logo from "./Logo"
import LogoBlack from "./Logo/LogoBlack"



function Header({ black }: any) {

    const headerCSS: string = "h-100 bg-transparent fixed top-0 right-0 bottom-0 left-0 z-[100] w-m-100 flex justify-between xl:px-7"
    const searchCSS: string = "icon-header p-1.5 mx-1 text-white font-bold text-xl cursor-pointer"
    const linkHeaderCSS: string = "flex items-center peer py-15px peer"
    const liHeaderCSS: string = "header__nav--item relative"
    const subnavItemCSS: string = "absolute hidden peer-hover:block hover:block top-[100%] bg-white px-[25px] py-5 text-[15px] text-footerColor font-medium"
    const subnavItem2CSS: string = "absolute flex hidden peer-hover:flex hover:flex items-center w-[1430px] min-w-[300px] left-[-318px] top-[100%] bg-white px-[30px] py-5 text-[15px] text-footerColor font-medium"
    const linkItemCSS: string = "py-[5px] block w-[170px] hover:text-primary transition-all ease-in duration-200 hover:text-primary"
    const colHeaderSectionCSS: string = "w-[20%] px-[15px]"
    const linkHover: string = "hover:text-primary"
    const titleSubMenu: string = "text-[18px] text-black font-semibold py-[5px] relative hover:text-primary after:content-[''] after:absolute after:w-[60%] after:bg-primary after:top-[100%] after:left-0 after:h-[1px]"
    const mb8px: string = "mb-2"
    const refHeader = useRef(null)



    useEffect(() => {
        const headerElement: any = refHeader.current;
        let preScroll: number = window.pageYOffset
        window.addEventListener('scroll', (e) => {
            let currentScroll: number = window.pageYOffset
            if (preScroll > currentScroll) {
                headerElement.style.top = '0'
                if (currentScroll == 0) {
                    headerElement.style.backgroundColor = 'transparent'
                    headerElement.querySelectorAll('.icon-header').forEach((item: any) => {
                        item.style.color = 'white'
                    });
                    headerElement.querySelectorAll('a').forEach((item: any) => {
                        item.style.color = 'white'
                    });
                    headerElement.querySelector('.logo1').style.display = 'block'
                    headerElement.querySelector('.logo2').style.display = 'none'
                } else {
                    headerElement.style.backgroundColor = 'white'
                    headerElement.querySelectorAll('.icon-header').forEach((item: any) => {
                        item.style.color = 'black'
                    });

                    headerElement.querySelectorAll('a').forEach((item: any) => {
                        item.style.color = 'black'
                    });
                    headerElement.querySelector('.logo1').style.display = 'none'
                    headerElement.querySelector('.logo2').style.display = 'block'
                }
            } else {
                headerElement.style.top = '-100px'
            }
            preScroll = currentScroll
        })

    }, [])

    return (
        <div className={headerCSS} ref={refHeader}>
            <div className="navigation flex h-100 items-center">
                {
                    black ? (
                        <div className="logo2">
                            <LogoBlack />
                        </div>
                    ) : (
                        <div className="logo1">
                            <Logo />
                        </div>
                    )
                }
                <div className="logo2 hidden">
                    <LogoBlack />
                </div>
                <ul className="nav pl-40px text-white font-bold text-17px flex">
                    <li className={liHeaderCSS}>
                        <Link href="/1">
                            <a className={`${linkHeaderCSS}`}>
                                Home
                                <span className='nav__item--icon'>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                    />
                                </span>
                            </a>
                        </Link>
                        <ul className={subnavItemCSS}>
                            <li>
                                <a href="" className={linkItemCSS}>Home 01</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 02</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 03</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 04</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 05</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 06</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 07</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 08</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 09</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Home 10</a>
                            </li>
                        </ul>
                    </li>
                    <li className={liHeaderCSS}>
                        <Link href="/2">
                            <a className={`${linkHeaderCSS}`}>
                                Shop
                                <span className='nav__item--icon'>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                    />
                                </span>
                            </a>
                        </Link>
                        <ul className={subnavItem2CSS}>
                            <li className={colHeaderSectionCSS}>
                                <div className="section">
                                    <div className={`${mb8px} title`}>
                                        <a href="/collections" className={titleSubMenu}>Collections</a>
                                    </div>
                                    <ul>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Dog Food</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Cat Food</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Dog Toys</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Cat Toys</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Bird Food</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Fish Food</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={colHeaderSectionCSS}>
                                <div className="section">
                                    <div className={`${mb8px} title`}>
                                        <a href="" className={titleSubMenu}>Shop Pages</a>
                                    </div>
                                    <ul>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Left Sidebar</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Right Sidebar</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Full Width</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Full With - No filter</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Pagination</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Load more</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={colHeaderSectionCSS}>
                                <div className="section">
                                    <div className={`${mb8px} title`}>
                                        <a href="" className={titleSubMenu}>Product Pages</a>
                                    </div>
                                    <ul>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Product variants</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Variants dropdown</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Product Video</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Gallery Stacked</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>3D, AR models</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Product Vertical</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={colHeaderSectionCSS}>
                                <div className="section">
                                    <div className={`${mb8px} title`}>
                                        <a href="" className={titleSubMenu}>Pages</a>
                                    </div>
                                    <ul>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Contact Page</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>About Page</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>FAQs Page</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Search Page</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>404 Page</a>
                                        </li>
                                        <li className="py-[5px]">
                                            <a href="" className={linkHover}>Coming soon</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={colHeaderSectionCSS}>
                                <div className="section">
                                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/banner-slide1.jpg?v=1633162919"
                                        className="w-[100%] h-[auto] object-cover object-center"
                                    />
                                </div>
                            </li>

                        </ul>
                    </li>
                    <li className={liHeaderCSS}>
                        <Link href="/collections">
                            <a className={`${linkHeaderCSS}`}>
                                Collections
                                <span className='nav__item--icon'>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                    />
                                </span>
                            </a>
                        </Link>
                        <ul className={`${subnavItem2CSS} left-[-423px]`}>
                            <li className={`${colHeaderSectionCSS} my-[10px]`}>
                                <a href="">
                                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-8_330x303.jpg?v=1627635522" />
                                </a>
                                <a href="" className="mt-[10px] block py-[5px]">Cat Food</a>
                            </li>
                            <li className={`${colHeaderSectionCSS} my-[10px]`}>
                                <a href="">
                                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-7_330x303.jpg?v=1635411552" />
                                </a>
                                <a href="" className="mt-[10px] block py-[5px]">Cat Toys</a>
                            </li>
                            <li className={`${colHeaderSectionCSS} my-[10px]`}>
                                <a href="">
                                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-5_330x303.jpg?v=1627635440" />
                                </a>
                                <a href="" className="mt-[10px] block py-[5px]">Dog Food</a>
                            </li>
                            <li className={`${colHeaderSectionCSS} my-[10px]`}>
                                <a href="">
                                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-6_330x303.jpg?v=1627635402" />
                                </a>
                                <a href="" className="mt-[10px] block py-[5px]">Dog Toys</a>
                            </li>
                            <li className={`${colHeaderSectionCSS} my-[10px]`}>
                                <a href="">
                                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/collections/cate-3_330x307.jpg?v=1633192825" />
                                </a>
                                <a href="" className="mt-[10px] block py-[5px]">Bird Food</a>
                            </li>
                        </ul>
                    </li>
                    <li className={liHeaderCSS}>
                        <Link href="/3">
                            <a className={`${linkHeaderCSS}`}>
                                Blogs
                                <span className='nav__item--icon'>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                    />
                                </span>
                            </a>
                        </Link>
                        <ul className={subnavItemCSS}>
                            <li>
                                <a href="" className={linkItemCSS}>Left sidebar</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Right sidebar</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Full width</a>
                            </li>
                            <li>
                                <a href="" className={linkItemCSS}>Single post</a>
                            </li>
                        </ul>
                    </li>
                    <li className={liHeaderCSS}>
                        <Link href="/4">
                            <a className={`${linkHeaderCSS}`}>
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className="h-100 flex items-center">
                <li className={searchCSS}>
                    <span>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </li>
                <li className={searchCSS}>
                    <span>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </li>
                <li className={searchCSS}>
                    <span className="relative">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className="absolute top-[-9px] right-[-10px] bg-primary text-xs px-1.5 py-0.5 font-medium rounded-50%">
                            0
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    )
}


export default Header