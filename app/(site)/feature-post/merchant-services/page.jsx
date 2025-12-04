import Link from 'next/link'
import { Fragment } from 'react'
import BannerSection from '@/components/BannerSection'
import { INTEGRATIONS_ITEMS } from '@/utils/staticData'
import { HiCheck } from 'react-icons/hi'

export const metadata = {
    title: "Merchant Account – EquiPay",
};

const MerchantServices = () => {
    const domestic_merchant = [
        "Virtual terminal",
        "Full data privacy compliance",
    ];

    const offshore_merchants = [
        "Worldwide payment solutions",
        "High and medium risk solutions",
    ];

    const canadian_merchant = [
        "Worldwide payment solutions",
        "High and medium risk solutions",
    ];

    const high_risk_merchant = [
        "Card not present options",
        "Competitive pricing",
    ];

    const multi_currency_merchant = [
        "Accept payments globally",
        "API integrations available",
    ];

    const customized_solutions = [
        "Request custom features",
        "Tailored solution for your",
    ];

    return (
        <Fragment>
            <BannerSection title="Merchant Account" sub_title="Range of solutions for all risk categories" />

            <section className="lg:px-24 sm:px-7 px-5">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-12 gap-6 lg:pt-20 pt-16 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 md:text-left text-center" data-aos="zoom-in">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                US Domestic Merchant Account
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                An overwhelming majority of U.S. stores now accept chip card payments. The risk of fraudulent
                                card-present transactions is significantly reduced by chip technology. This minimizes the
                                stores' liability risk. It also boosts customer confidence in your business. Whether you need
                                a simple plug-and-play EMV card reader with or without the Virtual Terminal, or a customized
                                terminal-based solution, EquiPay provides you a range of options to choose from. Our
                                technology offerings are geared towards superior Risk Management, which provides business
                                owners peace of mind.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {domestic_merchant?.map((item, index) => (
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

                        <div className="col-span-12 lg:col-span-6" data-aos="fade-right">
                            <img src="/assets/domestic_merchant.webp" alt="Domestic Merchant "
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6 lg:pt-20 pt-16 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 lg:order-0 order-1" data-aos="fade-right">
                            <img src="/assets/offshore_merchants.webp" alt="Domestic Merchant "
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="col-span-12 lg:col-span-6 md:text-left text-center lg:order-1 order-0"
                            data-aos="zoom-in"
                        >
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Offshore Merchants
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                Payment processing is complex landscape to begin with. When you think international or
                                offshore solutions which most people associate with high-risk payments, one usually thinks
                                of tax-haven kind of countries which is not always true. Some businesses genuinely need
                                solutions that are based in a foreign country where their customers are concentrated. EquiPay
                                offers payment solutions worldwide. If your business needs a solution in Africa or Asia or
                                Europe, reach out to us so that we can help you with what you actually need. Not all
                                solutions are suitable for all businesses and you need a partner who can fathom the global
                                landscape for you.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {offshore_merchants?.map((item, index) => (
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

                    <div className="grid grid-cols-12 gap-6 lg:pt-20 pt-16 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 md:text-left text-center" data-aos="zoom-in">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Canadian Merchant Accountt
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                We partner with various Canadian banks and providers to bring the merchants what they need
                                in payment processing. As a leading provider of efficient, well-priced and secure payment
                                processing solutions, we pride our service offerings for Canadian merchants. Whether you
                                are a small home-based operator, run a retail store, have an online business or need
                                enterprise level sophisticated services, our payment processing solutions can add immense
                                value to your business by providing what you need.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {canadian_merchant?.map((item, index) => (
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

                        <div className="col-span-12 lg:col-span-6" data-aos="fade-right">
                            <img src="/assets/canadian_merchant.webp" alt="Domestic Merchant "
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6 lg:pt-20 pt-16 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 lg:order-0 order-1" data-aos="fade-right">
                            <img src="/assets/high_risk_merchant.webp" alt="Domestic Merchant "
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="col-span-12 lg:col-span-6 md:text-left text-center lg:order-1 order-0"
                            data-aos="zoom-in"
                        >
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                High Risk Merchant Account
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                High risk businesses get labeled as that for a variety of reasons - the way it operates,
                                the way it is structured or the way it delivers solutions. From seemingly low-risk business
                                as furniture or travel that actually get classified as high risk to e-commerce enterprises
                                that seem to be high-risk due to the Card Not Present (CNP) element of their charges, the
                                range is quite large. EquiPay specializes in high-risk options. Since we boast of highly
                                sophisticated Risk Management practices and expertise, we are able to assess the real aspect
                                of your business that is making you high-risk and is causing your merchant account
                                applications to be denied at least a few times. Even if you have had your processing service
                                terminated and your money withheld from you for months, EquiPay can help you get solutions
                                that prevent disruption to your business and provide its stable processing solutions.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {high_risk_merchant?.map((item, index) => (
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

                    <div className="grid grid-cols-12 gap-6 lg:pt-20 pt-16 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 md:text-left text-center" data-aos="zoom-in">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Multi-Currency Merchant Account
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                Certain businesses operate in many countries or offer services to people across the
                                globe. EquiPay offers solutions that allows such businesses to provide its clients the
                                option to pay in their local currency. Thus these businesses can accept credit cards
                                from all around the world and use a real-time multi-currency payment processing to ensure
                                that customers pay in their home currency. The results are accretive to your business
                                prospects as you are able to grow your business in even more countries and reach new
                                markets. Our sophisticated, yet user-friendly, multi-currency e-commerce solutions make
                                all this possible. Setup our multi-currency solution on your website at checkout using our
                                API integration. You may choose to process credit cards on our Virtual Terminal and select
                                the currency for payment from a drop-down menu. EquiPay provides you valuable options that
                                increase your business' flexibility.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {multi_currency_merchant?.map((item, index) => (
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

                        <div className="col-span-12 lg:col-span-6" data-aos="fade-right">
                            <img src="/assets/multi_currency_merchant.webp" alt="Multi Currency Merchant"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6 lg:pt-20 pt-16 lg:gap-10 md:pb-14 pb-10 items-center">
                        <div className="col-span-12 lg:col-span-6 lg:order-0 order-1" data-aos="fade-right">
                            <img src="/assets/customized_solutions.webp" alt="Customized Solutions"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="col-span-12 lg:col-span-6 md:text-left text-center lg:order-1 order-0"
                            data-aos="zoom-in"
                        >
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Customized Solutions
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                Each business has its unique challenges. The risk factors that it faces emanate from the way
                                it operates and the way it is structured. The geographic locations, supply-chain, employee
                                training and practices, legal framework, corporate structure, they all impact how the
                                business is perceived by the payment service providers. EquiPay has a highly sophisticated
                                Risk Management. Since we understand which of your business drivers or processes can cause
                                the financial institutions to classify you as high-risk or put you on their radar, we work
                                with you to customize solutions that work for your business. Over the years, we have helped
                                businesses by move to countries and currencies or methods of payments processing that are
                                more suitable to their business needs. In an increasingly complex global business landscape,
                                our customized solutions are increasingly more valuable to our global clientele
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                                {customized_solutions?.map((item, index) => (
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

            <section className="md:pt-20 pt-16 md:pb-14 pb-10 lg:px-24 sm:px-7 px-5">
                <div className="container mx-auto">
                    <div className="max-w-[600px] mx-auto text-center" data-aos="flip-left">
                        <h2 className="xl:text-[40px] lg:text-[34px] md:text-[40px] text-[26px] m-0 leading-[1.2] 
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

                        <p className="md:px-10 text-sm md:text-base text-[#57647c] leading-[1.8]">
                            We empower your businesses with multiple 3rd party integrations
                        </p>
                    </div>

                    <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-x-3 
                        md:gap-y-5 sm:gap-3 gap-2 items-center" data-aos="zoom-in-up"
                    >
                        {INTEGRATIONS_ITEMS.map((item, index) => (
                            <div key={index} className="md:p-5 p-3.5 max-h-max bg-[#F4F7FC] rounded-md transition group">
                                <Link href='/connect-to-equipay' className="relative h-auto mx-auto flex items-center
                                    justify-center overflow-hidden"
                                >
                                    <img src={item?.img} alt={item?.name} className="h-auto mx-auto transition-transform
                                        transform translate-y-0 duration-300 group-hover:-translate-y-full"
                                    />

                                    <img src={item?.scroll_img} alt={item?.name} className="h-auto 
                                        mx-auto absolute transform translate-y-full transition-transform duration-300 
                                        group-hover:translate-y-0"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default MerchantServices