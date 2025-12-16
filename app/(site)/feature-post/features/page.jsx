import Link from 'next/link';
import { Fragment } from 'react'
import BannerSection from '@/components/BannerSection'
import { IBV_POINTS } from '@/utils/staticData';

export const metadata = {
    title: "Features – EquiPay",
};

const Features = () => {
    return (
        <Fragment>
            <BannerSection title="Features" sub_title="We offer everything your business will ever need" />

            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
                        <div className="col-span-12 xl:col-span-5" data-aos="fade-right">
                            <div className="col-span-12 xl:col-span-5">
                                <div className="grid grid-cols-12 md:gap-6 gap-y-6">
                                    {IBV_POINTS?.map((item, index) => (
                                        <div key={index} className="col-span-12 md:col-span-6 xl:col-span-12">
                                            <div className="relative md:py-[35px] md:pl-[110px] md:pr-[25px] py-[25px] 
                                                h-full transition-all duration-300 before:content-[''] before:duration-500
                                                before:h-full before:transition-all before:top-0 before:left-0 px-5 group
                                                overflow-hidden before:absolute before:bottom-0 before:w-[3px] 
                                                before:bg-linear-to-b before:from-[#ff6a00] before:to-[#ef793c]
                                                hover:before:w-full"
                                            >
                                                <div className="md:block hidden">
                                                    <div className="absolute top-[35px] left-[25px] w-[65px] h-[65px] flex
                                                        items-center justify-center rounded-full bg-[#f9d2c4] transition-all
                                                        duration-500 group-hover:bg-white group-hover:rotate-360"
                                                    >
                                                        <img src={item?.icon} alt={item?.title} />
                                                    </div>
                                                </div>

                                                <div className="md:hidden flex justify-center mb-4 relative z-10">
                                                    <div className="w-[65px] h-[65px] flex items-center justify-center
                                                        rounded-full bg-[#f9d2c4] transition-all duration-500
                                                        group-hover:rotate-360 group-hover:bg-white"
                                                    >
                                                        <img src={item?.icon} alt={item?.title} />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-4 md:items-start items-center relative z-10">
                                                    <Link rel="preload" href={`/feature-post/features/${item?.slug}`}>
                                                        <h3 className="font-semibold leading-[1.4] text-[#707070] text-xl
                                                            transition-colors duration-300 group-hover:text-white
                                                            cursor-pointer hover:underline"
                                                        >
                                                            {item?.title}
                                                        </h3>
                                                    </Link>

                                                    <p className="text-sm md:text-base xl:text-lg text-[#57647c]
                                                        md:text-start text-center max-w-max leading-[1.7] duration-300
                                                        transition-colors group-hover:text-white xl:pr-12"
                                                    >
                                                        {item?.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 xl:col-span-7" data-aos="zoom-in-up">
                            <img src="/assets/features.webp" alt="Features" className="w-full h-auto object-cover" />
                        </div>

                        <div className='col-span-12 mx-auto' data-aos="zoom-in-up">
                            <Link rel="preload" href='tel:+1-866-232-4325' className="border border-[#ef793c] rounded-md 
                                font-medium px-6 cursor-pointer inline-block lg:mt-0 mt-5 text-white uppercase hover:underline
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] text-base py-3"
                            >
                                SET UP A CALL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative linear-background md:py-[110px] py-14">
                <div className="absolute inset-0 bg-no-repeat bg-center bg-size-[200%] md:opacity-35 opacity-20"
                    style={{ backgroundImage: "url('/assets/bg_lines.svg')" }}
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

            <section className="md:pt-20 pt-16 md:pb-14 pb-10 lg:px-24 sm:px-7 px-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6 md:text-left text-center" data-aos="fade-right">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Get Pre-Approved
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                Our team of merchant experts will get you up and running Quickly and Easily, getting your
                                business payment ready is the most critical aspect and we understand that quite well.
                            </p>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7] mt-4">
                                With a merchant partner network in over 150+ countries we can get you approved no matter your
                                industry type with minimum documentation possible. Choose from a range of industry leading
                                payment products and services and accept payments across all platforms.
                            </p>

                            <Link rel="preload" href='/get-started' className="border border-[#ef793c] text-white
                                rounded-md text-base py-3 font-medium px-6 cursor-pointer inline-block uppercase mt-5
                                bg-linear-to-r from-[#ef793c] to-[#ff6a00] "
                            >
                                Get Started
                            </Link>
                        </div>

                        <div className="col-span-12 lg:col-span-6" data-aos="fade-left">
                            <div className="relative z-10 text-center lg:mt-0 mt-12 md:block hidden">
                                <div className='main-image'>
                                    <img src="/assets/banner_image_first.webp" alt="Hero Banner First"
                                        className="h-auto relative z-20 xl:max-w-[648px] lg:max-w-[543px]"
                                    />

                                    <img src="/assets/features_last_img.webp" alt="Hero Banner Two" className="h-auto 
                                        absolute z-30 xl:-bottom-2.5 xl:left-[65px] lg:-bottom-5 lg:left-[45px] 
                                        md:bottom-[100px] md:-left-5 xl:max-w-[648px] lg:max-w-full"
                                    />

                                </div>

                                <div className='circle-image'>
                                    <img src="/assets/blue_circle.webp" alt="Blue Circle Image"
                                        className="h-auto mx-auto absolute -top-5 left-[50px] move-left-bounce"
                                    />
                                    <img src="/assets/hero_banner_circle.webp" alt="Hero Circle Image"
                                        className="h-auto mx-auto absolute lg:-bottom-6 -bottom-3 xl:right-6 lg:right-0 
                                        right-[70px] move-bounce"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 text-center md:hidden block">
                                <img src="/assets/small_screen_feature_img.webp" alt="Hero Banner Small Screen"
                                    className="h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='md:pb-14 pb-0' />
        </Fragment>
    )
}

export default Features