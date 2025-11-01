"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import { mailSendHandler } from "@/libs/mailSendHandler";

const fields = [
  {
    name: "name",
    label: "Your Name *",
    type: "text",
    placeholder: "Enter Your Name",
    validation: { required: "Your name is required" },
  },
  {
    name: "email",
    label: "Email Address *",
    type: "email",
    placeholder: "Enter Address",
    validation: {
      required: "Your email is required",
      pattern: {
        value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  {
    name: "communication",
    label: "Preferred method of communication*",
    type: "select",
    options: ["Phone", "Email", "Text"],
    validation: { required: "Please select a contact method" },
  },
  {
    name: "phone",
    label: "Enter your phone number *",
    type: "text",
    placeholder: "Ex:- +1**********",
    validation: { required: "Phone number is required" },
  },
  {
    name: "address",
    label: "Your address*",
    type: "text",
    placeholder: "Enter Your address",
    validation: { required: "Address is required" },
  },
  {
    name: "message",
    label: "Your demands and expectations",
    type: "textarea",
    placeholder: "About Your Project",
    validation: { required: "Message is required" },
  },
];

const timeframeOptions = [
  "As soon as possible",
  "1 to 4 days",
  "A week to a few weeks",
  "Just gathering information",
];

const GetInTouchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    mailSendHandler({ data, reset, setIsLoading, toast, onClose });
  };

  const renderField = (field: any) => (
    <div key={field.name} className="w-full col-span-1">
      <label className="font-bold text-[15px] text-black block mb-2">
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <textarea
          placeholder={field.placeholder}
          {...register(field.name, field.validation)}
          className="bg-[#F2F2F2] w-full py-3 px-4 rounded-md text-sm text-gray-800 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#BF8800]"
        />
      ) : field.type === "select" ? (
        <select
          {...register(field.name, field.validation)}
          className="bg-[#F2F2F2] w-full py-3 px-4 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#BF8800]"
          defaultValue=""
        >
          <option value="" disabled>
            Select
          </option>
          {field.options.map((opt: string, idx: number) => (
            <option key={idx} value={opt.toLowerCase()}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          placeholder={field.placeholder}
          {...register(field.name, field.validation)}
          className="bg-[#F2F2F2] w-full py-3 px-4 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#BF8800]"
        />
      )}

      {errors[field.name] && (
        <p className="text-sm text-red-500 mt-1">
          {errors[field.name]?.message as string}
        </p>
      )}
    </div>
  );

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="relative bg-white rounded-[30px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] 2xl:w-[60%]
            max-w-5xl max-h-[90vh] mx-4 shadow-2xl animate-fadeIn overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-black hover:text-gray-600"
        >
          <ImCross className="w-5 h-5" />
        </button>

        {/* Form content */}
        <div className="px-8 pb-10 pt-14 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {fields.slice(0, 2).map(renderField)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {fields.slice(2, 4).map(renderField)}
            </div>
            <div className="grid grid-cols-1 gap-6">
              {fields.slice(4).map(renderField)}
            </div>

            {/* Timeframe radio */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-semibold text-[15px] text-black">
              {timeframeOptions.map((option, idx) => (
                <label key={idx} className="flex items-center">
                  <input
                    type="radio"
                    value={option}
                    {...register("timeframe", {
                      required: "Please select a timeframe",
                    })}
                    className="mr-2 accent-[#BF8800]"
                  />
                  {option}
                </label>
              ))}
            </div>
            {errors.timeframe && (
              <p className="text-sm text-red-500">
                {errors.timeframe.message as string}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 font-bold text-black bg-[#F2C100] hover:bg-[#E0AF00] rounded-md text-lg normal-case"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // ✅ Render modal through portal
  if (typeof window === "undefined") return null;
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default GetInTouchModal;
