"use client";

import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import React, { Fragment, useRef, useState } from "react";
import MyInput from "@/components/MyInput";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";

const PHP_ENDPOINT = "/mail/contact_page_mail.php";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    hcaptcha: Yup.string().required("Please verify you are human"),
});

const Contact = () => {
    const captchaRef = useRef(null);
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (values, { resetForm }) => {
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch(PHP_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(values),
            });


            const raw = await response.text();
            console.log('raw: ', raw);
            let result = null;

            try {
                result = raw ? JSON.parse(raw) : null;
            } catch (e) {
                console.warn("Non-JSON response from PHP:", raw);
            }


            if (response.ok && result && result.status === "success") {
                setStatus("success");
                resetForm();
            } else {
                const msg =
                    (result && result.message) ||
                    raw ||
                    "Server submission failed.";
                setStatus(`error: ${msg}`);
            }
        } catch (error) {
            console.error("Form Submission Error:", error);
            setStatus("error: Network error or connection failed.");
        } finally {
            setIsSubmitting(false);
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
                            Unsure what you are looking for ? Fill out our general contact
                            form below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:gap-8 gap-6 lg:pt-20
                        pt-16 md:pb-14 pb-10"
                    >
                        <Formik validationSchema={validationSchema} onSubmit={handleSubmit}
                            initialValues={{
                                name: "", email: "", phone: "", subject: "",
                                message: "", discountCode: "", agree: false, hcaptcha: "",
                            }}
                        >
                            {({ errors, setFieldValue, touched, submitCount }) => (
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
                                        <input id="agree" type="checkbox" name="agree" className="md:mt-1 h-5 border-[#d0d0e0]
                                            rounded mt-1.5 w-5 text-[#ef793c] focus:ring-[#ef793c]"
                                            onChange={(e) =>
                                                setFieldValue("agree", e.target.checked)
                                            }
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
                                            </Link> .
                                        </label>
                                    </div>

                                    <div className="my-9 overflow-hidden">
                                        <ReCAPTCHA sitekey="6LdseS0sAAAAABdJfcMELRH7ZFUEbxc__aXLSyvJ"
                                            onChange={(token) => setFieldValue("hcaptcha", token || "")}
                                            ref={captchaRef} size="invisible"
                                        />

                                        {(touched.hcaptcha || submitCount > 0) &&
                                            <p className="mt-1 text-base text-[#ff0000]">{errors.hcaptcha}</p>
                                        }
                                    </div>

                                    {status === "success" && (
                                        <p className="text-center text-lg font-semibold text-green-600">
                                            ✅ Thank you! Your message has been sent.
                                        </p>
                                    )}

                                    {status && status.startsWith("error") && (
                                        <p className="text-center text-lg font-semibold text-red-600">
                                            ❌ Submission failed: {status.substring(7)}
                                        </p>
                                    )}

                                    <div className="flex justify-center">
                                        <button type="submit" disabled={isSubmitting} className="cursor-pointer rounded-md px-8
                                            py-3 linear-gradient text-sm sm:text-base font-semibold text-white"
                                        >
                                            {isSubmitting ? "SENDING..." : "SUBMIT"}
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

                                        <Link rel="preload" href="https://maps.app.goo.gl/MTk2MkDv7fHmqYH89" target="_blank"
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
                                        <p className="text-xl font-semibold text-[#212529] leading-[1.7]">
                                            Email
                                        </p>

                                        <Link rel="preload" href="mailto:help@equipay.co" target="_blank" className="relative 
                                            gap-2 text-[#e4e4e4] leading-[1.8] text-base font-light flex"
                                        >
                                            <span className="mt-1 sm:text-base text-sm font-light text-[#57647c] 
                                                sm:leading-[1.8] leading-[1.7] hover:underline hover:text-[#ef793c]"
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
                                        <p className="text-xl font-semibold text-[#212529] leading-[1.7]">
                                            Phone
                                        </p>

                                        <Link rel="preload" href="tel:+1-657-312-4925" target="_blank" className="relative gap-2
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
    );
};

export default Contact