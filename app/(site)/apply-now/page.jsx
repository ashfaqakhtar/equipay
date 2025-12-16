
"use client";

import Head from 'next/head';
import Link from 'next/link';
import * as Yup from "yup";
import { Fragment, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import BannerSection from '@/components/BannerSection';
import MyInput from '@/components/MyInput';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import toast from 'react-hot-toast';

const PHP_ENDPOINT = "/mail/apply_now_mail.php";

const validationSchema = Yup.object({
    full_name: Yup.string().required("Full Name is required"),
    business_name: Yup.string().required("Business Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    agree: Yup.boolean().oneOf([true], "You must accept Terms and Privacy policy"),
    hcaptcha: Yup.string().required("Please verify you are human"),
});

const ApplyNow = () => {
    const [loading, setLoading] = useState(false);
    const captchaRef = useRef(null);

    const handleSubmit = async (values, { resetForm, setFieldValue }) => {
        setLoading(true);

        const payload = {
            full_name: values.full_name,
            business_name: values.business_name,
            email: values.email,
            phone: values.phone,
            address: values.address,
            agree: values.agree ? true : false,
            hcaptcha: values.hcaptcha || "",
        };

        try {
            const res = await fetch(PHP_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const raw = await res.text();
            console.debug("ApplyNow raw response:", raw);

            let result = null;
            try {
                result = raw ? JSON.parse(raw) : null;
            } catch (e) {
                console.warn("Non-JSON response from PHP:", raw);
            }

            if (res.ok && result && result.status === "success") {
                toast.success("Mail Sent Successfully");
                resetForm();
                setFieldValue("hcaptcha", "");
                if (captchaRef.current) captchaRef.current.resetCaptcha();
            } else {
                const msg =
                    (result && result.message) ||
                    raw ||
                    "Server submission failed.";
                toast.error(msg);
            }
        } catch (err) {
            console.error("Apply Form Error:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <Head>
                <title>Apply For a New Merchant Account – EquiPay</title>
            </Head>

            <BannerSection title="Apply For a New Merchant Account" sub_title="Accept payments seamlessly with EquiPay's 
                proprietary system and Power-up your business like never before"
            />

            <section className="md:pt-12 py-12 lg:px-24 sm:px-7 px-5 lg:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:gap-8 gap-6 xl:max-w-5xl mx-auto">
                        <Formik validationSchema={validationSchema} onSubmit={handleSubmit}
                            initialValues={{
                                full_name: "", business_name: "", email: "", phone: "",
                                address: "", agree: false, hcaptcha: "",
                            }}
                        >
                            {({ setFieldValue, touched, errors, submitCount, handleChange, values }) => (
                                <Form className="bg-[#F8F9FE] rounded-[10px] shadow-[0_0px_10px_0px_#00000080] lg:px-[22px] 
                                    px-4.5 lg:py-[52px] py-11 space-y-5"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Full Name" name="full_name" placeholder="Full Name" required />
                                        <MyInput label="Business Name" name="business_name" placeholder="Business Name" required />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <MyInput label="Email" name="email" placeholder="Email" required />
                                        <MyInput label="Phone" name="phone" type="phone" placeholder="Phone" required />
                                    </div>

                                    <MyInput label="Address" name="address" type="textarea" placeholder="Address"
                                        required rows={4}
                                    />

                                    <div className="flex flex-col items-start gap-2">
                                        <div className="flex items-start gap-2">
                                            <input id="agree" type="checkbox" name="agree" checked={values.agree}
                                                onChange={handleChange} className="md:mt-1 h-5 w-5 border-[#d0d0e0] rounded 
                                                mt-1.5 text-[#ef793c] focus:ring-[#ef793c]"
                                            />

                                            <label htmlFor="agree" className='text-base text-[#57647c] leading-[1.8]'>
                                                By checking this, you agree to our{" "}
                                                <Link rel="preload" href='/terms-conditions' target="_blank"
                                                    className="hover:underline cursor-pointer text-[#0887be]"
                                                >
                                                    Terms
                                                </Link>{" "}

                                                and{" "}

                                                <Link rel="preload" href='/privacy-policy' target="_blank"
                                                    className="hover:underline cursor-pointer text-[#0887be]"
                                                >
                                                    Privacy policy
                                                </Link>.
                                            </label>
                                        </div>

                                        {(touched.agree || submitCount > 0) && errors.agree && (
                                            <p className="mt-1 text-sm text-[#ff0000]">
                                                {errors.agree}
                                            </p>
                                        )}
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
                                        <button type="submit" disabled={loading} className="cursor-pointer rounded-md px-8 py-3
                                            linear-gradient text-sm sm:text-base font-semibold text-white"
                                        >
                                            {loading ? (
                                                <div className="flex items-center gap-2.5">
                                                    <svg className="w-7 h-7 animate-spin text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
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
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ApplyNow