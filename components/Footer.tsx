import { faFacebookF, faInstagram, faSquarePinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "./Logo"


function Footer() {
    const backgroundTopCSS: string = "bg-cover h-186 bg-no-repeat bg-center-top bg-[url('https://cdn.shopify.com/s/files/1/0016/2915/9471/files/bg-2.jpg?v=1626947531')]"
    const colCSS: string = "w-1/4 px-[15px] mt-[30px]"
    const addCss: string = "text-primary text-[20px]"
    const footerIconCSS: string = "text-[18px] w-[40px] h-[40px] text-center leading-[40px] rounded-[50%] bg-white mr-[15px] cursor-pointer"
    const footerTitleCSS: string = "text-white font-semibold text-[18px] py-4"
    const footerItemCSS: string = "py-1 text-footerColor hover:text-primary"
    return (
        <div className="w-m-100">
            <div className={backgroundTopCSS}>
                <div className="xl:px-7">
                    <div className="flex justify-end pt-20">
                        <div className="flex items-center w-[50%]">
                            <div className="pr-[15px] border-r-2 border-[#ed6436] border-solid  w-[50%] mb-[30px]">
                                <h1 className="text-primary text-[24px] mb-2.5 font-bold ">Sign up for offers</h1>
                                <p className="text-white">Sign up for our newsletter to receive exclusive offers & discounts!</p>
                            </div>
                            <form className="px-[10px] py-[8px] rounded-[25px] ml-[15px] w-[50%] bg-[#4a4a4a] flex items-center  mb-[30px]">
                                <input type="text" placeholder="Enter your email..."
                                    className="bg-transparent outline-none caret-white indent-[15px] text-white flex-auto"
                                />
                                <button className="text-white text-[20px] h-[35px] px-[30px] border-[0] cursor-pointer bg-primary rounded-[20px]">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-7 bg-footerBg flex pt-[15px] pb-[40px]">
                <div className={colCSS}>
                    <div className="section">
                        <Logo />
                        <div className="text-white mb-[20px]">
                            If you have any question, please contact us at
                            <a href="" className="text-primary"> support@gmail.com</a>
                        </div>
                        <ul>
                            <li className="flex items-center text-white mb-4">
                                <span className={`${addCss} mr-[15px]`}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <p className="font-semibold">30 Buttonwood St.Pataskala OH 43062</p>
                            </li>
                            <li className="flex items-center text-white mb-4">
                                <span className={`${addCss} mr-[15px]`}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <p className="font-semibold">30 Buttonwood St.Pataskala OH 43062</p>
                            </li>
                        </ul>
                        <ul className="list-icon flex items-center text-black text-[15px]">
                            <li className={footerIconCSS}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </li>
                            <li className={footerIconCSS}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </li>
                            <li className={footerIconCSS}>
                                <FontAwesomeIcon icon={faSquarePinterest} />
                            </li>
                            <li className={footerIconCSS}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={colCSS}>
                    <div className="section">
                        <h4 className={footerTitleCSS}>Corporate</h4>
                    </div>
                    <ul>
                        <li className={footerItemCSS}>
                            <a href="">Careers</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">About Us</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Contact Us</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">FAQs</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Vendors</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Affiliate Program</a>
                        </li>
                    </ul>
                </div>
                <div className={colCSS}>
                    <div className="section">
                        <h4 className={footerTitleCSS}>Information</h4>
                    </div>
                    <ul>
                        <li className={footerItemCSS}>
                            <a href="">Online Store</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Refund Policy</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Shipping Policy</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Terms of Service</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Track Order</a>
                        </li>
                    </ul>
                </div>
                <div className={colCSS}>
                    <div className="section">
                        <h4 className={footerTitleCSS}>Services</h4>
                    </div>
                    <ul>
                        <li className={footerItemCSS}>
                            <a href="">Grooming</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Positive Dog Training</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Veterinary Services</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Petco Insurance</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Pet Adoption</a>
                        </li>
                        <li className={footerItemCSS}>
                            <a href="">Resource Center</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="xl:px-7 py-[20px] flex items-center justify-between bg-footerBg border-y-[1px] border-solid border-[#3b3c3e]">
                <div className="text-footerColor text-[15px]">
                    © 2021 Petio Pets Store
                </div>
                <div className="flex justify-end">
                    <img src="https://cdn.shopify.com/s/files/1/0016/2915/9471/files/paymet-1.png?v=1626948652" alt="" />
                </div>
            </div>
        </div>
    )
}


export default Footer