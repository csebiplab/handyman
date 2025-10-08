"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { mailSendHandler } from "../../libs/mailSendHandler";
import { toast } from "react-toastify";

// Define form data interface
interface FormData {
  name: string;
  email: string;
  communication: string;
  phone: string;
  address?: string;
  message?: string;
  timeframe: string;
}

// Define field configuration interface
interface FormField {
  name: keyof FormData;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "radio";
  placeholder?: string;
  required: boolean;
  options?: string[];
}

// Centralized form fields config with proper typing
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
      options: ["phone", "email", "text"],
      required: true,
    },
  ],
  row2: [
    {
      name: "phone",
      label: "Enter your phone number",
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
        <label className="block mb-1 font-medium">
          {field.label}
          {field.required && <span className="text-red-500"> *</span>}
        </label>

        {field.type === "text" ||
        field.type === "email" ||
        field.type === "tel" ? (
          <input
            type={field.type}
            {...register(field.name, { required: field.required })}
            placeholder={field.placeholder}
            className="w-full border border-gray-300 rounded-md px-3 py-2
            bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        ) : field.type === "textarea" ? (
          <textarea
            {...register(field.name, { required: field.required })}
            placeholder={field.placeholder}
            className="w-full border border-gray-300 rounded-md px-3 py-2 h-24
            bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        ) : field.type === "select" ? (
          <select
            defaultValue=""
            {...register(field.name, { required: field.required })}
            className="w-full border border-gray-300 rounded-md px-3 py-2
            bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="" disabled>
              Select
            </option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : field.type === "radio" ? (
          <div className="flex flex-wrap gap-4">
            {field.options?.map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={opt}
                  {...register(field.name, { required: field.required })}
                  className="text-yellow-500"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        ) : null}

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
        {/* Row 1 (3 fields) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactFormFields.row1.map(renderField)}
        </div>

        {/* Row 2 (2 fields) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactFormFields.row2.map(renderField)}
        </div>

        {/* Row 3 (textarea) */}
        {contactFormFields.row3.map(renderField)}

        {/* Row 4 (radios) */}
        {contactFormFields.row4.map(renderField)}

        {/* Submit button */}
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
