import BannerSection from '@/components/BannerSection'
import { OUR_LOCATIONS } from '@/utils/staticData'
import React, { Fragment } from 'react'

export const metadata = {
    title: "Our Locations – EquiPay",
};

const OurLocations = () => {
    return (
        <Fragment>
            <BannerSection title="Our Locations" sub_title="One brand many locations" />

            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                        {OUR_LOCATIONS?.map((loc, index) => (
                            <div key={index} className="text-center">
                                <h4 className="text-2xl font-semibold text-black leading-[1.2]">
                                    {loc.city}
                                </h4>

                                <p className="mt-3 text-base leading-[1.8] text-[#57647c] font-light md:px-10 px-6">
                                    {loc.addressLine1}
                                    <br />
                                    {loc.addressLine2}
                                </p>

                                <div className="mt-6 w-full">
                                    <iframe src={loc.map_src} allowFullScreen className="w-full" style={{ border: 0 }}
                                        height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default OurLocations