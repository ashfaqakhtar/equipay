import Accordion from '@/components/Accordion';
import BannerSection from '@/components/BannerSection'
import { TIMELINES_ITEMS } from '@/utils/staticData';
import React, { Fragment } from 'react'

export const metadata = {
    title: "Timeline – EquiPay",
};

const Timeline = () => {
    return (
        <Fragment>
            <BannerSection title="Timeline" sub_title="We keep pushing the growth envelop higher each year." />

            <section className="lg:px-24 sm:px-7 px-5">
                <div className='container mx-auto md:pt-20 pt-16'>
                    <img src="/assets/timeline_img.webp" alt="Timeline Img"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

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

                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-8 lg:gap-5 gap-10 md:pt-20 pt-16 pb-10 ">
                        <Accordion items={TIMELINES_ITEMS} />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Timeline