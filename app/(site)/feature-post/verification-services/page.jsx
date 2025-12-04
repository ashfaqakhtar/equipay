import Link from 'next/link'
import { Fragment } from 'react'
import BannerSection from '@/components/BannerSection'
import Accordion from '@/components/Accordion'
import { ABOUT_ITEMS, VERIFICATION_ITEMS } from '@/utils/staticData'

export const metadata = {
    title: "Verification Services – EquiPay",
};

const VerificationServices = () => {
    return (
        <Fragment>
            <BannerSection title="Verification Services"
                sub_title="Quick payment authorizations made possible with EquiPay"
            />

            <section className="lg:px-24 sm:px-7 px-5">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-12 gap-6 lg:pt-20 pt-16 md:pb-14 pb-10 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 lg:order-0 order-1" data-aos="fade-right">
                            <img src="/assets/verification_services.webp" alt="Verification Services"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="col-span-12 lg:col-span-6 md:text-left text-center lg:order-1 order-0"
                            data-aos="zoom-in"
                        >
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Verification Services
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                We bring our merchants a range of solutions suitable for all risk categories from
                                traditional & low risk to emerging & high risk. We specialize in cutting edge high risk
                                solutions even for international merchants.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6 lg:gap-10 md:pb-14 pb-10">
                        <div className="col-span-12 lg:col-span-6 lg:space-y-4.5 space-y-3.5" data-aos="zoom-in">
                            <Accordion items={VERIFICATION_ITEMS} isFirstOpen={true} />
                        </div>

                        <div className="col-span-12 lg:col-span-6" data-aos="fade-right">
                            <img src="/assets/verification_services_second.webp" alt="Verification Services"
                                className="w-full h-auto object-cover"
                            />
                        </div>
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

            <section className="md:pt-12 py-12 lg:px-24 sm:px-7 px-5 lg:pt-20 pt-16 md:pb-14 pb-10">
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

export default VerificationServices