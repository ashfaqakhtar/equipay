"use client";

import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import React, { Fragment, useRef, useState } from "react";
import MyInput from "@/components/MyInput";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import BannerSection from "@/components/BannerSection";
import Head from "next/head";
import toast from "react-hot-toast";

const PHP_ENDPOINT = "/mail/get_started_mail.php";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    company_name: Yup.string().required("Company Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    country: Yup.string().required("Country is required"),
    monthly_volume: Yup.string().required("Monthly Volume is required"),
    average_transaction: Yup.string().required("Average Transaction is required"),
    message: Yup.string().required("Message is required"),
    rfp_request: Yup.string().required("RFP is required"),
    email_updates: Yup.string().required("Email Updates is required"),
    // hcaptcha: Yup.string().required("Please verify you are human"),
});

const GetStarted = () => {
    const [loading, setLoading] = useState(false);
    const captchaRef = useRef(null);

    const handleSubmit = async (values, { resetForm, setFieldValue }) => {
        setLoading(true);

        const payload = {
            name: values.name,
            company_name: values.company_name,
            website: values.website || "",
            email: values.email,
            phone: values.phone,
            country: values.country,
            monthly_volume: values.monthly_volume,
            average_transaction: values.average_transaction,
            message: values.message,
            rfp_request: values.rfp_request,
            email_updates: values.email_updates,
            agree: values.agree ? true : false,
            // hcaptcha: values.hcaptcha || "",
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
            console.debug("GetStarted raw response:", raw);

            let result = null;
            try {
                result = raw ? JSON.parse(raw) : null;
            } catch (e) {
                console.warn("Non-JSON response from PHP:", raw);
            }

            if (res.ok && result && result.status === "success") {
                toast.success("Email Sent Successfully");
                resetForm();
                // setFieldValue("hcaptcha", "");
                if (captchaRef.current) captchaRef.current.resetCaptcha();
            } else {
                const msg = (result && result.message) || raw || "Server submission failed.";
                toast.error(msg);
            }
        } catch (err) {
            console.error("GetStarted Form Error:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <Head>
                <title>Get Started – EquiPay</title>
            </Head>

            <BannerSection title="Get Started" sub_title="Please tell us a little about your business by filling the 
                form below. EquiPay rep will get in touch with you"
            />

            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:gap-8 gap-6">
                        <Formik validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            initialValues={{
                                name: "", company_name: "", website: "", email: "", phone: "",
                                country: "", monthly_volume: "", average_transaction: "", message: "",
                                agree: false, rfp_request: "", email_updates: "", 
                                // hcaptcha: "",
                            }}
                        >
                            {({
                                setFieldValue, setFieldTouched, touched, errors, submitCount, handleChange, values,
                            }) => (
                                <Form className="bg-[#F8F9FE] rounded-[10px] shadow-[0_0px_10px_0px_#00000080] lg:px-[22px] 
                                    px-4.5 lg:py-[52px] py-11 space-y-5" data-aos="fade-right"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Name" name="name" placeholder="Name" required />
                                        <MyInput label="Company Name" name="company_name" placeholder="Company Name" required />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Website" name="website" placeholder="Website" />
                                        <MyInput label="Email" name="email" placeholder="Email" required />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Phone" name="phone" type="phone" placeholder="Phone" required />
                                        <MyInput label="Country" name="country" type="select" placeholder="Select Country"
                                            required options={[
                                                { value: "India", label: "India" },
                                                { value: "USA", label: "USA" },
                                                { value: "CANADA", label: "CANADA" },
                                            ]}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Monthly Volume" name="monthly_volume" type="select" required
                                            placeholder="Select Monthly Volume" options={[
                                                { value: "Less than $5,000", label: "Less than $5,000" },
                                                { value: "$5,000 - $9,999", label: "$5,000 - $9,999" },
                                                { value: "$10,000 - $24,999", label: "$10,000 - $24,999" },
                                                { value: "$25,000 - $49,999", label: "$25,000 - $49,999" },
                                                { value: "$50,000 - $99,999", label: "$50,000 - $99,999" },
                                                { value: "$100,000 - $249,000", label: "$100,000 - $249,000" },
                                                { value: "$250,000+", label: "$250,000+" },
                                                { value: "Unknown or New Business", label: "Unknown or New Business" },
                                            ]}
                                        />

                                        <MyInput label="Average Transaction" name="average_transaction" type="select"
                                            placeholder="Select Transaction" required
                                            options={[
                                                { value: "Less than $100", label: "Less than $100" },
                                                { value: "$100 - $499", label: "$100 - $499" },
                                                { value: "$1,000 - $4,999", label: "$1,000 - $4,999" },
                                                { value: "$5,000 or more", label: "$5,000 or more" },
                                                { value: "Unknown or New Business", label: "Unknown or New Business" },
                                            ]}
                                        />
                                    </div>

                                    <MyInput label="How can we help?" type="textarea" name="message" rows={4}
                                        placeholder="Your Message" required
                                    />

                                    <div className="space-y-1">
                                        <p className="text-base font-normal text-[#57647c]">
                                            Is this request related to a formal request for proposal (RFP)?
                                            <span className="text-[#ff0000] ml-1">*</span>
                                        </p>

                                        <div className="flex items-center gap-6 mt-1 text-sm text-[#57647c]">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="rfp_request" value="YES" className="h-4 w-4"
                                                    checked={values.rfp_request === "YES"}
                                                    onChange={() => {
                                                        setFieldValue("rfp_request", "YES");
                                                        setFieldTouched("rfp_request", true);
                                                    }}
                                                />
                                                <span>YES</span>
                                            </label>

                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="rfp_request" value="NO" className="h-4 w-4"
                                                    checked={values.rfp_request === "NO"}
                                                    onChange={() => {
                                                        setFieldValue("rfp_request", "NO");
                                                        setFieldTouched("rfp_request", true);
                                                    }}
                                                />
                                                <span>NO</span>
                                            </label>
                                        </div>

                                        {touched.rfp_request && errors.rfp_request &&
                                            <p className="mt-1 text-base text-[#ff0000]">{errors.rfp_request}</p>
                                        }
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-base font-normal text-[#57647c]">
                                            Receive email updates from Equipay?
                                            <span className="text-[#ff0000] ml-1">*</span>
                                        </p>

                                        <div className="flex items-center gap-6 mt-1 text-sm text-[#57647c]">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="email_updates" value="YES" className="h-4 w-4"
                                                    checked={values.email_updates === "YES"}
                                                    onChange={() => {
                                                        setFieldValue("email_updates", "YES");
                                                        setFieldTouched("email_updates", true);
                                                    }}
                                                />
                                                <span>YES</span>
                                            </label>

                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="email_updates" value="NO" className="h-4 w-4"
                                                    checked={values.email_updates === "NO"}
                                                    onChange={() => {
                                                        setFieldValue("email_updates", "NO");
                                                        setFieldTouched("email_updates", true);
                                                    }}
                                                />
                                                <span>NO</span>
                                            </label>
                                        </div>

                                        {touched.email_updates && errors.email_updates &&
                                            <p className="mt-1 text-base text-[#ff0000]">{errors.email_updates}</p>
                                        }
                                    </div>

                                    <p className="text-base xl:text-lg text-[#57647c] xl:pr-24 mt-1 leading-[1.7] font-light">
                                        * U.S. and Canadian accounts only. We are unable to work with businesses outside of N.
                                        America.
                                    </p>

                                    <div className="flex flex-col items-start gap-2">
                                        <div className="flex items-start gap-2">
                                            <input id="agree" type="checkbox" name="agree" checked={values.agree}
                                                onChange={handleChange} className="md:mt-1 h-5 w-5 border-[#d0d0e0] rounded 
                                                mt-1.5 text-[#ef793c] focus:ring-[#ef793c]"
                                            />

                                            <label htmlFor="agree" className="text-base text-[#57647c] leading-[1.8]">
                                                By checking this, you agree to our{" "}
                                                <Link rel="preload" href="/terms-conditions" target="_blank"
                                                    className="hover:underline cursor-pointer text-[#0887be]"
                                                >
                                                    Terms
                                                </Link>{" "}

                                                and{" "}

                                                <Link rel="preload" href="/privacy-policy" target="_blank"
                                                    className="hover:underline cursor-pointer text-[#0887be]"
                                                >
                                                    Privacy policy
                                                </Link>.
                                            </label>
                                        </div>

                                        {(touched.agree || submitCount > 0) && errors.agree &&
                                            <p className="mt-1 text-sm text-[#ff0000]">{errors.agree}</p>
                                        }
                                    </div>

                                    <div className="flex justify-center">
                                        <button type="submit" disabled={loading} className="cursor-pointer rounded-md px-8 py-3 
                                            linear-gradient text-sm sm:text-base font-semibold text-white"
                                        >
                                            {loading ? (
                                                <div className="flex items-center gap-2.5">
                                                    <svg className="w-7 h-7 animate-spin text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                                                        <path className="opacity-75" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M22 12a10 10 0 01-10 10" />
                                                    </svg>
                                                    <span className="text-white">Sending...</span>
                                                </div>
                                            ) : (
                                                "SUBMIT"
                                            )}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <aside className="bg-[#F8F9FE] rounded-[10px] shadow-[0_0px_10px_0px_#00000080] p-[22px]"
                            data-aos="fade-left"
                        >
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
                                        <p className="text-xl font-semibold text-[#212529] leading-[1.7]">Address</p>

                                        <Link rel="preload" href="goo.gl/maps/DpKG3a5PcjJtj2dr5" target="_blank"
                                            className="relative gap-2 leading-[1.8] text-[#e4e4e4] text-base font-light flex"
                                        >
                                            <span className="mt-1 sm:text-base text-[#57647c] sm:leading-[1.8] leading-[1.7]
                                                hover:underline hover:text-[#ef793c] text-sm font-light"
                                            >
                                                8549 Wilshire Blvd PMB 5108, Beverly Hills, CA 90211
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

                                        <Link rel="preload" href="mailto:help@equipay.co" target="_blank" className="relative
                                            gap-2 text-[#e4e4e4] leading-[1.8] text-base flex font-light"
                                        >
                                            <span className="mt-1 sm:text-base text-sm font-light text-[#57647c] leading-[1.7]
                                                sm:leading-[1.8] hover:underline hover:text-[#ef793c]"
                                            >
                                                help@equipay.co
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

                                        <Link rel="preload" href="tel:+1-866-232-4325" target="_blank" className="relative gap-2
                                            flex text-[#e4e4e4] text-base font-light leading-[1.8]"
                                        >
                                            <span className="mt-1 sm:text-base text-sm font-light text-[#57647c] leading-[1.7]
                                                sm:leading-[1.8] hover:underline hover:text-[#ef793c]"
                                            >
                                                (866) 232-4325
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="lg:px-24 sm:px-7 px-5 pt-5 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:gap-8 gap-6">
                        <div className="max-w-[600px] mx-auto text-center">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#4f565b]"
                            >
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
                                EquiPay is proud in showcasing the experiences of our clients from various segments of
                                the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default GetStarted