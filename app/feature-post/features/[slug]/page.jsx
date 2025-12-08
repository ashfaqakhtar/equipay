import React, { Fragment } from 'react'
import { notFound } from 'next/navigation';
import BannerSection from '@/components/BannerSection';
import { FEATURE_DETAIL_DATA } from '@/utils/staticData';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FaRegCircle } from 'react-icons/fa';

export async function generateStaticParams() {
    return FEATURE_DETAIL_DATA.map((feature) => ({
        slug: feature.slug,
    }));
}

export async function generateMetadata(props) {
    const params = await props.params
    const { slug } = params

    const feature_detail = FEATURE_DETAIL_DATA?.find((item) => item?.slug === slug);

    return {
        title: `${feature_detail.title} – EquiPay`,
    }
}

const FeatureDetailPage = async (props) => {
    const params = await props.params
    const { slug } = params

    const feature_detail = FEATURE_DETAIL_DATA?.find((item) => item?.slug === slug);
    if (!feature_detail) return notFound();

    return (
        <Fragment>
            <Navbar />

            <main className="overflow-x-hidden">
                <BannerSection title={feature_detail?.title} />

                <section className="lg:px-24 sm:px-7 px-5 md:pt-7 pt-14 md:pb-14 pb-10">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
                            <div className="col-span-12 lg:col-span-6 lg:order-0 order-1" data-aos="zoom-in-up">
                                <img src={feature_detail?.left_img} alt={feature_detail?.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="col-span-12 lg:col-span-6 lg:order-1 order-0" data-aos="fade-left">
                                <h2 className="text-xl m-0 leading-[1.2] font-semibold text-[#232323]">
                                    {feature_detail?.sub_title}
                                </h2>

                                <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
                                leading-[1.7] my-5 xl:pr-14"
                                >
                                    {feature_detail?.right_description}
                                </p>

                                {feature_detail?.right_sub_description && (
                                    <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
                                    leading-[1.7] my-5 xl:pr-14"
                                    >
                                        {feature_detail?.right_sub_description}
                                    </p>
                                )}

                                {feature_detail?.right_ul_text?.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <FaRegCircle className="text-lg text-[#ee0979] shrink-0" />

                                        <p className="text-[13px] sm:text-base md:text-lg text-[#57647c] leading-[1.7]
                                        md:text-center text-start"
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="border-[#eeeeee] md:my-10 my-5" />

                        <div className="grid grid-cols-12 gap-6 lg:gap-10">
                            <div className="col-span-12 lg:col-span-6 lg:space-y-4.5 space-y-3.5" data-aos="fade-right">
                                <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
                                leading-[1.7] xl:pr-14"
                                >
                                    {feature_detail?.left_description}
                                </p>
                            </div>

                            <div className="col-span-12 lg:col-span-6" data-aos="zoom-in-up">
                                <img src={feature_detail?.right_img} alt={feature_detail?.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </Fragment>
    )
}

export default FeatureDetailPage