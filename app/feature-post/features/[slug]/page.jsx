// "use client";

// import React, { Fragment } from 'react'
// import { notFound, usePathname } from 'next/navigation';
// import { FaRegCircle } from 'react-icons/fa';
// import BannerSection from '@/components/BannerSection';
// import { FEATURE_DETAIL_DATA } from '@/utils/staticData';
// import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';
// import Head from 'next/head';

// const FeatureDetailPage = () => {
//     const pathname = usePathname()
//     const slug = pathname?.split("features/")[1];
//     const feature_detail = FEATURE_DETAIL_DATA?.find((item) => item?.slug === slug);
//     if (!feature_detail) return notFound();

//     return (
//         <Fragment>
//             <Head>
//                 <title>{feature_detail?.title} – EquiPay</title>
//             </Head>

//             <Navbar />

//             <main className="overflow-x-hidden">
//                 <BannerSection title={feature_detail?.title} />

//                 <section className="lg:px-24 sm:px-7 px-5 md:pt-7 pt-14 md:pb-14 pb-10">
//                     <div className="container mx-auto">
//                         <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
//                             <div className="col-span-12 lg:col-span-6 lg:order-0 order-1" data-aos="zoom-in-up">
//                                 <img src={feature_detail?.left_img} alt={feature_detail?.title}
//                                     className="w-full h-auto object-cover"
//                                 />
//                             </div>

//                             <div className="col-span-12 lg:col-span-6 lg:order-1 order-0" data-aos="fade-left">
//                                 <h2 className="text-xl m-0 leading-[1.2] font-semibold text-[#232323]">
//                                     {feature_detail?.sub_title}
//                                 </h2>

//                                 <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
//                                 leading-[1.7] my-5 xl:pr-14"
//                                 >
//                                     {feature_detail?.right_description}
//                                 </p>

//                                 {feature_detail?.right_sub_description && (
//                                     <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
//                                     leading-[1.7] my-5 xl:pr-14"
//                                     >
//                                         {feature_detail?.right_sub_description}
//                                     </p>
//                                 )}

//                                 {feature_detail?.right_ul_text?.map((item, index) => (
//                                     <div key={index} className="flex items-center gap-2">
//                                         <FaRegCircle className="text-lg text-[#ee0979] shrink-0" />

//                                         <p className="text-[13px] sm:text-base md:text-lg text-[#57647c] leading-[1.7]
//                                         md:text-center text-start"
//                                         >
//                                             {item}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <hr className="border-[#eeeeee] md:my-10 my-5" />

//                         <div className="grid grid-cols-12 gap-6 lg:gap-10">
//                             <div className="col-span-12 lg:col-span-6 lg:space-y-4.5 space-y-3.5" data-aos="fade-right">
//                                 <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
//                                 leading-[1.7] xl:pr-14"
//                                 >
//                                     {feature_detail?.left_description}
//                                 </p>
//                             </div>

//                             <div className="col-span-12 lg:col-span-6" data-aos="zoom-in-up">
//                                 <img src={feature_detail?.right_img} alt={feature_detail?.title}
//                                     className="w-full h-auto object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>

//             <Footer />
//         </Fragment>
//     )
// }

// export default FeatureDetailPage


// /Feature-post/features/[slug]/page.jsx

import React, { Fragment } from 'react'
import { notFound } from 'next/navigation'; // Keep notFound
import { FaRegCircle } from 'react-icons/fa';
import BannerSection from '@/components/BannerSection';
import { FEATURE_DETAIL_DATA } from '@/utils/staticData';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// NOTE: next/head is for the Pages Router. Use the built-in metadata export instead.
// import Head from 'next/head'; 

// *** NEW REQUIRED FUNCTION (from Step 2) ***
export async function generateStaticParams() {
    return FEATURE_DETAIL_DATA.map((feature) => ({
        slug: feature.slug,
    }));
}
// *** END NEW REQUIRED FUNCTION ***


// *** UPDATED COMPONENT (Remove "use client" and use params) ***
// NOTE: The name should be `Page` by convention.
const FeatureDetailPage = ({ params }) => {
    // 1. Get the slug directly from params, which is available on Server Components
    const slug = params.slug; 
    
    // 2. Find the feature detail using the slug
    const feature_detail = FEATURE_DETAIL_DATA?.find((item) => item?.slug === slug);
    if (!feature_detail) return notFound();

    return (
        <Fragment>
            {/* 3. Replaced next/head with standard <title> for the demo, 
                  but you should use the Next.js Metadata API for best practice. */}
            <title>{feature_detail?.title} – EquiPay</title> 

            <Navbar />

            <main className="overflow-x-hidden">
                {/* ... (rest of your component content is unchanged) ... */}
                <BannerSection title={feature_detail?.title} />

                <section className="lg:px-24 sm:px-7 px-5 md:pt-7 pt-14 md:pb-14 pb-10">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
                            <div className="col-span-12 lg:col-span-6 lg:order-0 order-1" data-aos="zoom-in-up">
                                {/* Ensure the `src` here uses a path that will resolve statically, 
                                     since you're not using the Next.js Image component */}
                                <img src={feature_detail?.left_img} alt={feature_detail?.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* ... (rest of the component content) ... */}
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

export default FeatureDetailPage;