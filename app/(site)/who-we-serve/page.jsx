import Link from 'next/link';
import React, { Fragment } from 'react'
import BannerSection from '@/components/BannerSection'
import Accordion from '@/components/Accordion';
import { ABOUT_ITEMS } from '@/utils/staticData';
import InfoSection from '@/components/InfoSection';

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
                    <div className="grid grid-cols-12 md:pt-20 pt-16 md:pb-14 pb-10 gap-6 lg:gap-10 items-center">
                        <InfoSection title="Freelancers & GigPreneurs" items={freelancers}
                            image="/assets/who_we_are_first.webp"
                            description={`Starting a business is a daunting task, with EquiPay we partner with incubators and
                            freelancers to find you the best compliant solutions with minimum documentation and
                            processing history. Our merchant services will help you scale up faster and manage
                            payments from your new customers more efficiently.`
                            }
                        />
                    </div>

                    <div className="grid grid-cols-12 pb-5">
                        <div className="col-span-12 lg:col-span-6 mx-auto" data-aos="zoom-in">
                            <Link rel="preload" href="/get-started" className="text-white uppercase rounded-[5px] border
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] border-[#ef793c] cursor-pointer px-8 py-2.5
                                transition-all duration-300 hover:underline hover:border-[#204D74] hover:px-[33px] text-base"
                            >
                                GET STARTED
                            </Link>
                        </div>

                        <div className="col-span-12 lg:col-span-6" />
                    </div>

                    <div className="grid grid-cols-12 md:pt-20 pt-16 md:pb-14 pb-10 gap-6 lg:gap-10 items-center">
                        <InfoSection title="Small & Medium Businesses" items={medium_businesses}
                            image="/assets/medium_businesses.webp" leftClass='lg:order-1 order-0'
                            description={`Now accepting payments from your customers online, over-the-phone, in person or a 
                            combination of three is easier and seamless with EquiPay. With competitive rates, dozens of API 
                            integrations and transparent pricing, managing cash flow for your business has never been easier.`
                            }
                        />
                    </div>

                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-6" />

                        <div className="col-span-12 lg:col-span-6 mx-auto" data-aos="zoom-in">
                            <Link rel="preload" href="/get-started" className="text-white uppercase rounded-[5px] border
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] border-[#ef793c] cursor-pointer px-8 py-2.5
                                transition-all duration-300 hover:underline hover:border-[#204D74] hover:px-[33px] text-base"
                            >
                                GET STARTED
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 md:pt-20 pt-16 md:pb-14 pb-10 gap-6 lg:gap-10 items-center">
                        <InfoSection title="Large or Enterprise Level" items={enterprise_level}
                            image="/assets/enterprise_level.webp"
                            description={`EquiPay offers proprietary merchant solutions with cutting edge technology, risk 
                            management, and exceptional customer service to ensure your enterprise is equipped to managing 
                            payments across the globe. Get unique insights with analytics and reporting solutions to empower 
                            better business decisions.`
                            }
                        />
                    </div>

                    <div className="grid grid-cols-12 pb-5 mb-[50px]">
                        <div className="col-span-12 lg:col-span-6 mx-auto" data-aos="zoom-in">
                            <Link rel="preload" href="/get-started" className="text-white uppercase rounded-[5px] border
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] border-[#ef793c] cursor-pointer px-8 py-2.5
                                transition-all duration-300 hover:underline hover:border-[#204D74] hover:px-[33px] text-base"
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

                        <Link rel="preload" href='/get-started' className="border border-[#ef793c] rounded-md text-base
                            font-medium cursor-pointer inline-block md:my-0 mt-5 text-white uppercase py-3 px-6
                            bg-linear-to-r from-[#ef793c] to-[#ff6a00]" data-aos="fade-left"
                        >
                            Get Your EquiPay Account
                        </Link>
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

                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-8 gap-5 md:pt-20 pt-16 pb-10"
                        data-aos='zoom-in-up'
                    >
                        <Accordion items={ABOUT_ITEMS} />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default WhoWeServe