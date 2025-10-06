"use client";

import {
  Hammer,
  Paintbrush,
  Wrench,
  Home,
  Plug,
  Layers,
  Ruler,
  Settings,
  Shield,
  Cog,
  Grid,
} from "lucide-react";

const services = [
  {
    title: "Carpentry & Woodwork",
    desc: "We specialize in decks, fences, pergolas, gazebos, stairs, railings, and framing.",
    icon: <Hammer className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Drywall & Finishing",
    desc: "We handle drywall installation, taping, mudding, sanding, priming, & painting.",
    icon: <Layers className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Flooring Installation",
    desc: "We install vinyl, laminate, engineered hardwood, and tile flooring.",
    icon: <Ruler className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Painting",
    desc: "We provide interior & exterior painting services, including trims & baseboards.",
    icon: <Paintbrush className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Plumbing",
    desc: "We install fixtures, repair pipes, handle drain work, and provide water line.",
    icon: <Wrench className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Electrical (Minor Work)",
    desc: "We install light fixtures, outlets, and switches within our licensed scope.",
    icon: <Plug className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Full Renovation",
    desc: "We manage home & condo renovations, basement finishing & kitchen upgrades.",
    icon: <Home className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Exterior Works",
    desc: "We construct decks, retaining walls, and siding. We also install exterior trims.",
    icon: <Shield className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Welding & Fabrication",
    desc: "We offer custom steel and aluminum welding services and metal fabrication.",
    icon: <Settings className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Lathe & Machining",
    desc: "We create custom parts, fittings, and precision metalwork.",
    icon: <Cog className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Repairs & Maintenance",
    desc: "We manage home & condo renovations, basement finishing, kitchen upgrades.",
    icon: <Wrench className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Custom Projects",
    desc: "We build accent walls, shelving, and assemble furniture tailored to your needs.",
    icon: <Grid className="w-8 h-8 text-yellow-400" />,
  },
];

export default function OurServices() {
  return (
    <section className="w-full p-x-192 py-14 bg-white text-center">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <div className="relative w-64 max-w-3xl mx-auto mt-3">
  <svg
    viewBox="0 0 500 40"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-6"
  >
    <path
      d="M0 35C125 0 375 0 500 35"
      stroke="#FACC15"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
</div>

      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6 bg-white flex flex-col items-start text-left"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-full shadow-md transition">
          ALL SERVICES
        </button>
      </div>
    </section>
  );
}
