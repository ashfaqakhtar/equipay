"use client";

import Link from 'next/link'
import { Fragment, useState } from 'react'
import BannerSection from '@/components/BannerSection'
import Accordion from '@/components/Accordion'
import { FREQUENTLY_QUESTIONS } from '@/utils/staticData'
import { ECHECK_ITEMS, STILL_QUESTIONS } from '@/utils/staticData'
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import MyInput from '@/components/MyInput';
import Head from 'next/head';
import InfoSection from '@/components/InfoSection';
import toast from 'react-hot-toast';

const PHP_ENDPOINT = "/mail/echeck_mail.php";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    agree: Yup.bool().oneOf([true], "You must accept Terms and Privacy policy")
});

const EcheckSolutions = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);

        const payload = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            subject: values.subject,
            message: values.message,
            agree: values.agree ? true : false
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
            console.debug("eCheck raw response:", raw);

            let result = null;
            try {
                result = raw ? JSON.parse(raw) : null;
            } catch (err) {
                console.warn("Non-JSON response from PHP:", raw);
            }

            if (res.ok && result && result.status === "success") {
                resetForm();
                toast.success(result.message || "Email Sent Successfully");
            } else {
                const msg = (result && result.message) || raw || "Server submission failed.";
                toast.error(msg);
            }
        } catch (err) {
            console.error("eCheck Form Error:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <Head>
                <title>ACH & eCheck – EquiPay</title>
            </Head>

            <BannerSection title="ACH & eCheck" sub_title="Our proprietary technology is the best in the industry" />

            <section className="lg:px-24 sm:px-7 px-5 md:pt-7 pt-14 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
                        <InfoSection title="eCheck Solutions" image="/assets/illustration.webp" leftClass='lg:order-1 order-0'
                            description={`We bring our merchants a range of solutions suitable for all risk categories from 
                            traditional & low risk to emerging & high risk. We specialize in cutting edge high risk solutions 
                            even for international merchants. Electronic check and ACH processing provide customers with another
                            convenient way to pay. We offer an eCheck program that is a unique paperless checking solution that
                            allows customers to make payments for purchases via their bank account rather than with a 
                            credit card.`}
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
                        <InfoSection title='Artboard' image="/assets/artboard.webp" showBar={false} showAccordion={true}
                            showAccordionData={<Accordion items={ECHECK_ITEMS} isFirstOpen={true} />} />
                    </div>
                </div>
            </section>

            <div className="relative linear-background md:py-[110px] py-14">
                <div className="absolute inset-0 bg-no-repeat bg-center bg-size-[200%] md:opacity-35 opacity-20"
                    style={{ backgroundImage: "url('/assets/bg_lines.svg')" }}
                />

                <div className="lg:px-24 sm:px-7 px-5">
                    <div className="relative z-10 container mx-auto flex md:flex-row flex-col items-center justify-between">
                        <div data-aos="fade-right">
                            <h2 className="md:text-start text-center lg:text-[40px] sm:text-[34px] text-2xl text-white 
                                leading-[1.2] font-semibold"
                            >
                                Start Your Application Now
                            </h2>

                            <p className="md:text-start text-center md:text-lg text-base text-white mt-2.5 font-light">
                                Get your EquiPay account today!
                            </p>
                        </div>

                        <Link rel="preload" href='/get-started' className="border border-[#ef793c] rounded-md text-base py-3 
                            px-6 font-medium cursor-pointer inline-block md:my-0 mt-5 text-white uppercase 
                            bg-linear-to-r from-[#ef793c] to-[#ff6a00]" data-aos="fade-left"
                        >
                            Get Your EquiPay Account
                        </Link>
                    </div>
                </div>
            </div>

            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-14 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
                        <InfoSection title='Frequently asked questions' image="/assets/faq.webp"
                            accordionClass={'lg:block hidden'} showAccordion={true} showImage={false} contentImage={true}
                            showAccordionData={<Accordion items={FREQUENTLY_QUESTIONS} isFirstOpen={true} />}
                            aosAccordion={'fade-left'} description={`Our team has put together the most commonly asked 
                                questions easy for you to refer. For any more clarifications kindly contact us.`}
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-6 lg:gap-10 md:pt-20 pt-14 lg:pb-0 pb-10">
                        <div className="col-span-12 lg:col-span-6" data-aos="zoom-in">
                            <h2 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.2] 
                                font-semibold text-[#212529]"
                            >
                                Still have questions?
                            </h2>

                            <div className="mt-4 mb-5 flex md:justify-start justify-center ">
                                <div className="relative w-[90px] h-1.5 bg-[#ef793c40] rounded-full">
                                    <div className="absolute left-0 -top-[2.6px] bg-[#ef793c] rounded-full 
                                        animate-[MOVE-BG_3s_linear_infinite] w-[11px] h-[11px]"
                                    />
                                </div>
                            </div>

                            <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light leading-[1.7]">
                                Get in touch with our merchant experts for all your needs, Equipay strives to deliver friendly
                                reliable customer service.
                            </p>

                            <Formik validationSchema={validationSchema} onSubmit={handleSubmit}
                                initialValues={{ name: "", email: "", phone: "", subject: "", message: "", agree: false }}>
                                {(formik) => (
                                    <Form className="space-y-4 pt-14">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <MyInput type="normal_input" name="name" placeholder="Name" />
                                            <MyInput type="normal_input" name="email" placeholder="Email" />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <MyInput type="normal_phone" name="phone" placeholder="Phone" />
                                            <MyInput type="normal_input" name="subject" placeholder="Subject" />
                                        </div>

                                        <MyInput type="normal_textarea" name="message" rows={4} placeholder="Your Message" />

                                        <div className="flex items-start gap-2 text-sm text-[#57647c]">
                                            <input id="agree" type="checkbox" name="agree" checked={formik.values.agree}
                                                onChange={formik.handleChange} className="md:mt-1 mt-1.5 border-[#d0d0e0] 
                                                text-[#ef793c] focus:ring-[#ef793c] rounded  h-5 w-5"
                                            />

                                            <label htmlFor="agree" className='text-base text-[#57647c] leading-[1.8]'>
                                                By checking this, you agree to our {" "}
                                                <Link rel="preload" href='/terms-conditions' target="_blank"
                                                    className="hover:underline cursor-pointer text-[#ef793c]"
                                                >
                                                    Terms
                                                </Link>

                                                {" "}and{" "}

                                                <Link rel="preload" href='/privacy-policy' target="_blank"
                                                    className="hover:underline cursor-pointer text-[#ef793c]"
                                                >
                                                    Privacy policy
                                                </Link>.
                                            </label>
                                        </div>

                                        <div className="pt-4 pb-3 flex justify-center">
                                            <button type="submit" disabled={loading} className="cursor-pointer rounded-md px-8 
                                                py-3 linear-gradient text-sm sm:text-base font-semibold text-white"
                                            >
                                                {loading ? (
                                                    <div className="flex items-center gap-2.5">
                                                        <svg className="w-7 h-7 animate-spin text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                                                            <path className="opacity-75" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M22 12a10 10 0 01-10 10" />
                                                        </svg>
                                                        <span className="text-white">Sending...</span>
                                                    </div>
                                                ) : "SEND MESSAGE"}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>

                        <div className="col-span-12 lg:col-span-6 lg:space-y-4.5 space-y-3.5 lg:block hidden"
                            data-aos="fade-left"
                        >
                            <Accordion items={STILL_QUESTIONS} isFirstOpen={true} />
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6 lg:space-y-4.5 space-y-3.5 lg:hidden block" data-aos="zoom-in-up">
                        <Accordion items={FREQUENTLY_QUESTIONS} isFirstOpen={true} />
                    </div>

                    <div className="col-span-12 lg:col-span-6 lg:space-y-4.5 space-y-3.5 lg:hidden block pt-10"
                        data-aos="zoom-in-up"
                    >
                        <Accordion items={STILL_QUESTIONS} isFirstOpen={true} />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default EcheckSolutions