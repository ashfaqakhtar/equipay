import Link from 'next/link'
import { Fragment } from 'react'
import BannerSection from '@/components/BannerSection'
import Accordion from '@/components/Accordion'
import { ABOUT_ITEMS, RISK_MANAGEMENT_ITEMS } from '@/utils/staticData'
import InfoSection from '@/components/InfoSection'

export const metadata = {
    title: "Risk Management – EquiPay",
};

const RiskManagement = () => {
    const risk_management = [
        "Analytical insights into payment risks",
        "Expert help with managing Banking relationships",
        "Optimizing business operations to lower risk profile",
    ]
    return (
        <Fragment>
            <BannerSection title="Risk Management" sub_title="Industry leading risk solutions for higher business delivery." />

            <section className="lg:px-24 sm:px-7 px-5">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-12 md:pt-20 pt-16 md:pb-14 pb-10 gap-6 lg:gap-10 items-center">
                        <InfoSection title='Risk Management' image="/assets/risk_management.webp" items={risk_management}
                            leftClass='lg:order-1 order-0' description={`We provide industry's most comprehensive Risk 
                                Verification suite. To our high-risk industry clients our Risk Verification focus and industry 
                                leading Risk Analysis provide a safety-net and assurance. Our Risk Management is enterprise-wide 
                                and comprehensive. We look at all the factors and drivers in your business that make your
                                business prone to certain risks. Thus, not only do we help you minimize your payment risk, we 
                                also help you optimize your business drivers that make it a high-risk business.`}
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-6 lg:gap-10 md:pb-14 pb-10">
                        <InfoSection title='Verification Services' image="/assets/risk_management.webp"
                            showBar={false} showAccordion={true}
                            showAccordionData={<Accordion items={RISK_MANAGEMENT_ITEMS} isFirstOpen={true} />}
                        />
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

                        <Link href='/get-started' className="border border-[#ef793c] rounded-md text-base py-3 px-6
                            font-medium cursor-pointer inline-block md:my-0 mt-5 text-white uppercase
                            bg-linear-to-r from-[#ef793c] to-[#ff6a00]" data-aos="fade-left"
                        >
                            Get Your EquiPay Account
                        </Link>
                    </div>
                </div>
            </div>

            <section className="md:pt-12 py-12 lg:px-24 sm:px-7 px-5 lg:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="max-w-[600px] mx-auto text-center">
                        <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                            font-semibold text-[#212529]"
                        >
                            The EquiPay Difference
                        </h2>

                        <div className="mt-4 mb-5 flex justify-center ">
                            <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                    animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                />
                            </div>
                        </div>

                        <p className="md:px-3 text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
                            leading-[1.7]"
                        >
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

export default RiskManagement