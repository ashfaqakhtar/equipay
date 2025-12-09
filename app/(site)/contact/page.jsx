"use client";

import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import React, { Fragment, useRef, useState } from "react";
import MyInput from "@/components/MyInput";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Head from "next/head";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    subject: Yup.string().required("Subject is required"),
    hcaptcha: Yup.string().required("Please verify you are human"),
});

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const captchaRef = useRef(null);

    const handleSubmit = async (values, { resetForm, setFieldValue }) => {

        setLoading(true);
        const templateParams = {
            full_name: values.name,
            email: values.email,
            phone: values.phone,
            subject: values.subject,
            message: values.message,
            discountCode: values.discountCode,
            agree: values.agree ? "Yes" : "No",
        };

        try {
            const response = await emailjs.send(
                "service_ul8452j", "template_wmtsfi9", templateParams, "2EjYyADHH1E7k5FjG",
            );

            if (response.status === 200) {
                resetForm();
                setFieldValue("hcaptcha", "");

                if (captchaRef.current) {
                    captchaRef.current.resetCaptcha();
                }
                toast.success("Email Sent Successfully");
            }
        } catch (error) {
            toast.error("Somthing Went Wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <Head>
                <title>Contact – EquiPay</title>
            </Head>

            <section className="md:pt-12 py-12 lg:px-24 sm:px-7 px-5 lg:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="max-w-[600px] mx-auto text-center lg:pt-20 pt-16">
                        <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                            font-semibold text-[#212529]"
                        >
                            Let Us Talk
                        </h2>

                        <div className="mt-4 mb-5 flex justify-center">
                            <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full
                                    animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                />
                            </div>
                        </div>

                        <p className="md:px-3 text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                            Unsure what you are looking for ? Fill out our general contact form below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:gap-8 gap-6 lg:pt-20
                        pt-16 md:pb-14 pb-10"
                    >
                        <Formik validationSchema={validationSchema} onSubmit={handleSubmit}
                            initialValues={{
                                name: "", email: "", phone: "", subject: "", message: "",
                                discountCode: "", agree: false, hcaptcha: "",
                            }}
                        >
                            {({ setFieldValue, touched, errors, submitCount, handleChange, values }) => (
                                <Form className="bg-[#F8F9FE] rounded-[10px] shadow-[0_0px_10px_0px_#00000080] lg:px-[22px] 
                                    px-4.5 lg:py-[52px] py-11 space-y-5"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Name" name="name" placeholder="Name" required />
                                        <MyInput label="Email" name="email" placeholder="Email" required />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Phone" name="phone" type="phone" placeholder="Phone" required />
                                        <MyInput label="Subject" name="subject" placeholder="Subject" required />
                                    </div>

                                    <MyInput label="Your Message" type="textarea" name="message" rows={4}
                                        placeholder="Your Message"
                                    />

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Discount Code" name="discountCode" placeholder="Discount Code" />
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <input id="agree" type="checkbox" name="agree" checked={values.agree}
                                            onChange={handleChange} className="md:mt-1 h-5 w-5 border-[#d0d0e0]
                                            rounded mt-1.5 text-[#ef793c] focus:ring-[#ef793c]"
                                        />

                                        <label htmlFor="agree" className='text-base text-[#57647c] leading-[1.8]'>
                                            By checking this, you agree to our {" "}

                                            <Link href='/terms-conditions' target="_blank" className="hover:underline 
                                                cursor-pointer text-[#0887be]"
                                            >
                                                Terms
                                            </Link>

                                            {" "}and{" "}

                                            <Link href='/privacy-policy' target="_blank" className="hover:underline 
                                                cursor-pointer text-[#0887be]"
                                            >
                                                Privacy policy
                                            </Link>.
                                        </label>
                                    </div>

                                    <div className="my-9 overflow-hidden">
                                        <HCaptcha ref={captchaRef} sitekey='aec4547e-2972-4088-b6fe-04d82600855a'
                                            onVerify={(token) => setFieldValue("hcaptcha", token)}
                                            onExpire={() => setFieldValue("hcaptcha", "")}
                                        />

                                        {(touched.hcaptcha || submitCount > 0) && (
                                            <p className="mt-1 text-base text-[#ff0000]">{errors.hcaptcha}</p>
                                        )}
                                    </div>

                                    <div className="flex justify-center">
                                        <button type="submit" className="cursor-pointer rounded-md px-8 py-3
                                            linear-gradient text-sm sm:text-base font-semibold text-white"
                                        >
                                            {loading ? (
                                                <div className="flex items-center gap-2.5">
                                                    <svg className="w-7 h-7 animate-spin text-white" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    >
                                                        <circle className="opacity-25" cx="12" cy="12" r="10"
                                                            stroke="currentColor" strokeWidth="3"
                                                        />
                                                        <path className="opacity-75" fill="none" stroke="currentColor"
                                                            strokeLinecap="round" strokeWidth="3" d="M22 12a10 10 0 01-10 10"
                                                        />
                                                    </svg>
                                                    <span className="text-white">Sending...</span>
                                                </div>
                                            ) : "SUBMIT"}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <aside className="bg-[#F8F9FE] rounded-[10px] shadow-[0_0px_10px_0px_#00000080] p-[22px]">
                            <h3 className="text-xl font-semibold text-[#707070] leading-[1.4] xl:pr-16">
                                Help Us Guide You To The Right Team
                            </h3>

                            <div className="mt-6 space-y-6">
                                <div className="flex gap-4 items-center xl:pr-20">
                                    <div className="p-[5px] rounded-full border-2 border-dotted border-[#57647c] flex 
                                        items-center justify-center"
                                    >
                                        <div className="w-[70px] h-[70px] rounded-full linear-gradient flex items-center 
                                            justify-center text-white"
                                        >
                                            <MdLocationOn className="text-[34px] leading-[75px]" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xl font-semibold text-[#212529] leading-[1.7]">
                                            Address
                                        </p>

                                        <Link href='https://maps.app.goo.gl/MTk2MkDv7fHmqYH89' target='_blank'
                                            className="relative gap-2 leading-[1.8] text-[#e4e4e4] text-base font-light flex"
                                        >
                                            <span className="mt-1 sm:text-base text-[#57647c] sm:leading-[1.8] 
                                                leading-[1.7] hover:underline hover:text-[#ef793c] text-sm font-light"
                                            >
                                                2170 Main St., Ste. 203, Sarasota, FL 34237
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center xl:pr-20">
                                    <div className="p-[5px] rounded-full border-2 border-dotted border-[#57647c] flex 
                                        items-center justify-center"
                                    >
                                        <div className="w-[70px] h-[70px] rounded-full linear-gradient flex items-center 
                                            justify-center text-white"
                                        >
                                            <FaEnvelope className="text-[34px] leading-[75px]" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xl font-semibold text-[#212529] leading-[1.7]">Email</p>

                                        <Link href='mailto:help@equipay.com' target='_blank' className="relative 
                                            gap-2 text-[#e4e4e4] leading-[1.8] text-base font-light flex"
                                        >
                                            <span className="mt-1 sm:text-base text-sm font-light text-[#57647c] 
                                                sm:leading-[1.8] leading-[1.7] hover:underline hover:text-[#ef793c]"
                                            >
                                                help@equipay.com
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center xl:pr-20">
                                    <div className="p-[5px] rounded-full border-2 border-dotted border-[#57647c] flex 
                                        items-center justify-center"
                                    >
                                        <div className="w-[70px] h-[70px] rounded-full linear-gradient flex items-center 
                                            justify-center text-white"
                                        >
                                            <FaPhoneVolume className="text-[34px] leading-[75px]" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xl font-semibold text-[#212529] leading-[1.7]">Phone</p>

                                        <Link href='tel:+1-657-312-4925' target='_blank' className="relative gap-2
                                            leading-[1.8] text-[#e4e4e4] text-base font-light flex"
                                        >
                                            <span className="mt-1 sm:text-base text-sm font-light text-[#57647c] 
                                                sm:leading-[1.8] leading-[1.7] hover:underline hover:text-[#ef793c]"
                                            >
                                                657-312-4925
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Contact