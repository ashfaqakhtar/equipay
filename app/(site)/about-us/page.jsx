import BannerSection from '@/components/BannerSection'
import { TEAM_MEMBERS } from '@/utils/staticData'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

export const metadata = {
    title: "About Us – EquiPay",
};

const AboutUs = () => {
    return (
        <Fragment>
            <BannerSection title="About Us" sub_title="The EquiPay Story" />

            <section className="lg:px-24 sm:px-7 px-5">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-12 md:pt-20 pt-16 pb-10 gap-6 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6" data-aos="zoom-in">
                            <span className='text-[#ef793c] uppercase font-medium text-base'>
                                How we were founded
                            </span>

                            <h2 className="text-[30px] m-0 leading-[1.2] mt-2.5 font-semibold text-[#212529]">
                                Client centric payment solutions
                            </h2>

                            <div className='xl:pr-10 sm:text-justify text-left'>
                                <p className="sm:text-base text-sm text-[#5d7079] font-light leading-[1.8] mt-3">
                                    We, at EquiPay, believe  multifaceted and comprehensive 360 approach to the Clients’
                                    Payment Processing needs is in the best interest of the Client’s business. For all its
                                    sweeping growth as an industry and innovations across its fintech pillars, Payment
                                    Processing continues to be dominated by providers with specific focus on expertise in
                                    certain verticals.
                                </p>

                                <p className="sm:text-base text-sm text-[#5d7079] font-light leading-[1.8] mt-3">
                                    The vision of EquiPay’s Co-Founders has been to build Client Centric Comprehensive &amp;
                                    Coherent Cache of Payment Processing resting on the three pillars of:
                                </p>

                                <p className="sm:text-base text-sm text-[#5d7079] font-light leading-[1.8]">
                                    1. Risk Optimization of Client’s Business,
                                </p>

                                <p className="sm:text-base text-sm text-[#5d7079] font-light leading-[1.8]">
                                    2. Customized Payment Processing Solutions, and
                                </p>

                                <p className="sm:text-base text-sm text-[#5d7079] font-light leading-[1.8]">
                                    3. Synchronization of Delivery with Payment Processing
                                </p>

                                <p className="sm:text-base text-sm text-[#5d7079] font-light leading-[1.8] mt-3">
                                    The strategic approach to customize solutions are per the Client’s Business needs is a
                                    paradigm shift from the traditional approach to fit existing service offerings to the
                                    Clients’ business. By prioritizing Clients’ unique business needs and customizing payment
                                    processing options accordingly, EquiPay has positioned itself to bring a sea change to
                                    what mostly has been a solution-provider centric industry.
                                </p>
                            </div>

                        </div>

                        <div className="col-span-12 lg:col-span-6 md:text-left" data-aos="fade-right">
                            <img src="/assets/about_us.webp" alt="Who We Are First"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:pt-12 py-12 lg:px-24 sm:px-7 px-5">
                <div className="container mx-auto">
                    <div className="max-w-[600px] mx-auto text-center">
                        <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                            font-semibold text-[#212529]"
                        >
                            Meet our team
                        </h2>

                        <div className="mt-4 mb-5 flex justify-center">
                            <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                    animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                />
                            </div>
                        </div>

                        <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                            Our leadership team has industry experts with decades of experience creating and managing
                            payment solutions for businesses.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:pt-20 pt-16 md:pb-14 pb-10
                        justify-center"
                    >
                        {TEAM_MEMBERS.map((member, index) => (
                            <div key={index} className="text-center">
                                <img src={member?.image} alt={member?.name}
                                    className='w-auto h-auto'
                                />

                                <h6 className="mt-4 text-base text-black leading-[1.2]">{member?.name}</h6>
                                <h6 className="mt-4 text-base font-semibold leading-[1.2] text-[#3E3E3E]">
                                    {member.role}
                                </h6>

                                {member?.linkedin && (
                                    <Link href={member?.linkedin} target="_blank" className="mt-4 inline-flex 
                                        items-center justify-center text-[#6EC1E4]"
                                    >
                                        <FaLinkedinIn className="text-2xl" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutUs