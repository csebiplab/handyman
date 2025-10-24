"use client";

import Image from "next/image";

const services = [
  {
    icon: "/assets/icons/carpentry1.png",
    title: "Carpentry & Woodwork",
    desc: "Custom decks, fences, pergolas, gazebos, stairs, railings, and framing.",
  },
  {
    icon: "/assets/icons/carpentry2.png",
    title: "Drywall & Finishing",
    desc: "Installation, taping, mudding, sanding, priming, and painting.",
  },
  {
    icon: "/assets/icons/flooring.png",
    title: "Flooring",
    desc: "Vinyl, laminate, engineered hardwood, and tile installation.",
  },
  {
    icon: "/assets/icons/painting.png",
    title: "Painting",
    desc: "Interior and exterior painting, trims, baseboards, doors, and window frames.",
  },
  {
    icon: "/assets/icons/plumbing.png",
    title: "Plumbing",
    desc: "Fixture installations (sinks, faucets, showers), pipe repairs, drain work.",
  },
  {
    icon: "/assets/icons/electrical.png",
    title: "Electrical (Minor Work)",
    desc: "Light fixtures, outlets, switches (within a non-licensed scope).",
  },
  {
    icon: "/assets/icons/full-renovation.png",
    title: "Full Renovation",
    desc: "Complete home and condo renovations, basement finishing.",
  },
  {
    icon: "/assets/icons/exterior.png",
    title: "Exterior Works",
    desc: "Docks, retaining walls, siding, and exterior trims.",
  },
  {
    icon: "/assets/icons/welding.png",
    title: "Welding Works",
    desc: "Custom steel and aluminum fabrication and repairs.",
  },
  {
    icon: "/assets/icons/lathe.png",
    title: "Lathe & Machining",
    desc: "Custom parts, fittings, and precision metalwork.",
  },
  {
    icon: "/assets/icons/repair.png",
    title: "Repairs & Maintenance",
    desc: "Doors, windows, caulking, and small handyman tasks.",
  },
  {
    icon: "/assets/icons/custom.png",
    title: "Custom Projects",
    desc: "Accent walls, shelving, furniture assembly, and more.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services:{" "}
            <span className="text-black relative inline-block">
              Design, Build, Renovate
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
            </span>
          </h2>
          <p className="text-gray-600 mt-4">
            We offer a broad range of services to meet all your home and business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between h-full p-5 hover:shadow-md transition-all duration-300"
            >
              <div>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="object-contain mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
              {/* Bottom spacer for consistent card height */}
              <div className="mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
