"use client";

import React, { useState } from "react";
import {
  Dialog as MTDialog,
  DialogBody as MTDialogBody,
  DialogHeader as MTDialogHeader,
  Button as MTButton,
} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import { mailSendHandler } from "../../../libs/mailSendHandler";

interface FormInputs {
  name: string;
  email: string;
  preferredContact: string;
  phone: string;
  address: string;
  message: string;
  timeframe: string;
}

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetInTouchModal: React.FC<GetInTouchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true);
    try {
      await mailSendHandler(data);
      toast.success("Message sent successfully!");
      reset();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MTDialog
      open={isOpen}
      handler={onClose}
      size="xxl"
      overlay={false} // removes dark background
      className="!bg-transparent fixed inset-0 flex items-center justify-center z-[9999]" // centers modal
    >
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-[75vw] max-w-6xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <MTDialogHeader className="flex items-center justify-between border-b border-gray-200 p-4 sticky top-0 bg-white z-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Get in Touch
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-600 hover:text-gray-900"
          >
            <ImCross size={16} />
          </button>
        </MTDialogHeader>

        {/* Body */}
        <MTDialogBody className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Your Name *
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm focus:border-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Email Address *
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm focus:border-gray-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 2: Preferred Contact & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Preferred Contact *
                </label>
                <select
                  {...register("preferredContact", { required: true })}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm focus:border-gray-500 focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="either">Either</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Phone Number *
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  placeholder="e.g., +1**********"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm focus:border-gray-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Your Address *
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Enter your address"
                className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm focus:border-gray-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Message *
              </label>
              <textarea
                {...register("message", { required: true })}
                rows={4}
                placeholder="Message"
                className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm focus:border-gray-500 focus:outline-none"
              />
            </div>

            {/* Radio Buttons */}
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-800">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="asap"
                  {...register("timeframe", { required: true })}
                />
                As soon as possible
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="1to4days"
                  {...register("timeframe", { required: true })}
                />
                1 to 4 days
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="week"
                  {...register("timeframe", { required: true })}
                />
                A week to a few weeks
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="info"
                  {...register("timeframe", { required: true })}
                />
                Just gathering information
              </label>
            </div>

            {/* Submit Button */}
            <MTButton
              type="submit"
              fullWidth
              disabled={loading}
              className="mt-4 bg-[#b8860b] text-white text-sm py-2.5 rounded-md hover:bg-[#a0740a] transition-colors"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </MTButton>
          </form>
        </MTDialogBody>
      </div>
    </MTDialog>
  );
};

export default GetInTouchModal;
