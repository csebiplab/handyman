"use client";

import React, { useState } from "react";
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4">
        <div
          className="
            relative bg-white rounded-lg shadow-2xl 
            w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] 2xl:w-[60%]
            max-w-5xl max-h-[90vh] overflow-y-auto animate-fadeIn
          "
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-5 w-10 h-10 flex items-center justify-center 
                       text-black hover:text-gray-700 transition z-50"
          >
            <ImCross size={20} />
          </button>

          {/* Form Content */}
          <div className="px-6 pb-6 pt-14">
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
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm
                    placeholder:text-black focus:border-gray-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm
                    placeholder:text-black focus:border-gray-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm
                    text-gray-800 placeholder:text-black focus:border-gray-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm
                    placeholder:text-black focus:border-gray-500 focus:outline-none"
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
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm
                  placeholder:text-black focus:border-gray-500 focus:outline-none"
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
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm 
                  placeholder:text-black focus:border-gray-500 focus:outline-none"
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
              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-[#b8860b] text-white text-sm py-2.5 rounded-md 
                           hover:bg-[#a0740a] transition-colors disabled:opacity-50"
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchModal;
