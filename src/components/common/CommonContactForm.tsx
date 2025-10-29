"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { mailSendHandler } from "../../libs/mailSendHandler";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  communication: string;
  phone: string;
  address?: string;
  message?: string;
  timeframe: string;
}

interface FormField {
  name: keyof FormData;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "radio";
  placeholder?: string;
  required: boolean;
  options?: string[];
}

const contactFormFields: {
  row1: FormField[];
  row2: FormField[];
  row3: FormField[];
  row4: FormField[];
} = {
  row1: [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Enter Your Name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter Email",
      required: true,
    },
    {
      name: "communication",
      label: "Preferred method of communication",
      type: "select",
      options: ["Phone", "Email", "Text"],
      required: true,
    },
  ],
  row2: [
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Ex - +1*********",
      required: true,
    },
    {
      name: "address",
      label: "Your Address",
      type: "text",
      placeholder: "Enter Your Address",
      required: false,
    },
  ],
  row3: [
    {
      name: "message",
      label: "Your demands and expectations",
      type: "textarea",
      placeholder: "About Your Project",
      required: false,
    },
  ],
  row4: [
    {
      name: "timeframe",
      label: "Timeline",
      type: "radio",
      options: [
        "As soon as possible",
        "1 to 4 days",
        "A week to a few weeks",
        "Just gathering information",
      ],
      required: true,
    },
  ],
};

export default function CommonContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: any) => {
    mailSendHandler({ data, reset, setIsLoading, toast });
  };

  const renderField = (field: FormField) => {
    return (
      <div key={field.name} className="w-full">
        <label className="block mb-1 font-medium text-gray-800">
          {field.label}
          {field.required && <span className="text-red-500"> *</span>}
        </label>

        {/* Input, Email, Tel */}
        {["text", "email", "tel"].includes(field.type) && (
          <input
            type={field.type}
            {...register(field.name, { required: field.required })}
            placeholder={field.placeholder}
            className="w-full border border-gray-300 rounded-md px-3 py-2
            bg-white text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        )}

        {/* Textarea */}
        {field.type === "textarea" && (
          <textarea
            {...register(field.name, { required: field.required })}
            placeholder={field.placeholder}
            className="w-full border border-gray-300 rounded-md px-3 py-2 h-24
            bg-white text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        )}

        {/* Select — fixed placeholder */}
        {field.type === "select" && (
          <select
            defaultValue=""
            {...register(field.name, { required: field.required })}
            className="w-full border border-gray-300 rounded-md px-3 py-2
            bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="" disabled className="text-gray-500">
              Select a communication method
            </option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}

        {/* Radio group */}
        {field.type === "radio" && (
          <div className="flex flex-wrap gap-4">
            {field.options?.map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={opt}
                  {...register(field.name, { required: field.required })}
                  className="text-yellow-500"
                />
                <span className="text-black">{opt}</span>
              </label>
            ))}
          </div>
        )}

        {/* Error message */}
        {errors[field.name] && (
          <span className="text-red-500 text-sm">
            {field.label} is required
          </span>
        )}
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactFormFields.row1.map(renderField)}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactFormFields.row2.map(renderField)}
        </div>

        {/* Row 3 */}
        {contactFormFields.row3.map(renderField)}

        {/* Row 4 */}
        {contactFormFields.row4.map(renderField)}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#DFBC00] text-white font-semibold py-3 rounded-md
              hover:bg-[#cda700] transition disabled:opacity-70"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
