import { Fragment } from "react";
import { HiCheck } from "react-icons/hi";

const InfoSection = ({
    title, showBar = true, showImage = true, description, items = [], image, leftClass, rightClass,
    showAccordion = false, showAccordionData, contentImage = false, aosAccordion = 'fade-right', accordionClass,
}) => {
    return (
        <Fragment>
            {showBar && (
                <div className={`col-span-12 lg:col-span-6 md:text-left text-center ${leftClass}`} data-aos="fade-right">
                    <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                        font-semibold text-[#212529]"
                    >
                        {title}
                    </h2>

                    <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                        <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                            <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                            animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                            />
                        </div>
                    </div>

                    {description && (
                        <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                            {description}
                        </p>
                    )}

                    {contentImage && (
                        <img src={image} alt={title} className="w-full h-auto object-cover" />
                    )}

                    {!!items?.length && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-y-4 xl:gap-x-8 gap-4 mt-8">
                            {items?.map((item, index) => (
                                <div key={index} className="group relative bg-white z-1 pl-[35px] pr-[15px] py-2.5
                                shadow-[0_2px_48px_rgba(0,0,0,0.08)] rounded-[5px] transition-all flex items-center gap-3 
                                overflow-hidden before:-z-1 before:content-[''] before:absolute before:left-0 before:top-0 
                                before:h-full before:w-0 before:rounded-[5px] before:transition-all before:duration-500 
                                hover:before:w-full before:bg-[linear-gradient(90deg,#ef793c_0%,#ff6a00_100%)] duration-300"
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
                    )}
                </div>
            )}

            {showAccordion && (
                <div className={`col-span-12 lg:col-span-6 lg:space-y-4.5 space-y-3.5 ${accordionClass}`}
                    data-aos={aosAccordion}
                >
                    {showAccordionData}
                </div>
            )}

            {showImage && (
                <div className={`col-span-12 lg:col-span-6 ${rightClass}`} data-aos="zoom-in-up">
                    <img src={image} alt={title} className="w-full h-auto object-cover" />
                </div>
            )}
        </Fragment>
    );
};

export default InfoSection