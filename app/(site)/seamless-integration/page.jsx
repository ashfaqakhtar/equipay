import { Fragment } from 'react'
import { FaCheck, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
    title: "Integration – EquiPay",
};

const SeamlessIntegration = () => {
    const integration = [
        "3-D Secure",
        "Apple Pay",
        "Built-in Fraud Prevention and Risk Management",
        "Chargeback Management",
        "Credit and Debit Card Processing",
        "Multiple Currencies",
        "Multiple Languages",
        "Payment Analytics and Reporting",
        "Vaulted Shoppers",
    ];

    const powering_shoppers = [
        "We provide you with a merchant account and payment gateway all-in-one",
        "Fast & easy onboarding with no set up fees or long term contracts",
        "Increase sales with intelligent payment routing through our global bank connections",
        "Accept all Major Credit Cards / Debit Cards Including Visa®, MasterCard®, American Express®, Discover®, Diners Club, JCB",
        "World-class fraud prevention using Kount",
        "Seamless checkout experience, customers stay on your site",
        "Mobile optimized",
        "Includes Hosted Payment Fields so sensitive payment data never touches your servers",
        "Multi-currency support for increased conversions",
    ];

    return (
        <Fragment>
            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 pt-12 items-center">
                        <div className="col-span-12 lg:col-span-6" data-aos="fade-right">
                            <h4 className="text-[30px] m-0 leading-[1.2] font-semibold text-[#0887BE]">
                                EquiPay Payment Integration
                            </h4>

                            <p className="mt-8 text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
                                leading-[1.7] text-justify mb-10"
                            >
                                EquiPay offers a merchant account and payment gateway solution all-in-one. We process your
                                credit and debit card transactions with secure and frictionless checkout for your global
                                shoppers. Our Payment Gateway brings an embedded checkout form directly into your checkout
                                page so that shoppers never leave your store. And the module is free!
                            </p>

                            <div className="md:space-y-1.5 space-y-2.5">
                                {integration?.map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <FaCheck className="text-[#6EC1E4] shrink-0 mt-2" />

                                        <p className="text-base md:text-lg text-[#57647C] leading-[1.7]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6" />
                    </div>

                    <div className="max-w-[750px] mx-auto md:pt-20 pt-16 pb-6">
                        <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                            font-semibold text-[#212529] text-center"
                        >
                            Powering Your Shoppers
                        </h2>

                        <div className="mt-4 mb-5 flex justify-center">
                            <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                    animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                />
                            </div>
                        </div>

                        <div className="md:space-y-1.5 space-y-2.5">
                            {powering_shoppers?.map((item, index) => (
                                <div key={index} className="flex items-start sm:gap-2 gap-3">
                                    <FaCheckCircle className="text-[#1758A8] shrink-0 mt-1.5" />

                                    <p className="text-base md:text-lg text-[#54595F] leading-[1.7]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default SeamlessIntegration