"use client";

import React, { useState } from "react";
import {
  Dialog as MTDialog,
  DialogBody as MTDialogBody,
  DialogHeader as MTDialogHeader,
  Button as MTButton,
  type DialogProps as MTDialogProps,
  type DialogBodyProps as MTDialogBodyProps,
  type DialogHeaderProps as MTDialogHeaderProps,
  type ButtonProps as MTButtonProps,
} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import { mailSendHandler } from "../../../libs/mailSendHandler";

// --- Fix overly strict Material Tailwind types ---
type SafeDialogProps = Partial<MTDialogProps> &
  React.HTMLAttributes<HTMLDivElement>;
type SafeDialogBodyProps = Partial<MTDialogBodyProps> &
  React.HTMLAttributes<HTMLDivElement>;
type SafeDialogHeaderProps = Partial<MTDialogHeaderProps> &
  React.HTMLAttributes<HTMLDivElement>;
type SafeButtonProps = Partial<MTButtonProps> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

// --- Wrapper components to relax types safely ---
const Dialog: React.FC<SafeDialogProps> = (props) => {
  // @ts-expect-error Material Tailwind type conflict
  return <MTDialog {...props} />;
};

const DialogBody: React.FC<SafeDialogBodyProps> = (props) => {
  // @ts-expect-error Material Tailwind type conflict
  return <MTDialogBody {...props} />;
};

const DialogHeader: React.FC<SafeDialogHeaderProps> = (props) => {
  // @ts-expect-error Material Tailwind type conflict
  return <MTDialogHeader {...props} />;
};

const Button: React.FC<SafeButtonProps> = (props) => {
  // @ts-expect-error Material Tailwind type conflict
  return <MTButton {...props} />;
};

// --- Form data interface ---
interface FormInputs {
  name: string;
  email: string;
  message: string;
}

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- Component ---
const GetInTouchModal: React.FC<GetInTouchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true);
    try {
      await mailSendHandler({
        name: data.name,
        email: data.email,
        message: data.message,
      });
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
    <Dialog open={isOpen} handler={onClose} className="p-0">
      <DialogHeader className="flex items-center justify-between border-b border-gray-200 p-4">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="text-gray-600 hover:text-gray-900"
        >
          <ImCross size={16} />
        </button>
      </DialogHeader>

      <DialogBody className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              placeholder="Enter your message"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            className="mt-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default GetInTouchModal;
