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
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-10 mb-3">
          <Link
            href="tel:+16476834612"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-6 rounded-md shadow transition duration-300 text-center"
          >
            CALL US TODAY
          </Link>
          <Link
            href="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-6 rounded-md shadow transition duration-300 text-center"
          >
            GET AN ESTIMATE
          </Link>
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
