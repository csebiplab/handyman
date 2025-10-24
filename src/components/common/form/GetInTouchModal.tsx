"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  Button,
} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import { mailSendHandler } from "../../../libs/mailSendHandler"; // ✅ import function

// ======= Types =======
interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
  communication: string;
  phone: number;
  address: string;
  message: string;
  timeframe: string;
}

interface FieldConfig {
  name: keyof FormValues;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
  validation: Record<string, any>;
}

// ======= Configurations =======
const fields: FieldConfig[] = [
  {
    name: "name",
    label: "Your Name *",
    type: "text",
    placeholder: "Enter your name",
    validation: { required: "Your name is required" },
  },
  {
    name: "email",
    label: "Email Address *",
    type: "email",
    placeholder: "Enter your email",
    validation: {
      required: "Your email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  {
    name: "communication",
    label: "Preferred Contact *",
    type: "select",
    options: ["Phone", "Email", "Text"],
    validation: { required: "Please select a contact method" },
  },
  {
    name: "phone",
    label: "Phone Number *",
    type: "text",
    placeholder: "e.g., +1**********",
    validation: { required: "Phone number is required" },
  },
  {
    name: "address",
    label: "Your Address *",
    type: "text",
    placeholder: "Enter your address",
    validation: { required: "Address is required" },
  },
  {
    name: "message",
    label: "Message *",
    type: "textarea",
    placeholder: "Message",
    validation: { required: "Message is required" },
  },
];

const timeframeOptions: string[] = [
  "As soon as possible",
  "1 to 4 days",
  "A week to a few weeks",
  "Just gathering information",
];

// ======= Component =======
const GetInTouchModal: React.FC<GetInTouchModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const renderField = (field: FieldConfig) => (
    <div key={field.name} className="w-full col-span-1">
      <label className="font-bold text-sm text-black block mb-1">
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <textarea
          placeholder={field.placeholder}
          {...register(field.name, field.validation)}
          className="bg-[#EEEEEE] w-full py-3 px-4 rounded-md h-32 resize-none"
        />
      ) : field.type === "select" ? (
        <select
          {...register(field.name, field.validation)}
          className="bg-[#EEEEEE] w-full py-3 px-4 rounded-md"
          defaultValue=""
        >
          <option value="" disabled>
            Select
          </option>
          {field.options?.map((opt, idx) => (
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
          className="bg-[#EEEEEE] w-full py-3 px-4 rounded-md"
        />
      )}

      {errors[field.name] && (
        <p className="text-sm text-red-500 mt-1">
          {errors[field.name]?.message as string}
        </p>
      )}
    </div>
  );

  // ======= Submit Handler =======
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      await mailSendHandler({
        data,
        reset,
        setIsLoading,
        toast,
        onClose,
      });
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      setIsLoading(false);
    }
  };

  // ======= Render =======
  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      size="lg"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
    >
      {/* Modal Box */}
      <div className="bg-white rounded-xl shadow-xl w-[90%] sm:w-[80%] lg:w-[65%] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="justify-end items-center px-8 pt-3">
          <ImCross className="w-5 h-5 cursor-pointer" onClick={onClose} />
        </DialogHeader>

        <DialogBody className="px-8 pb-8 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Row 1 → 2 fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.slice(0, 2).map(renderField)}
            </div>

            {/* Row 2 → 2 fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.slice(2, 4).map(renderField)}
            </div>

            {/* Remaining fields full width */}
            <div className="grid grid-cols-1 gap-4">
              {fields.slice(4).map(renderField)}
            </div>

            {/* Timeframe Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-bold text-sm">
              {timeframeOptions.map((option, idx) => (
                <label key={idx} className="flex text-black items-center">
                  <input
                    type="radio"
                    value={option}
                    {...register("timeframe", {
                      required: "Please select a timeframe",
                    })}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
            {errors.timeframe && (
              <p className="text-sm text-red-500">{errors.timeframe.message}</p>
            )}

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 font-bold text-white bg-[#BF8800] hover:bg-[#BF8800]"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </DialogBody>
      </div>
    </Dialog>
  );
};

export default GetInTouchModal;
