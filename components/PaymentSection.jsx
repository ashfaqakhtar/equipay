"use client";

import { PAYMENT_PLATFORM } from "@/utils/staticData";
import { useEffect, useState } from "react";

const words = ["Payments", "Power-Up", "Your"];

const iconPositions = [
    { top: "0%", left: "50%" },
    { top: "14.645%", left: "85.355%" },
    { top: "50%", left: "100%" },
    { top: "85.355%", left: "85.355%" },
    { top: "100%", left: "50%" },
    { top: "85.355%", left: "14.645%" },
    { top: "50%", left: "0%" },
    { top: "14.645%", left: "14.645%" },
];

const icons = [
    "/icons/icon_1.png",
    "/icons/icon_2.png",
    "/icons/icon_3.png",
    "/icons/icon_4.png",
    "/icons/icon_5.png",
    "/icons/icon_6.png",
    "/icons/icon_7.png",
    "/icons/icon_8.png",
];

const hover_icons = [
    "/icons/hover_icon_1.png",
    "/icons/hover_icon_2.png",
    "/icons/hover_icon_3.png",
    "/icons/hover_icon_4.png",
    "/icons/hover_icon_5.png",
    "/icons/hover_icon_6.png",
    "/icons/hover_icon_7.png",
    "/icons/hover_icon_8.png",
]

const titles = [
    "One account connected to a network of global banks",
    "Intelligent payment routing to optimize authorization & cost",
    "100+ shopper currencies & 17 settlement currencies",
    "100+ global payment types & eWallets to convert more shoppers",
    "Automated accounts receivable",
    "Integrated fraud & chargeback management",
    "Built-in solutions for regulation & tax compliance",
    "Reporting to increase visibility & simplify reconciliation",
];

const textPlacement = [
    "top",
    "right",
    "right",
    "right",
    "bottom",
    "left",
    "left",
    "left",
];

const PaymentSection = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setVisible(true);
            }, 250);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#F0FFFF]">
            <div className="lg:px-24 sm:px-7 px-5 py-12 md:pt-16 md:pb-32 pb-0">
                <div className="container mx-auto">
                    <h2 className="text-center md:text-[40px] text-[26px] leading-[1.2] font-semibold text-[#4f565b] 
                        lg:pb-18 md:pb-16 pb-0 m-0"
                    >
                        Next Generation of Payment Platform
                    </h2>

                    <div className="mt-12 flex justify-center">
                        <div className="relative xl:max-w-[460px] lg:max-w-[380px] md:max-w-[300px] sm:max-w-[280px] 
                            max-w-60 aspect-square w-full"
                        >
                            <div className="absolute lg:inset-0 inset-0 rounded-full border-[3px] border-[#6c757d]" />

                            {iconPositions.map((pos, index) => {
                                const placement = textPlacement[index];
                                const isHovered = hoveredIndex === index;
                                let titleStyle = {};
                                let extraTitleClasses = "";

                                if (placement === "top") {
                                    titleStyle = {
                                        top: "-60px", left: "50%", textAlign: 'center',
                                        transform: "translateX(-50%)",
                                    };
                                    extraTitleClasses = "text-center"
                                } else if (placement === "bottom") {
                                    titleStyle = {
                                        top: "70px", left: "50%", textAlign: 'center',
                                        transform: "translateX(-50%)",
                                    };
                                    extraTitleClasses = "text-center";
                                } else if (placement === "right") {
                                    titleStyle = {
                                        left: "70px", top: "50%", textAlign: 'left',
                                        transform: "translateY(-50%)",
                                    };
                                    extraTitleClasses = "text-left";
                                } else if (placement === "left") {
                                    titleStyle = {
                                        right: "65px", top: "50%", textAlign: 'center',
                                        transform: "translateY(-50%)",
                                    };
                                    extraTitleClasses = "text-right";
                                }

                                return (
                                    <div key={index} className="absolute z-20" style={{
                                        top: pos.top, left: pos.left, transform: "translate(-50%, -50%)",
                                    }}>
                                        <div className="relative flex items-center justify-center"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <div className="w-14 h-14 sm:w-18 sm:h-18 bg-[#F0FFFF] rounded-full flex 
                                                items-center justify-center"
                                            >
                                                <img src={hoveredIndex === index ? hover_icons[index] : icons[index]}
                                                    alt={`Icon ${index + 1}`} className="object-contain w-10 h-10 sm:w-12 
                                                    sm:h-12 transition-transform duration-200 hover:scale-110"
                                                />
                                            </div>

                                            <p className={`absolute xl:text-[20px] text-base leading-normal text-[#22307a] 
                                                ${extraTitleClasses} md:w-[170px] lg:w-[200px] xl:w-[270px] md:block hidden 
                                                ${isHovered ? "text-[#ef793c]" : "text-[#22307a]"}`} style={titleStyle}
                                            >
                                                {titles[index]}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="absolute xl:inset-[12%] lg:inset-[10%] sm:inset-[12%] inset-[14%] rounded-full overflow-hidden">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="absolute inset-0 bg-center bg-cover
                                        bg-[url('/assets/Qwebsite.webp')]"
                                    />

                                    <div className="relative z-10 px-6 text-center text-[#ef793c]">
                                        <p className={`text-[22px] sm:text-[26px] lg:text-[32px] font-semibold leading-tight 
                                            transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
                                        >
                                            {words[index]}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 rounded-full bg-transparent pointer-events-none" />
                        </div>
                    </div>

                    <div className="py-12 md:py-16 md:hidden block">
                        <div className="bg-[#3c6cbe] sm:px-8 sm:py-10 p-4.5">
                            <h2 className="text-center text-white font-medium leading-normal text-[23px] sm:text-[34px]
                                mb-10 md:mb-14"
                            >
                                The Payment Platform Built for Growth
                            </h2>

                            <div className="space-y-6">
                                {PAYMENT_PLATFORM?.map((item, index) => (
                                    <div key={index} className={`${index !== PAYMENT_PLATFORM?.length - 1 ?
                                        "pb-6 border-b border-[#2a3a96]" : ""}`}
                                    >
                                        <div className="flex sm:gap-5 gap-4">
                                            <img src={item?.img} className="object-contain h-[38px] w-[38px]" />

                                            <div>
                                                <p className="text-white text-sm sm:text-lg font-light leading-[1.6]">
                                                    {item?.title}
                                                </p>

                                                {item?.sub_title && (
                                                    <p className="text-white text-sm sm:text-lg font-light leading-[1.6]">
                                                        {item?.sub_title}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaymentSection