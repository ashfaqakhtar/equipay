"use client";

import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from "yup";
import { Fragment, useState } from 'react'
import BannerSection from '@/components/BannerSection'
import MyInput from '@/components/MyInput';
import Link from 'next/link';
import Head from 'next/head';

const steps = [
    { id: 0, title: "Get Started" },
    { id: 1, title: "Business Information" },
    { id: 2, title: "Contact Information" },
    { id: 3, title: "Business Details" },
    { id: 4, title: "Declaration" },
];

const getValidationSchema = (step) => {
    switch (step) {
        case 0:
            return Yup.object({
                name: Yup.string().required("Name is required"),
                business_name: Yup.string().required("Business Name is required"),
                phone: Yup.string().min(10, "Min 10 Digits is required").required("Phone is required"),
            });
        case 1:
            return Yup.object({
                number_of_employee: Yup.string().required("Number of employees is required"),
                gross_turnover: Yup.string().required("Gross turnover is required"),
                industry_type: Yup.string().required("Industry type is required"),
            });
        case 2:
            return Yup.object({
                email: Yup.string().email("Invalid Email").required("Email is required"),
                company_email: Yup.string().email("Invalid Email").required("Business Email is required"),
                company_phone: Yup.string().min(10, "Min 10 digits").required("Business Phone Number is required"),
            });
        case 3:
            return Yup.object({
                address: Yup.string().required("Address is required"),
            });
        case 4:
            return Yup.object({
                agree: Yup.boolean().oneOf([true], "Please agree to the Terms & Conditions before submitting."),
            });
        default:
            return Yup.object({});
    }
};

