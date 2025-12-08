"use client";

import { Fragment, useState } from "react";
import { FaMinus, FaServicestack } from "react-icons/fa";

const Accordion = ({ items = [], isFirstOpen = false }) => {
    const [openIndex, setOpenIndex] = useState(() => {
        if (isFirstOpen) return [0];
        return items?.map((_, i) => i);
    })

    const isOpen = (idx) => openIndex?.includes(idx);

    const handleToggle = (idx) => {
        if (isFirstOpen) {
            setOpenIndex((prev) =>
                prev?.includes(idx) ? [] : [idx]
            )
        } else {
            setOpenIndex((prev) => prev?.includes(idx)
                ? prev?.filter((i) => i !== idx) : [...prev, idx]
            )
        }
    };

    return (
        <Fragment>
            {items?.map((item, index) => (
                <div key={index} className={`transition-all duration-300 ease overflow-hidden bg-white
                    ${isOpen(index) ? "shadow-[0_0px_20px_#6c76861a]" : ""}`}
                >
                    <button onClick={() => handleToggle(index)} className={`cursor-pointer w-full relative text-left flex 
                        justify-between items-center ${isOpen(index) ? "" : "shadow-[0_0px_20px_#6c76861a]"}`}
                    >
                        <div className={`w-[47px] h-full absolute  linear-gradient flex items-center justify-center
                            ${isOpen(index) ? "" : "border-t border-l border-b border-[#ff6a00]"}`}
                        >
                            {isOpen(index) ? (
                                <FaMinus className="text-xl text-white" />
                            ) : (
                                <FaServicestack className="text-xl text-white" />
                            )}
                        </div>

                        {/* <div className={`${isOpen(index) ? "" : "border-t border-r border-b border-[#6c76861a]"}
                            flex-1 md:px-4 px-3 py-3 text-start`}
                        >
                            <h3 className="sm:text-[15px] text-base font-medium text-[#212529] hover:underline">
                                {item?.title}
                            </h3>
                        </div> */}

                        <div className={`${isOpen(index) ? "" : "border-t border-r border-b border-[#6c76861a]"}
                            flex-1 py-[15px] pl-[60px] md:pr-4 pr-3 text-start font-semibold`}
                        >
                            <h3 className="sm:text-[15px] md:leading-normal leading-none text-base font-medium
                                hover:underline text-black"
                            >
                                {item?.title}
                            </h3>
                        </div>
                    </button>

                    <div className={`px-5 text-justify overflow-hidden transition-all duration-300 ease
                        ${isOpen(index) ? "max-h-auto py-[15px] border-t border-[#d4d4d4]" :
                            "max-h-0 py-0 border-t-0 border-[#d4d4d4]"}`}
                    >
                        <div className="md:text-base text-[15px] leading-[1.7] text-[#57647c] font-light">
                            {item?.content}
                        </div>

                        {item?.sub_content && (
                            <div className="mt-[15px] md:text-base text-[15px] leading-[1.7] text-[#57647c] font-light">
                                {item?.sub_content}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </Fragment>
    );
}

export default Accordion