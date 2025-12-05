"use client";

import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa"
import { BiLogoFacebook } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa"
import { FOOTER_ITEMS } from "@/utils/staticData";

const Footer = () => {
    return (
        <div className="linear-background lg:px-24 sm:px-7 px-5 pt-20">
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10 lg:gap-8 gap-8">
                    <div>
                        <img src='/assets/logo_white.webp' className='xl:max-w-40 lg:max-w-32 max-w-28 h-auto'
                            alt='logo'
                        />

                        <p className="xl:mt-5 lg:mt-6 xl:mb-3 lg:mb-4 my-5 text-[#e4e4e4] xl:text-base lg:text-[15px] 
                            text-base font-light leading-[1.7]"
                        >
                            We are in business to provide client centric payment solutions.
                            <br />
                            We serve most industries globally.
                        </p>

                        <div className="flex space-x-2">
                            <Link href='https://www.facebook.com/EquiPay' target="_blank" className="w-8 h-8 border-[#ece9e9]
                                rounded-full bg-white text-[#ef793c] hover:bg-[#ef793c] hover:text-white border 
                                flex items-center justify-center cursor-pointer hover:border-[#ef793c]"
                            >
                                <BiLogoFacebook size={22} />
                            </Link>

                            <Link href='https://www.facebook.com/EquiPay' target="_blank" className="w-8 h-8 border-[#ece9e9]
                                rounded-full bg-white text-[#ef793c] hover:bg-[#ef793c] hover:text-white border 
                                flex items-center justify-center cursor-pointer hover:border-[#ef793c]"
                            >
                                <ImLinkedin />
                            </Link>
                        </div>
                    </div>

                    {FOOTER_ITEMS.map((section, index) => (
                        <div key={index}>
                            <h3 className="relative text-2xl text-white font-semibold before:content-[''] before:absolute
                                before:left-0 before:-bottom-[3px] before:h-[1.2px] before:w-[45px] before:bg-[#ef793c] 
                                pb-2"
                            >
                                {section?.title}
                            </h3>

                            <ul className="flex flex-col mt-6">
                                {section?.items.map((item, idx) => (
                                    <Link key={idx} href={item.href} className={`relative pl-5 text-[#e4e4e4] leading-[1.8] 
                                        mb-2 text-base font-light before:content-[''] before:w-[7px] before:h-[7px] 
                                        before:left-0 before:absolute before:top-1/2 before:bg-[#ef793c]
                                        before:-translate-y-1/2`}
                                    >
                                        <span className="hover:underline hover:text-[#ef793c]">
                                            {item.label}
                                        </span>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="relative text-2xl text-white font-semibold before:content-[''] before:absolute
                            before:left-0 before:-bottom-[3px] before:h-[1.2px] before:w-[45px] before:bg-[#ef793c] pb-2"
                        >
                            Address
                        </h3>

                        <ul className="flex flex-col mt-6">
                            <Link href='https://www.google.com/maps/place/2170+Main+St+STE+203,+Sarasota,+FL+34237,+USA/@27.3362213,-82.5292981,737m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88c340651e18d3c3:0x8be8283a150f5cfa!8m2!3d27.3362166!4d-82.5267232!16s%2Fg%2F11gg6cb2y5?entry=tts&g_ep=EgoyMDI0MTAyMy4wIPu8ASoASAFQAw%3D%3D'
                                target='_blank' className={`relative text-[#e4e4e4] leading-[1.8] mb-3 text-base font-light flex gap-2`}
                            >
                                <FaMapMarkerAlt size={20} className="text-[#ef793c] mt-2" />
                                <span className="hover:underline hover:text-[#ef793c]">
                                    2170 Main St., Ste. 203, <br /> Sarasota, FL 34237
                                </span>
                            </Link>

                            <Link href='mailto:help@equipay.com' target='_blank' className={`relative text-[#e4e4e4] 
                                leading-[1.8] mb-3 text-base font-light flex gap-2`}
                            >
                                <FaRegEnvelope size={20} className="text-[#ef793c] mt-[5px]" />
                                <span className="hover:underline hover:text-[#ef793c]">
                                    help@equipay.com
                                </span>
                            </Link>

                            <Link href='tel:+1-657-312-4925' className={`relative text-[#e4e4e4] leading-[1.8]
                                text-base font-light flex gap-2`}
                            >
                                <FaPhoneVolume size={20} className="text-[#ef793c] mt-[5px]" />
                                <span className="hover:underline hover:text-[#ef793c]">
                                    657-312-4925
                                </span>
                            </Link>
                        </ul>
                    </div>
                </div>

                <hr className="border-white mt-[50px]" />

                <p className="text-center text-[15px] font-normal text-[#e4e4e4] py-7 leading-[1.8]">
                    <Link href='/privacy-policy' target="_blank" className="hover:underline hover:text-[#ef793c]">
                        Privacy
                    </Link>
                    {" | "}
                    <Link href='/terms-conditions' target="_blank" className="hover:underline hover:text-[#ef793c]">
                        Terms & Conditions
                    </Link>
                    {" | "}
                    <Link href='/legal' target="_blank" className="hover:underline hover:text-[#ef793c]">
                        Legal
                    </Link>
                    {" | "} Copyright @ 2025 EquiPay. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer