import Link from 'next/link';
import React, { Fragment } from 'react'
import { HiCheck } from "react-icons/hi";
import BannerSection from '@/components/BannerSection'
import Accordion from '@/components/Accordion';
import { ABOUT_ITEMS } from '@/utils/staticData';

export const metadata = {
    title: "Who We Serve – EquiPay",
};

const WhoWeServe = () => {
    const freelancers = [
        "Low cost plan available",
        "Full data privacy compliance",
        "100% transparent costs",
        "Commitment-free",
        "Real-time spending overview",
        "Easy Documentation",
    ];

    const medium_businesses = [
        "Easy transfers",
        "Deposit checks instantly",
        "A powerful open API",
        "Online customer authorization",
        "Instant bank verifications",
        "99% applications approved",
    ];

    const enterprise_level = [
        "Risk Management",
        "International Payments",
        "Automated accounting",
        "Request Custom Features",
        "Dedicated Account Manager",
        "Instant Fund Verification",
    ];

    return (
        <Fragment>
            <BannerSection title="Who We Serve" sub_title="Client Centric Solutions for Businesses" />

            <section className="lg:px-24 sm:px-7 px-5">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-12 md:pt-20 pt-16 pb-10 gap-6 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 md:text-left text-center" data-aos="zoom-in">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Freelancers & GigPreneurs
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                Starting a business is a daunting task, with EquiPay we partner with incubators and
                                freelancers to find you the best compliant solutions with minimum documentation and
                                processing history. Our merchant services will help you scale up faster and manage
                                payments from your new customers more efficiently.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {freelancers?.map((item, index) => (
                                    <div key={index} className="group relative bg-white z-1 pl-[35px] pr-[15px]
                                        py-2.5 shadow-[0_2px_48px_rgba(0,0,0,0.08)] rounded-[5px] transition-all 
                                        duration-300 flex items-center gap-3 overflow-hidden before:-z-1
                                        before:content-[''] before:absolute before:left-0 before:top-0 before:h-full 
                                        before:w-0 before:rounded-[5px] before:transition-all before:duration-500 
                                        hover:before:w-full before:bg-[linear-gradient(90deg,#ef793c_0%,#ff6a00_100%)]"
                                    >
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0f6bdc] 
                                            text-lg transition-all duration-300 group-hover:text-white"
                                        >
                                            <HiCheck size={20} />
                                        </span>

                                        <p className="ml-2 text-sm xl:text-[15px] lg:text-[13px] text-[#57647c] 
                                            transition-all duration-300 group-hover:text-white"
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6 md:text-left" data-aos="fade-right">
                            <img src="/assets/who_we_are_first.webp" alt="Who We Are First"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 pb-5">
                        <div className="col-span-12 lg:col-span-6 mx-auto" data-aos="zoom-in">
                            <Link href="/get-started" className="text-white uppercase rounded-[5px] border text-base
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] border-[#ef793c] cursor-pointer px-8 py-2.5
                                transition-all duration-300 hover:underline hover:border-[#204D74] hover:px-[33px]"
                            >
                                GET STARTED
                            </Link>
                        </div>

                        <div className="col-span-12 lg:col-span-6" />
                    </div>

                    <div className="grid grid-cols-12 md:pt-20 pt-16 pb-10 gap-6 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 lg:order-0 order-1" data-aos="fade-right">
                            <img src="/assets/medium_businesses.webp" alt="Who We Are First"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="col-span-12 lg:col-span-6 md:text-left text-center lg:order-1 order-0"
                            data-aos="zoom-in"
                        >
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Small & Medium Businesses
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                Now accepting payments from your customers online, over-the-phone, in person or a combination
                                of three is easier and seamless with EquiPay. With competitive rates, dozens of API integrations
                                and transparent pricing, managing cash flow for your business has never been easier.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {medium_businesses?.map((item, index) => (
                                    <div key={index} className="group relative bg-white z-1 pl-[35px] pr-[15px]
                                        py-2.5 shadow-[0_2px_48px_rgba(0,0,0,0.08)] rounded-[5px] transition-all 
                                        duration-300 flex items-center gap-3 overflow-hidden before:-z-1
                                        before:content-[''] before:absolute before:left-0 before:top-0 before:h-full 
                                        before:w-0 before:rounded-[5px] before:transition-all before:duration-500 
                                        hover:before:w-full before:bg-[linear-gradient(90deg,#ef793c_0%,#ff6a00_100%)]"
                                    >
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0f6bdc] 
                                            text-lg transition-all duration-300 group-hover:text-white"
                                        >
                                            <HiCheck size={20} />
                                        </span>

                                        <p className="ml-2 text-sm xl:text-[15px] lg:text-[13px] text-[#57647c] 
                                            transition-all duration-300 group-hover:text-white"
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 pb-5">
                        <div className="col-span-12 lg:col-span-6" />

                        <div className="col-span-12 lg:col-span-6 mx-auto">
                            <Link href="/get-started" className="text-white uppercase rounded-[5px] border text-base
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] border-[#ef793c] cursor-pointer px-8 py-2.5
                                transition-all duration-300 hover:underline hover:border-[#204D74] hover:px-[33px]"
                            >
                                GET STARTED
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 md:pt-20 pt-16 pb-10 gap-6 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 md:text-left text-center" data-aos="zoom-in">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Large or Enterprise Level
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                EquiPay offers proprietary merchant solutions with cutting edge technology, risk management,
                                and exceptional customer service to ensure your enterprise is equipped to managing payments
                                across the globe. Get unique insights with analytics and reporting solutions to empower better
                                business decisions.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {enterprise_level?.map((item, index) => (
                                    <div key={index} className="group relative bg-white z-1 pl-[35px] pr-[15px]
                                        py-2.5 shadow-[0_2px_48px_rgba(0,0,0,0.08)] rounded-[5px] transition-all 
                                        duration-300 flex items-center gap-3 overflow-hidden before:-z-1
                                        before:content-[''] before:absolute before:left-0 before:top-0 before:h-full 
                                        before:w-0 before:rounded-[5px] before:transition-all before:duration-500 
                                        hover:before:w-full before:bg-[linear-gradient(90deg,#ef793c_0%,#ff6a00_100%)]"
                                    >
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0f6bdc] 
                                            text-lg transition-all duration-300 group-hover:text-white"
                                        >
                                            <HiCheck size={20} />
                                        </span>

                                        <p className="ml-2 text-sm xl:text-[15px] lg:text-[13px] text-[#57647c] 
                                            transition-all duration-300 group-hover:text-white"
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6 md:text-left" data-aos="fade-right">
                            <img src="/assets/enterprise_level.webp" alt="Who We Are First"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 pb-5 mb-[50px]">
                        <div className="col-span-12 lg:col-span-6 mx-auto" data-aos="zoom-in">
                            <Link href="/get-started" className="text-white uppercase rounded-[5px] border text-base
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] border-[#ef793c] cursor-pointer px-8 py-2.5
                                transition-all duration-300 hover:underline hover:border-[#204D74] hover:px-[33px]"
                            >
                                GET STARTED
                            </Link>
                        </div>

                        <div className="col-span-12 lg:col-span-6" />
                    </div>
                </div>
            </section>

            <div className="relative linear-background md:py-[110px] py-14">
                <div className="absolute inset-0 bg-no-repeat bg-center bg-size-[200%] md:opacity-35 opacity-20"
                    style={{ backgroundImage: "url('/assets/bg_lines.svg')" }}
                />

                <div className="lg:px-24 sm:px-7 px-5">
                    <div className="relative z-10 container mx-auto flex md:flex-row flex-col items-center justify-between">
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

                        <div className="border border-[#ef793c] bg-linear-to-r from-[#ef793c] to-[#ff6a00] 
                            rounded-md text-base py-3 font-medium px-6 cursor-pointer inline-block md:my-0 mt-5"
                            data-aos="fade-left"
                        >
                            <Link href='/get-started' className="text-white uppercase">
                                Get Your EquiPay Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className="md:pt-12 py-12 lg:px-24 sm:px-7 px-5">
                <div className="container mx-auto">
                    <div className="max-w-[600px] mx-auto text-center">
                        <h2 className="md:text-[40px] text-[26px] m-0 leading-[1.2] font-semibold text-[#212529]">
                            The EquiPay Difference
                        </h2>

                        <div className="mt-4 mb-5 flex justify-center">
                            <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                />
                            </div>
                        </div>

                        <p className="md:px-10 text-sm md:text-base text-[#57647c] leading-[1.8]">
                            We provide you what you need, how you need it and when you need it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-8 gap-5 md:pt-20 pt-16 pb-10">
                        <Accordion items={ABOUT_ITEMS} />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default WhoWeServe