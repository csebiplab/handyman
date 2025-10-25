import GetAnEstimateButton from "@/components/common/form/GetAnEstimateButton";
import Image from "next/image";
import Link from "next/link";

export default function ReadyToWorkSection() {
  return (
    <section className="relative bg-gray-100 pt-16 text-center">
      {/* Content Container */}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Ready to work together?
        </h2>
        <svg
          viewBox="0 0 200 40"
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-6 mx-auto mb-4"
        >
          <path
            d="M0 30 Q100 10 200 30"
            stroke="#FACC15"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Subtext */}
        <p className="text-gray-600 mb-8">
          We would be happy to hear from you if you have a project in mind and
          are seeking a reliable construction partner for the project.
        </p>

        {/* Buttons */}
        <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-10 mb-3">
           <Link
  href="tel:+16476834612"
  className="relative font-semibold text-sm px-8 py-2 text-white uppercase tracking-wide transition-all duration-500 group overflow-hidden flex items-center justify-center"
  style={{
    backgroundColor: "#DDBE00",
    clipPath:
      "polygon(4% 0, 96% 0, 100% 30%, 100% 70%, 96% 100%, 4% 100%, 0% 70%, 0% 30%)",
  }}
>
  {/* Button Text + Arrow */}
  <span
    className="relative z-10 flex items-center justify-center gap-2 text-white transition-all duration-500"
  >
    <span>CALL US TODAY</span>

    {/* Arrow appears only on hover */}
    <span className="inline-block opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
      →
    </span>
  </span>

  {/* Black fade background on hover */}
  <span
    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-700"
    style={{
      clipPath:
        "polygon(4% 0, 96% 0, 100% 30%, 100% 70%, 96% 100%, 4% 100%, 0% 70%, 0% 30%)",
    }}
  ></span>
</Link>
          <div>
            <GetAnEstimateButton />
          </div>
        </div>

        {/* Skyline Image - As normal image */}
        <div className="mx-auto max-w-4xl">
          <Image
            src="/assets/handymanHomePage/readyToWorkImage.png"
            alt="Toronto skyline silhouette"
            width={640}
            height={220}
            className="w-full h-auto mx-auto"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
