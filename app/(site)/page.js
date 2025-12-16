"use client";

import Link from "next/link";
import { Fragment } from "react";
import Banner from "@/components/Banner";
import { FEATURES_ITEMS } from "@/utils/staticData";
import { INTEGRATIONS_ITEMS } from "@/utils/staticData";
import PaymentSection from "@/components/PaymentSection";
import Testimonials from "@/components/Testimonials";

const Home = () => {
    return (
        <Fragment>
            <Banner />

            <section className="lg:px-24 sm:px-7 px-5">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-6 
                        md:shadow-[0px_15px_30px_#0000001a] shadow-none md:-mt-10 mt-14 md:mb-8 mb-5 bg-white rounded-md"
                    >
                        {FEATURES_ITEMS?.map((item, index) => (
                            <div key={index} className="single-featured-box relative group text-center py-5 overflow-hidden
                                md:border-r border-[#eeeeee] md:border-b md:border-0 lg:border-0 border lg:border-r px-8
                                lg:last:border-r-0 md:last:border-r-none md:rounded-none rounded-md xl:px-14 lg:px-4 md:px-14"
                            >
                                <div className="relative h-[70px] w-full flex justify-center overflow-hidden">
                                    <div className="flex flex-col transition-transform duration-300 
                                        group-hover:-translate-y-[70px]"
                                    >
                                        <img src={item?.icon} alt={item?.title} className="w-[70px] mx-auto" />
                                        <img src={item?.icon} alt={item?.title} className="w-[70px] mx-auto" />
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h3 className="text-[20px] font-semibold text-[#707070] leading-[1.2]">
                                        {item?.title}
                                    </h3>

                                    <p className="mt-2.5 text-[15px] text-[#57647c] leading-[1.7]">
                                        {item?.desc}
                                    </p>
                                </div>

                                <Link rel="preload" href={item?.url} className="read-more mb-2 linear-gradient-text opacity-0  
                                    group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1.5 invisible mt-5
                                    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px 
                                    after:w-0 after:bg-linear-to-r after:from-[#ef793c] after:to-[#ff6a00] hidden
                                    after:transition-all after:duration-500 hover:after:w-full text-[16px] lg:inline-block"
                                >
                                    Read More
                                </Link>

                                <Link rel="preload" href={item?.url} className="mt-5 mb-2 linear-gradient-text  
                                    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px 
                                    after:w-0 after:bg-linear-to-r after:from-[#ef793c] after:to-[#ff6a00] inline-block
                                    after:transition-all after:duration-500 hover:after:w-full text-[16px] lg:hidden"
                                >
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mb-5">
                        <img src="/assets/visa_master_discover.webp" alt="Visa Master Discover"
                            className="object-cover h-auto w-auto"
                        />
                    </div>
                </div>
            </section>

            <PaymentSection />

            <section className="max-w-3xl mx-auto relative lg:px-24 sm:px-7 px-5">
                <div className="md:pt-16 pt-14">
                    <div className="max-w-[600px] mx-auto border border-dashed border-[#ebebeb] rounded-md
                        px-6 py-6 md:px-[30px] md:py-[30px]"
                    >
                        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="sm:text-[22px] text-lg font-semibold text-[#707070] leading-[1.2]">
                                    Schedule a 1-1 Consultation
                                </h3>

                                <p className="mt-2 text-base text-[#57647c] leading-[1.2]">
                                    Talk to a payment expert
                                </p>
                            </div>


                            <Link rel="preload" href='/contact' className="border border-[#ef793c] rounded-md text-base py-3
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] px-6 cursor-pointer text-white uppercase
                                z-30 font-medium"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-[600px] mx-auto lg:-mt-[50px] sm:-mt-14 -mt-10">
                    <img src="/assets/backgroung_map.webp" alt="Logo" className="h-auto w-auto" />
                </div>
            </section>

            <div className="md:pt-20 pt-16 md:pb-14 pb-10 bg-[#f7fafd] lg:-mt-[170px] sm:-mt-40 -mt-20">
                <div className="max-w-[600px] mx-auto text-center px-4">
                    <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                        font-semibold text-[#4f565b]"
                    >
                        What customers say about us
                    </h2>

                    <div className="mt-4 mb-5 flex justify-center">
                        <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                            <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                            />
                        </div>
                    </div>

                    <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                        EquiPay is proud in showcasing the experiences of our clients from
                        various segments of the industry.
                    </p>
                </div>
            </div>

            <div className="md:hidden block">
                <Testimonials showArrows={false} />
            </div>

            <div className="md:block hidden pb-8">
                <Testimonials />
            </div>

            <div className="relative linear-background md:py-[110px] py-14">
                <div className="absolute inset-0 bg-no-repeat bg-center md:bg-size-[200%] md:opacity-35 opacity-20
                    bg-cover" style={{ backgroundImage: "url('/assets/bg_lines.svg')" }}
                />

                <div className="lg:px-24 sm:px-7 px-5">
                    <div className="relative z-10 container mx-auto flex md:flex-row flex-col items-center 
                        justify-between"
                    >
                        <div data-aos="fade-right">
                            <h2 className="md:text-start text-center lg:text-[40px] sm:text-[34px] text-2xl text-white
                                leading-[1.2] font-semibold"
                            >
                                Start Your Application Now
                            </h2>

                            <p className="md:text-start text-center md:text-lg text-base text-white mt-2.5 font-light">
                                Get your EquiPay account today!
                            </p>
                        </div>

                        <Link rel="preload" href='/get-started' className="border border-[#ef793c] rounded-md text-base py-3
                            font-medium cursor-pointer inline-block md:my-0 mt-5 text-white uppercase px-6
                            bg-linear-to-r from-[#ef793c] to-[#ff6a00]" data-aos="fade-left"
                        >
                            Get Your EquiPay Account
                        </Link>
                    </div>
                </div>
            </div>

            <section className="pt-16 md:pb-14 pb-10 lg:px-24 sm:px-7 px-5">
                <div className="container mx-auto">
                    <div className="max-w-[600px] mx-auto text-center px-4" data-aos="flip-left">
                        <h2 className="xl:text-[40px] lg:text-[34px] md:text-[40px] text-[26px] m-0 leading-[1.2] 
                            font-semibold text-[#4f565b]"
                        >
                            Seamless Integration
                        </h2>

                        <div className="mt-4 mb-5 flex justify-center">
                            <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                    animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                />
                            </div>
                        </div>

                        <p className="md:px-10 text-base md:text-lg text-[#57647c] leading-[1.8]">
                            We empower your businesses with multiple 3rd party integrations
                        </p>
                    </div>

                    <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-x-3 
                        md:gap-y-5 sm:gap-3 gap-2 items-center" data-aos="zoom-in-up"
                    >
                        {INTEGRATIONS_ITEMS.map((item, index) => (
                            <Link rel="preload" key={index} href="/connect-to-equipay" className="block md:p-5 p-3.5 
                                max-h-max bg-[#F4F7FC] rounded-md transition group cursor-pointer"
                            >
                                <div className="relative h-auto mx-auto flex items-center justify-center overflow-hidden">
                                    <img src={item?.img} alt={item?.name} className="h-auto mx-auto transition-transform 
                                        transform translate-y-0 duration-300 group-hover:-translate-y-full"
                                    />

                                    <img src={item?.scroll_img} alt={item?.name} className="h-auto mx-auto absolute transform 
                                        translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-x-3 
                        md:gap-y-5 sm:gap-3 gap-2 items-center" data-aos="zoom-in-up"
                    >
                        {INTEGRATIONS_ITEMS.map((item, index) => (
                            <Link rel="preload" key={index} href="/connect-to-equipay" className="block md:p-5 bg-[#F4F7FC] 
                                rounded-md transition group cursor-pointer relative overflow-hidden p-3.5"
                            >
                                <img src={item?.img} alt={item?.name} className="sm:max-w-[178px] h-auto mx-auto
                                    duration-300 transition-transform group-hover:-translate-y-[200%] max-w-[110px]"
                                />

                                <img src={item?.scroll_img} alt={item?.name} className="absolute top-1/2 left-1/2 h-auto
                                    sm:max-w-[218px] -translate-x-1/2 translate-y-[200%] transition-transform duration-300
                                    group-hover:-translate-y-1/2 max-w-[180px]"
                                />
                            </Link>
                        ))}
                    </div> */}
                </div>
            </section>
        </Fragment>
    )
}

export default Home