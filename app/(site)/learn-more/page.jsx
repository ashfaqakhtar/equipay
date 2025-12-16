"use client";

import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { Fragment, useState } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import Testimonials from "@/components/Testimonials";
import { BUSINESS_TYPES, GET_APPROVED } from "@/utils/staticData";
import { INTEGRATIONS_ITEMS, LEARN_MORE } from "@/utils/staticData";
import Head from "next/head";
import toast from "react-hot-toast";

const PHP_ENDPOINT = "/mail/learn_more_mail.php";

const validationSchema = Yup.object({
    company_name: Yup.string().required("Company Name is required"),
    phone: Yup.string().required("Contact is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
});

const LearnMore = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);

        const payload = {
            company_name: values.company_name,
            email: values.email,
            phone: values.phone,
            number_of_employee: values.number_of_employee || "",
            gross_turnover: values.gross_turnover || "",
            industry_type: values.industry_type || "",
        };

        try {
            const res = await fetch(PHP_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const raw = await res.text();
            console.debug("LearnMore raw response:", raw);

            let result = null;
            try {
                result = raw ? JSON.parse(raw) : null;
            } catch (e) {
                console.warn("Non-JSON response from PHP:", raw);
            }

            if (res.ok && result && result.status === "success") {
                resetForm();
                toast.success(result.message || "Email Sent Successfully");
            } else {
                const msg = (result && result.message) || raw || "Server submission failed.";
                toast.error(msg);
            }
        } catch (error) {
            console.error("LearnMore Form Error:", error);
            toast.error("Something Went Wrong");
        } finally {
            setLoading(false);
        }
    };

    const baseClass = `w-full rounded-sm bg-white text-[#333] h-[38px] font-semibold text-base leading-1.5 
        px-3.5 pt-1 pb-1.5 outline-none focus:ring-2 focus:ring-[#ff7a21]`;

    return (
        <Fragment>
            <Head>
                <title>Learn More – EquiPay</title>
            </Head>

            <section className="md:pt-20 pt-16 md:pb-14 pb-10 lg:px-24 sm:px-7 px-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 pt-12 gap-6 md:gap-10 items-center">
                        <div className="col-span-12 xl:col-span-7 md:col-span-6 xl:max-w-[560px]" data-aos="fade-right">
                            <h4 className="sm:text-[30px] text-[28px] m-0 leading-[1.2] font-semibold text-[#0887BE]">
                                Get Approved Today !
                            </h4>

                            <p className="lg:mt-8 mt-5 text-base lg:text-lg text-[#57647c] font-light lg:mb-10
                                mb-7 leading-[1.7] text-justify"
                            >
                                Are you ready to take your business to the next level? Partnering with Equipay you will
                                benefit from:
                            </p>

                            <div className="md:space-y-1.5 space-y-2">
                                {GET_APPROVED?.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <FaCheck className="text-[#6EC1E4] shrink-0 mt-1.5" />

                                        <p className="text-sm md:text-base text-[#54595F] leading-[1.7]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5">
                                <img src="/assets/visa_master_discover.webp" alt="Visa Master Discover"
                                    className="object-cover h-auto w-auto"
                                />
                            </div>
                        </div>

                        <div className="col-span-12 xl:col-span-5 md:col-span-6" data-aos="fade-left">
                            <div className="md:rounded-4xl rounded-2xl bg-[#1758A8] p-6 sm:p-8 shadow-[0px_0px_27px_9px_#c0c0c099]">
                                <h3 className="text-white text-[28px] md:text-[32px] font-semibold md:mb-8 mb-5 text-center">
                                    Quick Apply
                                </h3>

                                <Formik validationSchema={validationSchema} onSubmit={handleSubmit}
                                    initialValues={{
                                        company_name: "", phone: "", email: "", number_of_employee: "",
                                        gross_turnover: "", industry_type: "",
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="space-y-4">
                                            <div>
                                                <Field name="company_name" placeholder="Company Name" className={`${baseClass} 
                                                    ${errors.company_name && touched.company_name ? "border border-red-500"
                                                        : `border border-transparent focus:ring-2 focus:ring-[#ff7a21]`}`}
                                                />

                                                <ErrorMessage component="div" name="company_name"
                                                    className="mt-1 text-base text-[#ff0000]"
                                                />
                                            </div>

                                            <div>
                                                <Field name="phone" placeholder="Contact" inputMode="numeric" maxLength={15}
                                                    onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ""); }}
                                                    className={`${baseClass} ${errors.phone && touched.phone ?
                                                        "border border-red-500" : `border border-transparent focus:ring-2 focus:ring-[#ff7a21]`}`}
                                                />
                                                <ErrorMessage component="div" name="phone" className="mt-1 text-base text-[#ff0000]" />
                                            </div>

                                            <div>
                                                <Field name="email" type="email" placeholder="Email" className={`${baseClass} 
                                                    ${errors.email && touched.email ? "border border-red-500" :
                                                        `border border-transparent focus:ring-2 focus:ring-[#ff7a21]`}`}
                                                />

                                                <ErrorMessage component="div" name="email" className="mt-1 text-base text-[#ff0000]" />
                                            </div>

                                            <div>
                                                <Field name="number_of_employee" className={`${baseClass} 
                                                    ${errors.number_of_employee && touched.number_of_employee ?
                                                        "border border-red-500" : `border border-transparent focus:ring-2 focus:ring-[#ff7a21]`}`}
                                                    placeholder={`Number of employees in your company ?`}
                                                    onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ""); }}
                                                />
                                            </div>

                                            <div>
                                                <Field name="gross_turnover" placeholder="Gross turnover in $"
                                                    className={`${baseClass} ${errors.gross_turnover && touched.gross_turnover ?
                                                        "border border-red-500" : `border border-transparent focus:ring-2 focus:ring-[#ff7a21]`}`}
                                                />
                                            </div>

                                            <div>
                                                <Field name="industry_type" placeholder="Mention your industry type"
                                                    className={`${baseClass} ${errors.industry_type && touched.industry_type
                                                        ? "border border-red-500" : `border border-transparent focus:ring-2 focus:ring-[#ff7a21]`}`}
                                                />
                                            </div>

                                            <div className="flex justify-center pt-3">
                                                <button type="submit" disabled={loading} className="cursor-pointer rounded-md px-7 py-2 linear-gradient text-sm sm:text-base font-semibold text-white">
                                                    {loading ? (
                                                        <div className="flex items-center gap-2.5">
                                                            <svg className="w-7 h-7 animate-spin text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                                                                <path className="opacity-75" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M22 12a10 10 0 01-10 10" />
                                                            </svg>
                                                            <span className="text-white">Sending...</span>
                                                        </div>
                                                    ) : "SUBMIT"}
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-16 md:pb-14 pb-10 
                        justify-center" data-aos="zoom-in-up"
                    >
                        {LEARN_MORE?.map((item, index) => (
                            <div key={index} className="text-center">
                                <img src={item?.image} alt={item?.name} className='w-auto h-auto mx-auto' />

                                <h3 className="mt-4 text-[28px] text-[#0887BE] leading-[1.2] font-semibold">
                                    {item?.title}
                                </h3>

                                <h6 className="mt-4 text-base xl:text-lg font-light leading-[1.7] text-[#7A7A7A]">
                                    {item.sub_title}
                                </h6>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-[600px] mx-auto text-center">
                        <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                            font-semibold text-[#212529]"
                        >
                            Hard to Place? No Problem !
                        </h2>

                        <div className="mt-4 mb-5 flex justify-center">
                            <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full 
                                    animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                />
                            </div>
                        </div>

                        <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                            Not all businesses are created equal especially when it comes to banks. It’s important to
                            work with a merchant services company that understands your business type.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-16"
                        data-aos="zoom-in-up"
                    >
                        {BUSINESS_TYPES?.map((data, index) => (
                            <div key={index} className="rounded-md shadow-[0_0_11px_0px_#6EC1E4] px-5 py-5">
                                {data?.items.map((title, idx) => (
                                    <div key={idx} className={`flex items-center gap-3 transition group duration-300 
                                        ${idx !== data?.items.length - 1 ? "border-b border-[#e5e5e5]" : ""} ease-in-out 
                                        ${idx !== 0 ? "mt-[calc(21px/2)]" : ""} ${idx !== data?.items.length - 1 ?
                                            "pb-[calc(21px/2)]" : ""}`}
                                    >
                                        <FaCheckCircle className='text-[#0887BE] group-hover:text-[#1758A8] text-2xl' />
                                        <p className="text-base md:text-lg text-[#54595F] leading-[1.6]">{title}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="max-w-[580px] mx-auto text-center pt-16" data-aos="flip-left">
                        <h2 className="md:text-[40px] text-[26px] m-0 leading-[1.2] font-semibold text-[#212529]">
                            Seamless Integration
                        </h2>

                        <div className="mt-4 mb-5 flex justify-center">
                            <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]" />
                            </div>
                        </div>

                        <p className="md:px-3 text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                            Equipay is now powering businesses of all sizes with multiple 3rd party integrations.
                        </p>
                    </div>

                    <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-x-3 md:gap-y-5 sm:gap-3 gap-2 
                        items-center" data-aos="zoom-in-up"
                    >
                        {INTEGRATIONS_ITEMS.map((item, index) => (
                            <Link rel="preload" key={index} href="/connect-to-equipay" className="block md:p-5 p-3.5 
                                max-h-max bg-[#F4F7FC] rounded-md transition group cursor-pointer"
                            >
                                <div className="relative h-auto mx-auto flex items-center justify-center overflow-hidden">
                                    <img src={item?.img} alt={item?.name} className="h-auto mx-auto transition-transform 
                                        transform translate-y-0 duration-300 group-hover:-translate-y-full"
                                    />

                                    <img src={item?.scroll_img} alt={item?.name} className="h-auto mx-auto absolute transform 
                                        translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lg:px-24 sm:px-7 px-5 pt-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:gap-8 gap-6">
                        <div className="max-w-[580px] mx-auto text-center">
                            <h2 className="md:text-[40px] text-[26px] m-0 leading-[1.2] font-semibold text-[#212529]">
                                What customers say about us
                            </h2>

                            <div className="mt-4 mb-5 flex justify-center">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full 
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                Equipay is proud in showcasing the experiences of our clients from various segments of 
                                the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="md:pb-14 pb-10">
                <Testimonials showArrows={false} />
            </div>
        </Fragment>
    );
};

export default LearnMore