const ApplyNowOld = () => {
    const [step, setStep] = useState(0);
    const isLastStep = step === steps.length - 1;

    const handleSubmit = async (values, actions) => {
        console.log("FORM DATA:", values);

        actions.resetForm();
        setStep(0)
    };

    const handleStepSubmit = async (values, actions) => {
        if (isLastStep) {
            await handleSubmit(values, actions);
        } else {
            setStep((prev) => prev + 1);
            actions.setTouched({});
        }
    }

    // const progressPercent = (step / (steps.length - 1)) * 100;
    // const progressPercent = (step / (steps.length - 1)) * 90;
    const progressRatio = steps.length > 1 ? step / (steps.length - 1) : 0

    return (
        <Fragment>
            <Head>
                <title>Apply For a New Merchant Account – EquiPay</title>
            </Head>

            <BannerSection title="Apply For a New Merchant Account" sub_title="Accept payments seamlessly with EquiPay's 
                proprietary system and Power-up your business like never before"
            />

            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <div className='xl:max-w-5xl mx-auto'>
                        <div className="relative">
                            <div className="absolute md:top-1/3 top-1/2 sm:left-[35px] left-7 sm:right-[35px] 
                                right-7 h-0.5 bg-[#d3d3d3]"
                            />

                            {/* <div className="absolute md:top-1/3 top-1/2 sm:left-[35px] left-7 h-[2.5px] bg-[#ef793c]"
                                style={{ width: `${progressPercent}%` }}
                            /> */}

                            <div className="absolute md:top-1/3 top-1/2 sm:left-[35px] left-7 sm:right-[35px] right-7 
                                h-0.5 overflow-hidden"
                            >
                                <div className="h-full bg-[#ef793c] origin-left"
                                    style={{ transform: `scaleX(${progressRatio})` }}
                                />
                            </div>

                            <div className="flex justify-between relative z-10">
                                {steps.map((item, index) => {
                                    const isActive = index === step;
                                    const isCompleted = index < step;

                                    return (
                                        <div key={index} className="flex flex-col items-center">
                                            <div className={`sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] rounded-full flex
                                                shadow-[0_0_12px_1px_#0000002e] text-[18px] leading-[45px] justify-center 
                                                items-center p-0.5 ${isActive || isCompleted ? "bg-[#ee793c] text-white" :
                                                    "bg-white text-[#d5d9de]"}`}
                                            >
                                                {index}
                                            </div>

                                            <div className="md:block hidden">
                                                <div className="ml-2.5 text-center text-[14px] lg:text-base text-[#212529] 
                                                    font-semibold leading-[1.8] w-max mt-2"
                                                >
                                                    {item?.title}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden text-center py-10">
                        <p className="text-4xl font-bold text-[#707070]">
                            {steps[step].title}
                        </p>
                    </div>

                    <div className='hidden md:block md:pt-14' />

                    <Formik validationSchema={getValidationSchema(step)} onSubmit={handleStepSubmit}
                        initialValues={{
                            name: "", business_name: "", phone: "", number_of_employee: "", gross_turnover: "",
                            industry_type: "", email: "", company_email: '', company_phone: '',
                            address: "", agree: false,
                        }}
                    >
                        {({ isSubmitting, values, setFieldValue, errors, touched }) => (
                            <Form className="md:rounded-3xl rounded-xl p-7 md:p-12 shadow-[1px_1px_12px_0px_#0000002e]">
                                {step === 0 && (
                                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                        <MyInput label="Your Name" type="normal_input" placeholder="Your Name"
                                            inputClassName={'h-[46px] mt-1'} name="name" required
                                        />

                                        <MyInput label="Business Name" name="business_name" type="normal_input"
                                            placeholder="Business Name" inputClassName={'h-[46px] mt-1'} required
                                        />

                                        <MyInput label="Phone" name="phone" type="normal_phone" placeholder="Phone"
                                            inputClassName={'h-[46px] mt-1'} required
                                        />
                                    </div>
                                )}

                                {step === 1 && (
                                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                        <MyInput label="Number of Employees" name="number_of_employee" type="normal_phone"
                                            placeholder="Number of employees" inputClassName={'h-[46px] mt-1'} required

                                        />

                                        <MyInput label="Gross Turnover ($)" name="gross_turnover" type="normal_input"
                                            placeholder="Gross Turnover" inputClassName={'h-[46px] mt-1'} required
                                        />

                                        <MyInput label="Industry Type" name="industry_type" type="normal_input"
                                            placeholder="Industry Type" inputClassName={'h-[46px] mt-1'} required
                                        />
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                        <MyInput label="Email" name="email" type="normal_input"
                                            placeholder="Email" inputClassName={'h-[46px] mt-1'} required
                                        />

                                        <MyInput label="Business Email" name="company_email" type="normal_input"
                                            placeholder="Business Email" inputClassName={'h-[46px] mt-1'} required
                                        />

                                        <MyInput label="Business Phone Number" name="company_phone" type="normal_phone"
                                            placeholder="Business Phone Number" inputClassName={'h-[46px] mt-1'} required
                                        />
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="grid gap-6 grid-cols-1">
                                        <MyInput label="Address" name="address" type="normal_textarea"
                                            placeholder="Address" required rows={4} inputClassName={'mt-1'}
                                        />
                                    </div>
                                )}

                                {step === 4 && (
                                    <div className="space-y-4">
                                        <p className="text-[15px] sm:text-base xl:text-lg text-[#57647c] font-light 
                                            leading-[1.7] max-w-4xl"
                                        >
                                            I hereby declare that the information provided is true and correct to the best of
                                            my knowledge and belief. I authorize the company to verify the details submitted
                                            in this application.
                                        </p>

                                        <div className="flex items-start gap-2">
                                            <input id="agree" type="checkbox" name="agree" checked={values.agree}
                                                className="md:mt-1 h-5 w-5 border-[#d0d0e0]
                                                rounded mt-1.5 text-[#ef793c] focus:ring-[#ef793c]"
                                                onChange={(e) =>
                                                    setFieldValue("agree", e.target.checked)
                                                }
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

                                                {touched.agree && errors.agree && (
                                                    <ErrorMessage component="div" name="agree"
                                                        className="mt-1 text-base text-[#ff0000]"
                                                    />
                                                )}
                                            </label>

                                        </div>
                                    </div>
                                )}

                                <div className="pt-7 md:pt-12 flex justify-center gap-4">
                                    <div className={`grid md:gap-5 gap-3 ${step > 0 && !isLastStep ?
                                        'sm:grid-cols-2' : 'sm:grid-cols-1'}`}
                                    >
                                        {step > 0 && !isLastStep && (
                                            <button type="button" onClick={() => setStep((s) => s - 1)} className="px-8 
                                                cursor-pointer rounded-md bg-gray-200 text-sm sm:text-base text-black
                                                font-semibold py-2.5"
                                            >
                                                Back
                                            </button>
                                        )}

                                        <button type="submit" disabled={isSubmitting} className="cursor-pointer rounded-md 
                                            px-8 py-2.5 linear-gradient text-sm sm:text-base font-semibold text-white"
                                        >
                                            {isLastStep ? "Submit" : "Next Step"}
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </Fragment>
    )
}

export default ApplyNowOld