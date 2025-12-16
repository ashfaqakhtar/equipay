import Accordion from '@/components/Accordion';
import BannerSection from '@/components/BannerSection'
import { INTEGRATIONS_ITEMS, TIMELINES_ITEMS } from '@/utils/staticData';
import Link from 'next/link';
import React, { Fragment } from 'react'

export const metadata = {
    title: "Timeline – EquiPay",
};

const Timeline = () => {
    return (
        <Fragment>
            <BannerSection title="Timeline" sub_title="We keep pushing the growth envelop higher each year." />

            <section className="lg:px-24 sm:px-7 px-5">
                <div className='container mx-auto md:pt-20 pt-16 md:pb-14 pb-12'>
                    <img src="/assets/timeline_img.webp" alt="Timeline Img"
                        className="w-full h-auto object-cover"
                    />

                    <div className="max-w-[600px] mx-auto text-center md:pt-20 pt-16">
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

                        <p className="md:px-3 text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                            We provide you what you need, how you need it and when you need it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-8 lg:gap-5 gap-10 pt-12"
                        data-aos='zoom-in-up'
                    >
                        <Accordion items={TIMELINES_ITEMS} />
                    </div>
                </div>
            </section>

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

                        <Link rel="preload" href='/get-started' className="border border-[#ef793c] rounded-md text-base
                            font-medium cursor-pointer inline-block md:my-0 mt-5 text-white uppercase py-3 px-6
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
                        {INTEGRATIONS_ITEMS?.map((item, index) => (
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
                </div>
            </section>
        </Fragment>
    )
}

export default Timeline