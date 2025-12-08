import Link from "next/link";
import React, { Fragment } from "react";
import { INTEGRATIONS_ITEMS } from "@/utils/staticData";
import Testimonials from "@/components/Testimonials";

export const metadata = {
    title: "Connect to EquiPay – EquiPay",
};

const ConnectToEquipay = () => {
    return (
        <Fragment>
            <section className="relative bg-[url('/assets/connect-to-equipay_bg.webp')] bg-cover bg-no-repeat
                lg:px-24 sm:px-7 px-5 pt-[180px] bg-center"
            >
                <div className='container mx-auto'>
                    <div className="text-center pb-[150px]" data-aos="zoom-in-up">
                        <p className="text-[#0887BE] md:text-lg text-base leading-[1.7]">PLATFORM INTEGRATIONS</p>
                        <h1 className="text-[40px] font-bold text-white leading-[1.2] mt-3">
                            Connects With EquiPay
                        </h1>

                        <p className="max-w-[620px] mx-auto mt-4 text-[17px] font-light text-white leading-[1.7]">
                            We connect with hundreds of business platforms so that you can access your payment data in the
                            systems that are already powering your business.
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:pt-20 pt-16 md:pb-14 pb-10 lg:px-24 sm:px-7 px-5">
                <div className="container mx-auto">
                    <div className="max-w-[600px] mx-auto text-center" data-aos="flip-left">
                        <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                            font-semibold text-[#212529]"
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

                        <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                            Click below to know more.
                        </p>
                    </div>

                    <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-x-3 
                        md:gap-y-5 sm:gap-3 gap-2 items-center" data-aos="zoom-in-up"
                    >
                        {INTEGRATIONS_ITEMS.map((item, index) => (
                            <Link key={index} href="/connect-to-equipay" className="block md:p-5 p-3.5 bg-[#F4F7FC] 
                                rounded-md transition group cursor-pointer relative overflow-hidden"
                            >
                                <img src={item?.img} alt={item?.name} className="sm:max-w-[178px] h-auto mx-auto
                                    duration-300 transition-transform group-hover:-translate-y-[200%] w-auto"
                                />

                                <img src={item?.scroll_img} alt={item?.name} className="absolute top-1/2 left-1/2 h-auto
                                    sm:max-w-[218px] -translate-x-1/2 translate-y-[200%] transition-transform duration-300
                                    group-hover:-translate-y-1/2 w-[110px]"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lg:px-24 sm:px-7 px-5 pt-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:gap-8 gap-6">
                        <div className="max-w-[600px] mx-auto text-center">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
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
                </div>
            </section>

            <div className="md:pb-14 pb-10">
                <Testimonials showArrows={false} />
            </div>
        </Fragment>
    )
}

export default ConnectToEquipay