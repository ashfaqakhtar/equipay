"use client";

import { useState } from "react";
import { TESTIMONIALS_DATA } from "@/utils/staticData";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = ({ showArrows = true }) => {
    const [current, setCurrent] = useState(0);
    const total = TESTIMONIALS_DATA?.length;

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    const item = TESTIMONIALS_DATA[current];

    const showTestimonialIndexes = () => {
        if (total <= 3) return [...Array(total).keys()];

        const prevIndex = (current - 1 + total) % total;
        const nextIndex = (current + 1) % total;

        return [prevIndex, current, nextIndex];
    };

    const showTestimonial = showTestimonialIndexes();

    return (
        <section className="md:pt-20 pt-16 lg:px-24 sm:px-7 px-5">
            <div className="container mx-auto">
                <div className="max-w-[780px] mx-auto text-center md:px-[46px]">
                    <div key={current} className="testimonial-fade lg:min-h-[325px] md:min-h-[370px] sm:min-h-[400px] 
                        min-h-auto flex flex-col justify-between"
                    >
                        <div className="flex justify-center">
                            <span className="text-[45px] text-[#0f75bc] leading-none">
                                <FaQuoteLeft />
                            </span>
                        </div>

                        <p className="text-[#5a5a5a] sm:text-[17px] text-base leading-[1.7] sm:my-0 my-6">
                            {item?.quote}
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <div className="rounded-full border-2 border-[#ef793c] transition-all duration-500">
                                <img src={item?.avatar} alt={item?.name}
                                    className="w-[75px] h-[75px] rounded-full p-[3px]"
                                />
                            </div>

                            <div className="flex flex-col items-start text-left">
                                <h3 className="text-lg md:text-xl font-semibold text-[#707070]">
                                    {item?.name}
                                </h3>

                                <span className="text-sm text-[#57647c] font-light">{item?.role}</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:mt-10 md:mb-8 my-8 flex items-center justify-center gap-6 md:gap-10">
                        {showArrows && (
                            <button type="button" onClick={handlePrev} className="w-11 h-11 rounded-full border flex 
                                justify-center items-center border-[#5e5e5e] text-[#5e5e5e] hover:bg-[#ef793c]
                                transition-all duration-300 cursor-pointer hover:text-white hover:border-[#ef793c]"
                            >
                                <FaArrowLeft />
                            </button>
                        )}

                        <div className="flex items-center gap-6">
                            {showTestimonial?.map((index) => {
                                const data = TESTIMONIALS_DATA[index];
                                const isActive = index === current;

                                return (
                                    <button key={data?.name + index} type="button" onClick={() => setCurrent(index)}
                                        className={`rounded-full border-2 border-[#ef793c] items-center ease-in-out
                                        flex justify-center cursor-pointer transition-all duration-300 
                                        ${isActive ? "opacity-100 scale-110 " : "opacity-45 hover:opacity-100"}`}
                                    >
                                        <img src={data?.avatar} alt={data?.name}
                                            className="w-[60px] h-[60px] rounded-full p-[3px]"
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {showArrows && (
                            <button type="button" onClick={handleNext} className="w-11 h-11 rounded-full border flex
                                justify-center items-center border-[#5e5e5e] text-[#5e5e5e] hover:bg-[#ef793c] 
                                transition-all duration-300 cursor-pointer hover:text-white hover:border-[#ef793c]"
                            >
                                <FaArrowRight />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials