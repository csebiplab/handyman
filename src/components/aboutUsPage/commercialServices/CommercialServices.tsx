import GetAnEstimateButton from "@/components/common/form/GetAnEstimateButton";
import Image from "next/image";
import Link from "next/link";

export default function CommercialServices() {
  return (
    <section className="relative pt-16 text-center">
      {/* Content Container */}
      <div className=" px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Commercial Services: Support, Service, Solutions
        </h2>
        <svg
                width="160"
                height="8"
                viewBox="0 0 160 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2 mx-auto"
              >
                <path
                  d="M0 6C40 0 120 0 160 6"
                  stroke="#FACC15"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

        {/* Subtext */}
        <p className="text-gray-600 mb-8">
          We also specialize in servicing commercial properties such as chain
          restaurants, cafés, and other businesses. Our ongoing maintenance and
          repair services ensure that your commercial facility operates
          smoothly. We are open to building long-term partnerships with new
          clients, providing consistent and reliable support for ongoing service
          needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-10 mb-3">
          <Link
            href="tel:+16476834612"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium
               py-2.5 px-4 sm:py-3 sm:px-6
               text-sm sm:text-base
               rounded-md shadow transition duration-300 text-center"
          >
            CALL US TODAY
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
