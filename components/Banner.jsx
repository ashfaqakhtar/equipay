import Link from 'next/link'

const Banner = () => {
    return (
        <div className='banner-gradient'>
            <div className="relative bg-[url('/assets/banner_background.webp')] bg-bottom-left bg-no-repeat
                lg:px-24 sm:px-7 px-5 lg:pt-40 pt-[170px]"
            >
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 items-center xl:gap-10 lg:gap-6 
                        gap-8 justify-center"
                    >
                        <div className="xl:col-span-5 lg:col-span-4">
                            <div className="text-center lg:text-left">
                                <h2 className="xl:text-4xl lg:text-3xl text-4xl font-black text-[#707070] leading-[1.2]">
                                    Power-Up Your Payments
                                </h2>

                                <p className="md:mt-4 sm:text-lg text-base text-[#57647c] leading-[1.7] max-w-[400px] 
                                    lg:mx-0 mx-auto mt-5"
                                >
                                    Get the financial tools and insights to start, build and grow your business.
                                </p>
                            </div>

                            <div className=" text-base cursor-pointer text-center lg:text-left md:mt-8 mt-10">
                                <Link href='/apply-now' className="text-white uppercase border border-[#ef793c] 
                                    bg-linear-to-r from-[#ef793c] to-[#ff6a00] rounded-md py-3 font-medium px-6"
                                >
                                    Start Processing Now!
                                </Link>
                            </div>
                        </div>

                        <div className="xl:col-span-7 lg:col-span-8 flex justify-center lg:justify-end">
                            <div className="relative z-10 text-center lg:mt-0 mt-12 md:block hidden">
                                <div className='main-image'>
                                    <img src="/assets/banner_image_first.webp" alt="Hero Banner First"
                                        className="h-auto relative z-20 xl:max-w-[648px] lg:max-w-[543px] zoom-in"
                                    />

                                    <img src="/assets/banner_image_two.webp" alt="Hero Banner Two" className="h-auto 
                                        absolute z-30 bottom-[60px] -left-[30px] rounded-md xl:max-w-[648px] 
                                        lg:max-w-[50%] fade-in-left"
                                    />

                                    <img src="/assets/banner_image_three.webp" alt="Hero Banner Three" className="h-auto
                                        absolute z-30 xl:top-28 xl:-right-20 xl:max-w-[648px] lg:max-w-[35%] lg:-right-4
                                        lg:top-[130px] md:top-[110px] md:-right-[25px] fade-in-up"
                                    />
                                </div>

                                <div className='circle-image absolute -top-1.5 right-0 left-0'>
                                    <img src="/assets/hero_banner_circle.webp" alt="Hero Circle Image"
                                        className="h-auto mx-auto"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 text-center md:hidden block">
                                <img src="/assets/hero_banner_small_screen.webp" alt="Hero Banner Small Screen"
                                    className="h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner