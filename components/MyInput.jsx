"use client";

import { ErrorMessage, useField } from "formik";
import { useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";

const MyInput = ({
    label, name, type = "text", placeholder, required = false, rows = 4,
    options = [], inputClassName = 'h-[50px]', ...props
}) => {
    const [field, meta, helpers] = useField(name);
    const hasError = meta.touched && meta.error;
    const phoneRef = useRef();

    const renderField = () => {
        switch (type) {
            case "select":
                return (
                    <Select isMulti={false} options={options} placeholder={placeholder} isClearable
                        value={options.find((opt) => opt.value === field.value) || null}
                        onChange={(opt) => helpers.setValue(opt ? opt.value : "")}
                        classNames={{
                            control: (state) => `h-[38px]! w-full rounded-sm! border border-[#AAAAAA]! text-black 
                            text-[#0E314C]
                            ${state.isFocused ? "shadow-[0px_0px_10px_0px_#0887BE]!" : "border-[#AAAAAA]!"}`,
                            placeholder: () => "text-[#0E314C]",
                            input: () => "text-[#0E314C]",
                            singleValue: () => "text-black!",
                            menu: () => "bg-white text-black rounded-sm shadow-[0px_0px_10px_0px_#0887BE]! mt-1",
                            option: (state) => `px-3! py-1.5! cursor-pointer 
                            ${state.isFocused ? "focus:shadow-[0px_0px_10px_0px_#0887BE]" : ""} ${state.isSelected ? "" : ""}`,
                        }}
                    />
                );
            case "phone":
                return (
                    <PhoneInput country={"in"} value={field.value} onChange={(value) => helpers.setValue(value)}
                        onBlur={() => helpers.setTouched(true)} placeholder={placeholder}
                        dropdownClass="text-base" buttonClass="border-[#AAAAAA]!"
                        inputClass={`w-full! h-[38px]! rounded-sm! px-4 border border-[#AAAAAA] text-[#0E314C] 
                        focus:shadow-[0px_0px_10px_0px_#0887BE] outline-none border-transparent`}
                        // enableSearch={true}
                    />
                );
            case "normal_phone":
                return (
                    <input type="tel" name={field.name} value={field.value || ""} placeholder={placeholder}
                        ref={phoneRef} onBlur={field.onBlur}
                        onChange={(e) => {
                            const onlyDigits = e.target.value.replace(/\D/g, "");
                            helpers.setValue(onlyDigits);
                        }}
                        className={`w-full ${inputClassName} text-base rounded-md border text-[#495057] focus:border-[#ef793c]
                        px-4 shadow-[0px_5px_28.5px_1.5px_#9598c833] outline-none focus:ring-1 focus:ring-[#ef793c]
                        ${hasError ? "border-[#ff0000] border-2" : "border-transparent"}`}
                    />
                );
            case "textarea":
                return (
                    <textarea {...field} rows={rows} placeholder={placeholder} className={`w-full h-auto text-base py-3
                        rounded-sm px-4 border text-[#495057] outline-none focus:shadow-[0px_0px_10px_0px_#0887BE]
                        bg-white`}
                    />
                );
            case "normal_textarea":
                return (
                    <textarea {...field} rows={rows} placeholder={placeholder} className={`w-full h-auto text-base 
                        rounded-md py-3 px-4 border text-[#495057] shadow-[0px_5px_28.5px_1.5px_#9598c833]
                        outline-none focus:border-[#ef793c] focus:ring-1 focus:ring-[#ef793c] ${inputClassName}
                        ${hasError ? "border-[#ff0000] border-2" : "border-transparent"}`}
                    />
                );
            case "normal_input":
                return (
                    <input {...field} placeholder={placeholder} className={`w-full ${inputClassName} text-base rounded-md
                        px-4 border text-[#495057] shadow-[0px_5px_28.5px_1.5px_#9598c833]
                        outline-none focus:border-[#ef793c] focus:ring-1 focus:ring-[#ef793c]
                        ${hasError ? "border-[#ff0000] border-2" : "border-transparent"}`}
                    />
                );
            default:
                return (
                    <input {...field} placeholder={placeholder} className={`w-full h-[38px] text-base rounded-sm px-4 
                        border text-[#0E314C] outline-none border-[#AAAAAA] bg-white 
                        focus:shadow-[0px_0px_10px_0px_#0887BE]`}
                    />
                );
        }
    };

    return (
        <div className="w-full">
            {label && (
                <label className="text-base leading-[1.3] text-[#212529] mb-1 block">
                    {label}
                    {required && (
                        <span className="text-[#ff0000] ml-1 font-normal text-sm">*</span>
                    )}
                </label>
            )}

            {renderField()}

            <ErrorMessage component="div" name={name} className="mt-1 text-base text-[#ff0000]" />
        </div>
    );
};

export default MyInput