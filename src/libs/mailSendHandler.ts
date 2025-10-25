import { toast } from "react-toastify";

// Define the form data interface
// interface FormData {
//   name: string;
//   email: string;
//   communication: string;
//   phone: string;
//   address: string;
//   message: string;
//   timeframe: string;
// }

// Define the function parameters interface
interface MailSendHandlerParams {
  data: any;
  reset: () => void;
  setIsLoading: (loading: boolean) => void;
  toast: {
    error: (message: string) => void;
    success: (message: string) => void;
  };
  onClose?: () => void;
}

export const mailSendHandler = async ({
  data,
  reset,
  setIsLoading,
  toast,
  onClose,
}: any): Promise<void> => {
  const emailTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p><strong>Name:</strong> ${data?.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${data?.email}">${data?.email}</a></p>
      <p><strong>Communication:</strong> ${data?.communication}</p>
      <p><strong>Phone:</strong> ${data?.phone}</p>
      <p><strong>Address:</strong> ${data?.address}</p>
      <p><strong>Message:</strong> ${data?.message}</p>
      <p><strong>TimeFrame:</strong> ${data?.timeframe}</p>
    </div>
  `;

  // console.log("Email Template:", emailTemplate, data); // Debugging line

  const payload = {
    projectFor:
      process.env.NODE_ENV === "production"
        ? "bayzidweb04@gmail.com"
        : "bayzidweb04@gmail.com",
    brand: "Easy Pools",
    name: data?.name,
    email: data?.email,
    message: emailTemplate,
  };

  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/send-email`;

  try {
    setIsLoading(true);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok) {
      toast.error("Failed to send! Please try again.");
      return;
    }

    toast.success("Successfully sent!");
    reset();
    if (onClose && typeof onClose === "function") {
      onClose();
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Failed to send! Please try again.");
  } finally {
    setIsLoading(false);
  }
};
