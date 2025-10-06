"use client";

import Link from "next/link";

const BottomNavbar = () => {
  const links = [
    { href: "/carpentry", label: "Carpentry & Woodwork" },
    { href: "/drywall", label: "Drywall & Finishing" },
    { href: "/flooring", label: "Flooring Installation" },
    { href: "/painting", label: "Painting" },
    { href: "/plumbing", label: "Plumbing" },
    { href: "/electrical", label: "Electrical (Minor Work)" },
    { href: "/renovation", label: "Full Renovation" },
    { href: "/exterior", label: "Exterior Works" },
  ];

  return (
    <nav className="hidden sm:block bg-black text-white text-base w-full">
      <div className="p-x-192 py-2 flex justify-between gap-10 md:gap-12 lg:gap-16 overflow-x-auto scrollbar-hide">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap hover:text-yellow-400 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
